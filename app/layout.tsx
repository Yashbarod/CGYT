import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hindi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nav Chetna — De-addiction & Rehabilitation Center",
  description:
    "Nav Chetna is a compassionate de-addiction and rehabilitation center offering evidence-based treatment, counseling, and aftercare support. A new beginning awaits. नई चेतना, नई शुरुआत।",
  keywords: [
    "de-addiction center",
    "rehabilitation center",
    "nasha mukti kendra",
    "Nav Chetna",
    "drug rehabilitation",
    "alcohol de-addiction",
    "mental health",
  ],
  openGraph: {
    title: "Nav Chetna — De-addiction & Rehabilitation Center",
    description: "Compassionate, evidence-based recovery. नई चेतना, नई शुरुआत।",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${notoDevanagari.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
