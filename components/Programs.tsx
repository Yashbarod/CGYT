"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Brain, Wind, Users, RefreshCw, BookOpen, ChevronRight } from "lucide-react";
import { useLang } from "./LanguageContext";

const programs = [
  {
    icon: Zap,
    color: "bg-flame-50 text-flame-600 border-flame-100",
    en: "Medical Detox",
    hi: "मेडिकल डिटॉक्स",
    duration_en: "7–14 days",
    duration_hi: "7–14 दिन",
    desc_en:
      "Safe, medically supervised withdrawal management. Our team monitors vitals 24/7 and manages withdrawal symptoms with clinical precision and compassion.",
    desc_hi:
      "सुरक्षित, चिकित्सकीय रूप से पर्यवेक्षित विदड्रॉल प्रबंधन। हमारी टीम 24/7 वाइटल्स की निगरानी करती है।",
    tags_en: ["Alcohol", "Opioids", "Benzodiazepines", "Stimulants"],
    tags_hi: ["शराब", "ओपिओइड्स", "बेंजो", "स्टिमुलेंट्स"],
  },
  {
    icon: Brain,
    color: "bg-gold-50 text-gold-600 border-gold-100",
    en: "Psychiatric & Counseling",
    hi: "मनोचिकित्सा परामर्श",
    duration_en: "Ongoing",
    duration_hi: "निरंतर",
    desc_en:
      "One-on-one and group therapy with licensed psychiatrists and counselors. CBT, motivational interviewing, and trauma-informed approaches.",
    desc_hi:
      "लाइसेंस प्राप्त मनोचिकित्सकों और परामर्शदाताओं के साथ व्यक्तिगत और समूह चिकित्सा। CBT और आघात-सूचित दृष्टिकोण।",
    tags_en: ["CBT", "Group Therapy", "Trauma Care", "EMDR"],
    tags_hi: ["CBT", "ग्रुप थेरेपी", "ट्रॉमा केयर", "EMDR"],
  },
  {
    icon: Wind,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    en: "Yoga & Mindfulness",
    hi: "योग एवं माइंडफुलनेस",
    duration_en: "Daily sessions",
    duration_hi: "दैनिक सत्र",
    desc_en:
      "Daily yoga, pranayama, and mindfulness meditation to rebuild the mind-body connection, reduce cravings, and manage stress naturally.",
    desc_hi:
      "दैनिक योग, प्राणायाम और माइंडफुलनेस मेडिटेशन से मन-शरीर संबंध को फिर से बनाएं, तृष्णा कम करें।",
    tags_en: ["Pranayama", "Meditation", "Yoga Nidra", "Art Therapy"],
    tags_hi: ["प्राणायाम", "ध्यान", "योग निद्रा", "कला चिकित्सा"],
  },
  {
    icon: Users,
    color: "bg-purple-50 text-purple-600 border-purple-100",
    en: "Family Therapy",
    hi: "पारिवारिक चिकित्सा",
    duration_en: "Weekly sessions",
    duration_hi: "साप्ताहिक सत्र",
    desc_en:
      "Addiction affects the whole family. Dedicated sessions rebuild trust, improve communication, and prepare the family for the homecoming transition.",
    desc_hi:
      "नशा पूरे परिवार को प्रभावित करता है। समर्पित सत्र विश्वास को फिर से बनाते हैं और घर वापसी के लिए तैयार करते हैं।",
    tags_en: ["Trust Rebuilding", "Communication", "Co-dependency", "Al-Anon"],
    tags_hi: ["विश्वास", "संचार", "सह-निर्भरता", "अल-अनोन"],
  },
  {
    icon: RefreshCw,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    en: "Aftercare & Relapse Prevention",
    hi: "आफ्टरकेयर और रिलैप्स रोकथाम",
    duration_en: "12–24 months",
    duration_hi: "12–24 महीने",
    desc_en:
      "Recovery doesn't end at discharge. Monthly follow-up sessions, alumni support groups, and 24/7 crisis counseling keep you grounded.",
    desc_hi:
      "रिकवरी डिस्चार्ज पर नहीं रुकती। मासिक फॉलो-अप सत्र, पूर्व छात्र सहायता समूह और 24/7 संकट परामर्श।",
    tags_en: ["Monthly Follow-up", "Alumni Network", "Crisis Support", "HALT Method"],
    tags_hi: ["मासिक फॉलो-अप", "पूर्व छात्र नेटवर्क", "संकट समर्थन", "HALT विधि"],
  },
  {
    icon: BookOpen,
    color: "bg-orange-50 text-orange-600 border-orange-100",
    en: "Vocational Rehabilitation",
    hi: "व्यावसायिक पुनर्वास",
    duration_en: "Flexible",
    duration_hi: "लचीला",
    desc_en:
      "Rebuild confidence and purpose through skill training, job placement support, and entrepreneurship guidance for a meaningful, productive life.",
    desc_hi:
      "कौशल प्रशिक्षण, रोजगार सहायता और उद्यमिता मार्गदर्शन के माध्यम से आत्मविश्वास और उद्देश्य को फिर से बनाएं।",
    tags_en: ["Skill Training", "Job Support", "Entrepreneurship", "Life Skills"],
    tags_hi: ["कौशल प्रशिक्षण", "रोजगार", "उद्यमिता", "जीवन कौशल"],
  },
];

