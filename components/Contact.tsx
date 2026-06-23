"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MapPin, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useLang } from "./LanguageContext";

export default function Contact() {
  const { lang, t, ts } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    relation: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      label_en: "24/7 Helpline",
      label_hi: "24/7 हेल्पलाइन",
      value: "+91 12345 67890",
      href: "tel:+911234567890",
      accent: "text-flame-500",
    },
    {
      icon: Phone,
      label_en: "Admissions",
      label_hi: "प्रवेश",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      accent: "text-gold-600",
    },
    {
      icon: Mail,
      label_en: "Email Us",
      label_hi: "ईमेल करें",
      value: "care@navchetna.org",
      href: "mailto:care@navchetna.org",
      accent: "text-blue-500",
    },
    {
      icon: MapPin,
      label_en: "Centre Location",
      label_hi: "केंद्र का पता",
      value: "123 Recovery Lane, Sector 7, New Delhi - 110001",
      href: "#",
      accent: "text-emerald-500",
    },
    {
      icon: Clock,
      label_en: "Visiting Hours",
      label_hi: "मिलने का समय",
      value: "Sat & Sun · 10 AM – 4 PM",
      href: null,
      accent: "text-purple-500",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 bg-charcoal-900 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-flame-600/10 blur-3xl" />

      {/* Emergency banner */}
      <div className="absolute top-0 left-0 right-0 bg-flame-600 py-3 text-center">
        <a
          href="tel:+911234567890"
          className={`text-white font-bold text-sm flex items-center justify-center gap-3 ${lang === "hi" ? "hindi" : ""}`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          {t(
            "Crisis? Call our 24/7 helpline immediately: +91 12345 67890",
            "संकट? अभी हमारी 24/7 हेल्पलाइन पर कॉल करें: +91 12345 67890"
          )}
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-flame-500" />
            <span className="text-flame-400 text-xs font-bold tracking-[0.25em] uppercase">
              {t("Reach Out", "संपर्क करें")}
            </span>
            <div className="h-px w-10 bg-flame-500" />
          </div>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {t(
              <>The First Step is<br /><span className="text-gold-400">Asking for Help.</span></>,
              <span className="hindi text-4xl">पहला कदम<br /><span className="text-gold-400">मदद मांगना है।</span></span>
            )}
          </h2>
          <p className={`reveal text-white/50 max-w-lg mx-auto text-base ${lang === "hi" ? "hindi" : ""}`}>
            {t(
              "Reaching out takes courage. We make it easy, confidential, and judgment-free.",
              "मदद मांगना साहस का काम है। हम इसे आसान, गोपनीय और बिना निर्णय के बनाते हैं।"
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-5">
            {contactInfo.map((item) => (
              <div
                key={item.label_en}
                className="reveal flex items-start gap-4 bg-white/5 hover:bg-white/[0.08] border border-white/10 rounded-2xl p-5 transition-all group"
              >
                <div className={`mt-0.5 ${item.accent} flex-shrink-0`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <p className={`text-white/40 text-xs mb-0.5 ${lang === "hi" ? "hindi" : ""}`}>
                    {lang === "en" ? item.label_en : item.label_hi}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white font-medium text-base hover:text-gold-300 transition-colors group-hover:text-gold-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-base">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Confidentiality note */}
            <div className="reveal bg-flame-900/30 border border-flame-700/30 rounded-2xl p-5">
              <p className={`text-flame-300 text-sm leading-relaxed ${lang === "hi" ? "hindi" : ""}`}>
                <span className="font-bold">{t("Strictly Confidential:", "पूर्णतः गोपनीय:")}</span>{" "}
                {t(
                  "All communications are protected under patient confidentiality norms. Your identity is never shared without your explicit consent.",
                  "सभी संचार रोगी गोपनीयता मानदंडों के तहत संरक्षित हैं। आपकी पहचान कभी भी आपकी स्पष्ट सहमति के बिना साझा नहीं की जाती।"
                )}
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="reveal bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-emerald-400" size={32} />
                </div>
                <h3 className={`text-white font-display text-2xl font-bold ${lang === "hi" ? "hindi font-sans" : ""}`}>
                  {t("We'll Be In Touch", "हम जल्द संपर्क करेंगे")}
                </h3>
                <p className={`text-white/50 text-sm max-w-xs ${lang === "hi" ? "hindi" : ""}`}>
                  {t(
                    "Thank you for taking this courageous step. Our team will reach you within 2 hours.",
                    "इस साहसी कदम के लिए धन्यवाद। हमारी टीम 2 घंटे के भीतर आपसे संपर्क करेगी।"
                  )}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-gold-400 text-sm hover:text-gold-300 transition-colors mt-2"
                >
                  {t("Submit another enquiry", "एक और पूछताछ भेजें")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className={`text-white font-display text-xl font-bold mb-2 ${lang === "hi" ? "hindi font-sans" : ""}`}>
                  {t("Send Us a Message", "हमें संदेश भेजें")}
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`text-white/40 text-xs mb-1.5 block ${lang === "hi" ? "hindi" : ""}`}>
                      {t("Your Name *", "आपका नाम *")}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-flame-500 transition-colors text-sm ${lang === "hi" ? "hindi" : ""}`}
                      placeholder={ts("Ramesh Kumar", "रमेश कुमार")}
                    />
                  </div>
                  <div>
                    <label className={`text-white/40 text-xs mb-1.5 block ${lang === "hi" ? "hindi" : ""}`}>
                      {t("Phone Number *", "फोन नंबर *")}
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-flame-500 transition-colors text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className={`text-white/40 text-xs mb-1.5 block ${lang === "hi" ? "hindi" : ""}`}>
                    {t("I am the patient's...", "मैं मरीज का/की...")}
                  </label>
                  <select
                    value={form.relation}
                    onChange={(e) => setForm({ ...form, relation: e.target.value })}
                    className={`w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white/70 focus:outline-none focus:border-flame-500 transition-colors text-sm appearance-none ${lang === "hi" ? "hindi" : ""}`}
                  >
                    <option value="" className="bg-charcoal-800">
                      {t("Select relationship", "रिश्ता चुनें")}
                    </option>
                    <option value="self" className="bg-charcoal-800">{t("Myself (the patient)", "मैं खुद")}</option>
                    <option value="parent" className="bg-charcoal-800">{t("Parent", "माता / पिता")}</option>
                    <option value="spouse" className="bg-charcoal-800">{t("Spouse / Partner", "पति / पत्नी")}</option>
                    <option value="sibling" className="bg-charcoal-800">{t("Sibling", "भाई / बहन")}</option>
                    <option value="friend" className="bg-charcoal-800">{t("Friend / Well-wisher", "मित्र / शुभचिंतक")}</option>
                  </select>
                </div>

                <div>
                  <label className={`text-white/40 text-xs mb-1.5 block ${lang === "hi" ? "hindi" : ""}`}>
                    {t("Tell us briefly (optional)", "संक्षेप में बताएं (वैकल्पिक)")}
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-flame-500 transition-colors text-sm resize-none ${lang === "hi" ? "hindi" : ""}`}
                    placeholder={ts(
                      "What substance is involved? How long has it been? Any prior treatment?",
                      "कौन सा पदार्थ शामिल है? कितने समय से है? कोई पूर्व उपचार?"
                    )}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary justify-center text-base py-4"
                >
                  <Send size={16} />
                  {t("Send Message", "संदेश भेजें")}
                </button>

                <p className={`text-white/25 text-xs text-center ${lang === "hi" ? "hindi" : ""}`}>
                  {t(
                    "By submitting, you agree to be contacted by Nav Chetna staff. Confidentiality guaranteed.",
                    "सबमिट करके, आप नव चेतना स्टाफ द्वारा संपर्क किए जाने के लिए सहमत हैं। गोपनीयता की गारंटी।"
                  )}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
