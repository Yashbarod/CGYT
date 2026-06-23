"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { useLang } from "./LanguageContext";

const navLinks = [
  { en: "Home", hi: "होम", href: "#home" },
  { en: "About", hi: "हमारे बारे में", href: "#about" },
  { en: "Programs", hi: "कार्यक्रम", href: "#programs" },
  { en: "Stories", hi: "सफलता की कहानियाँ", href: "#testimonials" },
  { en: "Contact", hi: "संपर्क", href: "#contact" },
];

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal-800/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-none group">
          <span className="text-gold-400 text-xs font-semibold tracking-[0.25em] uppercase mb-0.5">
            {t("Nav Chetna", "नव चेतना")}
          </span>
          <span className="text-white font-display text-xl font-bold tracking-tight group-hover:text-gold-300 transition-colors">
            {t("De-addiction Centre", "नशा मुक्ति केंद्र")}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium text-white/80 hover:text-gold-300 transition-colors ${
                lang === "hi" ? "hindi" : ""
              }`}
            >
              {lang === "en" ? link.en : link.hi}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggle}
            className="hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full transition-all border border-white/20"
          >
            <span className={lang === "en" ? "text-gold-300" : "text-white/50"}>EN</span>
            <span className="text-white/30">|</span>
            <span className={`hindi ${lang === "hi" ? "text-gold-300" : "text-white/50"}`}>हि</span>
          </button>

          {/* Helpline CTA */}
          <a
            href="tel:+911234567890"
            className="hidden sm:flex items-center gap-2 bg-flame-600 hover:bg-flame-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300"
          >
            <Phone size={14} />
            <span>{t("Helpline", "हेल्पलाइन")}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-charcoal-800/98 backdrop-blur-md border-t border-white/10 px-6 pb-6 pt-2">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-white/80 hover:text-gold-300 py-3 border-b border-white/10 text-base transition-colors ${
                  lang === "hi" ? "hindi" : ""
                }`}
              >
                {lang === "en" ? link.en : link.hi}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={toggle}
                className="flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-3 py-2 rounded-full border border-white/20"
              >
                <span className={lang === "en" ? "text-gold-300" : ""}>EN</span>
                <span className="text-white/30">|</span>
                <span className={`hindi ${lang === "hi" ? "text-gold-300" : ""}`}>हि</span>
              </button>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 bg-flame-600 text-white text-sm font-semibold px-4 py-2 rounded-full"
              >
                <Phone size={14} />
                {t("Call Helpline", "हेल्पलाइन कॉल करें")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