export default function Programs() {
  const { lang, t } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProgram, setActiveProgram] = useState<number | null>(null);

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

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="py-28 bg-charcoal-900 relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-flame-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-flame-500" />
            <span className="text-flame-400 text-xs font-bold tracking-[0.25em] uppercase">
              {t("Treatment Programs", "उपचार कार्यक्रम")}
            </span>
            <div className="h-px w-10 bg-flame-500" />
          </div>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {t(
              "Comprehensive Care,\nPersonalized Recovery",
              <span className="hindi text-4xl">व्यापक देखभाल,<br />व्यक्तिगत रिकवरी</span>
            )}
          </h2>
          <p className={`reveal text-white/50 max-w-xl mx-auto text-base leading-relaxed ${lang === "hi" ? "hindi" : ""}`}>
            {t(
              "No two journeys are alike. Our multi-disciplinary team crafts a personalized treatment plan for every individual.",
              "कोई भी दो यात्राएं एक जैसी नहीं होतीं। हमारी बहु-अनुशासनात्मक टीम हर व्यक्ति के लिए एक व्यक्तिगत उपचार योजना बनाती है।"
            )}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((prog, i) => (
            <div
              key={prog.en}
              className={`reveal delay-${(i % 3) * 100 + 100} relative bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-2xl p-7 cursor-pointer transition-all duration-300 group ${
                activeProgram === i ? "ring-2 ring-flame-500" : ""
              }`}
              onClick={() => setActiveProgram(activeProgram === i ? null : i)}
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${prog.color}`}>
                <prog.icon size={20} />
              </div>

              {/* Duration pill */}
              <div className="absolute top-6 right-6">
                <span className="text-white/30 text-xs bg-white/5 px-2 py-1 rounded-full border border-white/10">
                  {lang === "en" ? prog.duration_en : prog.duration_hi}
                </span>
              </div>

              <h3 className={`font-display font-bold text-white text-lg mb-3 group-hover:text-gold-300 transition-colors ${lang === "hi" ? "hindi font-sans text-base" : ""}`}>
                {lang === "en" ? prog.en : prog.hi}
              </h3>

              <p className={`text-white/50 text-sm leading-relaxed mb-5 ${lang === "hi" ? "hindi" : ""}`}>
                {lang === "en" ? prog.desc_en : prog.desc_hi}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {(lang === "en" ? prog.tags_en : prog.tags_hi).map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/10 ${lang === "hi" ? "hindi" : ""}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom arrow */}
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={18} className="text-gold-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal mt-12 text-center">
          <p className={`text-white/30 text-sm ${lang === "hi" ? "hindi" : ""}`}>
            {t(
              "All programs are supervised by qualified psychiatrists, psychologists, and social workers.",
              "सभी कार्यक्रम योग्य मनोचिकित्सकों, मनोवैज्ञानिकों और समाज कार्यकर्ताओं द्वारा पर्यवेक्षित हैं।"
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
