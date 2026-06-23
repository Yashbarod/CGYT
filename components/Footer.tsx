"use client";

import { Heart, Phone } from "lucide-react";
import { useLang } from "./LanguageContext";

const footerLinks = {
  en: {
    quick: [
      { label: "About Us", href: "#about" },
      { label: "Programs", href: "#programs" },
      { label: "Success Stories", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    programs: [
      { label: "Medical Detox", href: "#programs" },
      { label: "Counseling", href: "#programs" },
      { label: "Yoga & Mindfulness", href: "#programs" },
      { label: "Family Therapy", href: "#programs" },
      { label: "Aftercare", href: "#programs" },
    ],
  },
  hi: {
    quick: [
      { label: "हमारे बारे में", href: "#about" },
      { label: "कार्यक्रम", href: "#programs" },
      { label: "सफलता की कहानियाँ", href: "#testimonials" },
      { label: "संपर्क", href: "#contact" },
    ],
    programs: [
      { label: "मेडिकल डिटॉक्स", href: "#programs" },
      { label: "परामर्श", href: "#programs" },
      { label: "योग और माइंडफुलनेस", href: "#programs" },
      { label: "पारिवारिक चिकित्सा", href: "#programs" },
      { label: "आफ्टरकेयर", href: "#programs" },
    ],
  },
};

export default function Footer() {
  const { lang, t } = useLang();
  const links = footerLinks[lang];

  return (
    <footer className="bg-charcoal-900 border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex flex-col leading-none mb-5">
              <span className="text-gold-400 text-xs font-semibold tracking-[0.25em] uppercase mb-0.5">
                {t("Nav Chetna", "नव चेतना")}
              </span>
              <span className="text-white font-display text-2xl font-bold">
                {t("De-addiction Centre", "नशा मुक्ति केंद्र")}
              </span>
            </a>
            <p className={`text-white/40 text-sm leading-relaxed max-w-xs mb-6 ${lang === "hi" ? "hindi" : ""}`}>
              {t(
                "Restoring lives through compassionate, evidence-based addiction treatment since 2012. NABH accredited.",
                "2012 से करुणामय, साक्ष्य-आधारित नशा उपचार के माध्यम से जीवन बहाल कर रहे हैं। NABH मान्यता प्राप्त।"
              )}
            </p>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-3 bg-flame-600/20 hover:bg-flame-600/30 text-flame-300 border border-flame-700/30 rounded-full px-5 py-2.5 transition-all text-sm font-medium"
            >
              <Phone size={14} />
              <span>{t("24/7 Helpline: +91 12345 67890", "24/7 हेल्पलाइन: +91 12345 67890")}</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-white font-semibold text-sm mb-5 tracking-wide ${lang === "hi" ? "hindi" : ""}`}>
              {t("Quick Links", "त्वरित लिंक")}
            </h4>
            <ul className="space-y-3">
              {links.quick.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className={`text-white/40 hover:text-white/80 text-sm transition-colors ${lang === "hi" ? "hindi" : ""}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className={`text-white font-semibold text-sm mb-5 tracking-wide ${lang === "hi" ? "hindi" : ""}`}>
              {t("Programs", "कार्यक्रम")}
            </h4>
            <ul className="space-y-3">
              {links.programs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-white/40 hover:text-white/80 text-sm transition-colors ${lang === "hi" ? "hindi" : ""}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className={`text-white/25 text-xs ${lang === "hi" ? "hindi" : ""}`}>
            © 2024 {t("Nav Chetna De-addiction & Rehabilitation Centre. All rights reserved.", "नव चेतना नशा मुक्ति एवं पुनर्वास केंद्र। सर्वाधिकार सुरक्षित।")}
          </p>
          <p className="text-white/20 text-xs flex items-center gap-1">
            {t("Made with", "बनाया गया")} <Heart size={10} className="text-flame-500" /> {t("for those who seek a new beginning", "उनके लिए जो नई शुरुआत चाहते हैं")}
          </p>
        </div>
      </div>
    </footer>
  );
}
