"use client";

import { useEffect, useRef } from "react";
import { Heart, Shield, Users, Award } from "lucide-react";
import { useLang } from "./LanguageContext";

const values = [
  {
    icon: Heart,
    en: "Compassion First",
    hi: "करुणा सर्वप्रथम",
    desc_en: "We meet every individual without judgment — with warmth, dignity, and unconditional care.",
    desc_hi: "हम हर व्यक्ति से बिना किसी निर्णय के मिलते हैं — गर्मजोशी, गरिमा और बिना शर्त देखभाल के साथ।",
  },
  {
    icon: Shield,
    en: "Evidence-Based",
    hi: "साक्ष्य-आधारित",
    desc_en: "Our treatment protocols are rooted in modern addiction science and validated clinical approaches.",
    desc_hi: "हमारे उपचार प्रोटोकॉल आधुनिक व्यसन विज्ञान और मान्य नैदानिक दृष्टिकोणों पर आधारित हैं।",
  },
  {
    icon: Users,
    en: "Family Included",
    hi: "परिवार शामिल",
    desc_en: "Recovery is a family journey. We counsel and support the entire support system, not just the patient.",
    desc_hi: "रिकवरी एक पारिवारिक यात्रा है। हम पूरे सहायता तंत्र को परामर्श और समर्थन देते हैं।",
  },
  {
    icon: Award,
    en: "Lifelong Support",
    hi: "जीवनभर का समर्थन",
    desc_en: "Our commitment doesn't end at discharge. Aftercare programs and alumni networks keep you supported.",
    desc_hi: "हमारी प्रतिबद्धता डिस्चार्ज पर नहीं रुकती। आफ्टरकेयर प्रोग्राम और पूर्व छात्र नेटवर्क आपको सहारा देते हैं।",
  },
];

export default function About() {
  const { lang, t } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-28 bg-cream-100 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle, #e35413 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-flame-500" />
              <span className="text-flame-600 text-xs font-bold tracking-[0.25em] uppercase">
                {t("Who We Are", "हम कौन हैं")}
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal-800 leading-tight">
              {t(
                <>
                  More Than a Centre.<br />
                  <span className="text-flame-600">A Second Chance.</span>
                </>,
                <span className="hindi text-4xl">
                  एक केंद्र से बढ़कर।<br />
                  <span className="text-flame-600">एक नई शुरुआत।</span>
                </span>
              )}
            </h2>
          </div>

          <div className="reveal delay-200">
            <p className={`text-charcoal-500 text-lg leading-relaxed mb-6 ${lang === "hi" ? "hindi" : ""}`}>
              {t(
                "Founded in 2012, Nav Chetna was born from a simple belief: that every person struggling with addiction deserves dignity, expert care, and a genuine path to recovery.",
                "2012 में स्थापित, नव चेतना एक सरल विश्वास से जन्मी: कि नशे से जूझ रहे हर व्यक्ति को गरिमा, विशेषज्ञ देखभाल और रिकवरी का एक वास्तविक रास्ता मिलना चाहिए।"
              )}
            </p>
            <p className={`text-charcoal-400 text-base leading-relaxed ${lang === "hi" ? "hindi" : ""}`}>
              {t(
                "We don't just treat addiction — we treat people. Our holistic approach combines medical detox, psychological counseling, yoga & meditation, vocational therapy, and family reintegration to rebuild whole, fulfilled lives.",
                "हम सिर्फ नशे का इलाज नहीं करते — हम लोगों का इलाज करते हैं। हमारा समग्र दृष्टिकोण चिकित्सा डिटॉक्स, मनोवैज्ञानिक परामर्श, योग और ध्यान, व्यावसायिक चिकित्सा और पारिवारिक पुनर्एकीकरण को जोड़ता है।"
              )}
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <div
              key={val.en}
              className={`reveal delay-${(i + 1) * 100} card-hover bg-white rounded-2xl p-7 border border-cream-200 shadow-sm`}
            >
              <div className="w-12 h-12 bg-flame-50 rounded-xl flex items-center justify-center mb-5">
                <val.icon className="text-flame-600" size={22} />
              </div>
              <h3 className={`font-display font-bold text-charcoal-800 text-lg mb-3 ${lang === "hi" ? "hindi font-sans" : ""}`}>
                {lang === "en" ? val.en : val.hi}
              </h3>
              <p className={`text-charcoal-400 text-sm leading-relaxed ${lang === "hi" ? "hindi" : ""}`}>
                {lang === "en" ? val.desc_en : val.desc_hi}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal mt-16 bg-charcoal-800 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-1">
              {t("Accredited & Certified", "मान्यता प्राप्त और प्रमाणित")}
            </p>
            <h3 className={`text-white font-display text-2xl font-bold ${lang === "hi" ? "hindi font-sans text-xl" : ""}`}>
              {t("Recognized by Ministry of Social Justice", "सामाजिक न्याय मंत्रालय द्वारा मान्यता प्राप्त")}
            </h3>
          </div>
          <div className="flex gap-6 text-center flex-shrink-0">
            {[["NABH", "Accredited"], ["ISO", "9001:2015"], ["MSJE", "Certified"]].map(([abbr, label]) => (
              <div key={abbr}>
                <div className="text-gold-400 font-display font-bold text-xl">{abbr}</div>
                <div className="text-white/40 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
