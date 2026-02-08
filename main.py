import asyncio
import logging
import os
import tempfile
from pathlib import Path

from telegram import Update
from telegram.constants import ChatAction
from telegram.ext import (
    Application,
    CommandHandler,
    ContextTypes,
    ConversationHandler,
    MessageHandler,
    filters,
)
from yt_dlp import YoutubeDL

logging.basicConfig(level=logging.INFO)
LOGGER = logging.getLogger(__name__)

STATE_URL, STATE_FORMAT, STATE_UPLOAD = range(3)

FORMAT_HELP = (
    "Send a format request. Examples:\n"
    "- 480p\n"
    "- 720p av1\n"
    "- 1080p vp9\n"
    "- av1 + opus\n"
    "- avc\n"
    "You can combine resolution with codec and optional audio codec."
)


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    await update.message.reply_text("Send the video URL you want to download.")
    return STATE_URL


async def capture_url(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    context.user_data.clear()
    context.user_data["url"] = update.message.text.strip()
    await update.message.reply_text(FORMAT_HELP)
    return STATE_FORMAT


def build_format_selector(request: str) -> str:
    request = request.lower().replace(",", " ").replace("+", " ")
    tokens = {token for token in request.split() if token}

    resolution = None
    for res in ("480p", "720p", "1080p"):
        if res in tokens:
            resolution = int(res.replace("p", ""))
            break

    vcodec = None
    if "av1" in tokens:
        vcodec = "av01"
    elif "avc" in tokens:
        vcodec = "avc1"
    elif "vp9" in tokens:
        vcodec = "vp9"

    acodec = None
    if "opus" in tokens:
        acodec = "opus"

    video_filters = []
    if resolution:
        video_filters.append(f"height<={resolution}")
    if vcodec:
        video_filters.append(f"vcodec^={vcodec}")

    audio_filters = []
    if acodec:
        audio_filters.append(f"acodec^={acodec}")

    if video_filters:
        video_part = "bestvideo[" + "][".join(video_filters) + "]"
    else:
        video_part = "bestvideo"

    if audio_filters:
        audio_part = "bestaudio[" + "][".join(audio_filters) + "]"
    else:
        audio_part = "bestaudio"

    return f"{video_part}+{audio_part}/best"


def download_video(url: str, selector: str, output_dir: Path) -> Path:
    output_template = str(output_dir / "download.%(ext)s")
    ydl_opts = {
        "format": selector,
        "outtmpl": output_template,
        "merge_output_format": "mp4",
        "quiet": True,
        "no_warnings": True,
    }
    with YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=True)
        filename = ydl.prepare_filename(info)
        final_path = Path(filename)
        if final_path.suffix != ".mp4":
            merged = final_path.with_suffix(".mp4")
            if merged.exists():
                return merged
        return final_path


async def capture_format(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    format_request = update.message.text.strip()
    context.user_data["format_request"] = format_request
    selector = build_format_selector(format_request)
    context.user_data["selector"] = selector
    await update.message.reply_text(
        "How should I upload it? Reply with `document` or `media`.",
        parse_mode="Markdown",
    )
    return STATE_UPLOAD


async def capture_upload(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    choice = update.message.text.strip().lower()
    if choice not in {"document", "media"}:
        await update.message.reply_text("Please reply with `document` or `media`.")
        return STATE_UPLOAD

    url = context.user_data.get("url")
    selector = context.user_data.get("selector")
    await update.message.chat.send_action(ChatAction.UPLOAD_DOCUMENT)

    loop = asyncio.get_running_loop()
    with tempfile.TemporaryDirectory() as temp_dir:
        output_dir = Path(temp_dir)
        try:
            file_path = await loop.run_in_executor(
                None, download_video, url, selector, output_dir
            )
        except Exception as exc:
            LOGGER.exception("Download failed")
            await update.message.reply_text(f"Download failed: {exc}")
            return ConversationHandler.END

        caption = f"Format: {context.user_data.get('format_request')}"
        try:
            if choice == "document":
                await update.message.reply_document(
                    document=file_path.open("rb"), caption=caption
                )
            else:
                await update.message.reply_video(
                    video=file_path.open("rb"), caption=caption, supports_streaming=True
                )
        except Exception as exc:
            LOGGER.exception("Upload failed")
            await update.message.reply_text(f"Upload failed: {exc}")

    return ConversationHandler.END


async def cancel(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    await update.message.reply_text("Cancelled.")
    return ConversationHandler.END


def main() -> None:
    token = os.environ.get("BOT_TOKEN")
    if not token:
        raise RuntimeError("BOT_TOKEN environment variable is required")

    application = Application.builder().token(token).build()

    conversation = ConversationHandler(
        entry_points=[CommandHandler("start", start)],
        states={
            STATE_URL: [MessageHandler(filters.TEXT & ~filters.COMMAND, capture_url)],
            STATE_FORMAT: [
                MessageHandler(filters.TEXT & ~filters.COMMAND, capture_format)
            ],
            STATE_UPLOAD: [
                MessageHandler(filters.TEXT & ~filters.COMMAND, capture_upload)
            ],
        },
        fallbacks=[CommandHandler("cancel", cancel)],
    )

    application.add_handler(conversation)
    application.add_handler(CommandHandler("cancel", cancel))

    application.run_polling()


if __name__ == "__main__":
    main()
