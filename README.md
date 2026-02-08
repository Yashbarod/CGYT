# Telegram YT-DLP Bot

This bot downloads videos with `yt-dlp` and uploads them to Telegram as either a document or a playable media message.

## Setup

1. Create a Telegram bot and get a token from [@BotFather](https://t.me/BotFather).
2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Export the token and run:

```bash
export BOT_TOKEN="your-token-here"
python main.py
```

## Deployment options

Pick one of the following platforms to keep the bot running 24/7:

### Docker (any VPS)

1. Build the image:

```bash
docker build -t telegram-ytdlp-bot .
```

2. Run it:

```bash
docker run -d --name telegram-ytdlp-bot -e BOT_TOKEN="your-token" telegram-ytdlp-bot
```

### systemd (Linux VPS)

1. Copy the repo to `/opt/telegram-ytdlp-bot`.
2. Create `/etc/systemd/system/telegram-ytdlp-bot.service`:

```ini
[Unit]
Description=Telegram YT-DLP Bot
After=network.target

[Service]
WorkingDirectory=/opt/telegram-ytdlp-bot
Environment=BOT_TOKEN=your-token
ExecStart=/usr/bin/python3 /opt/telegram-ytdlp-bot/main.py
Restart=always

[Install]
WantedBy=multi-user.target
```

3. Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now telegram-ytdlp-bot
```

### Railway

1. Create a new Python service from this repo.
2. Set the `BOT_TOKEN` environment variable.
3. Use `python main.py` as the start command.

## Usage

- Send `/start` and provide a video URL.
- Provide a format request, for example:
  - `480p`
  - `720p av1`
  - `1080p vp9`
  - `av1 + opus`
- Choose upload type: `document` or `media`.

The bot will download the requested format and upload it accordingly.
