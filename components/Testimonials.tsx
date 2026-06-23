"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLang } from "./LanguageContext";

const stories = [
  {
    name: "Rahul M.",
    location_en: "Delhi",
    location_hi: "दिल्ली",
    years: "3",
    avatar: "RM",
    color: "bg-flame-600",
    quote_en:
      "I walked into Nav Chetna broken — unemployed, estranged from my family, with no hope left. Three years later, I run my own business, my kids call me 'Dad' again, and I mentor others in recovery. Nav Chetna didn't just save my life. It gave me one worth living.",
    quote_hi:
      "मैं नव चेतना में टूटा हुआ आया था — बेरोजगार, परिवार से दूर, कोई उम्मीद नहीं। तीन साल बाद, मैं अपना व्यवसाय चलाता हूं, मेरे बच्चे मुझे 'पापा' कहते हैं। नव चेतना ने सिर्फ मेरी जान नहीं बचाई। इसने मुझे जीने लायक जीवन दिया।",
  },
  {
    name: "Sunita K.",
    location_en: "Lucknow",
    location_hi: "लखनऊ",
    years: "2",
    avatar: "SK",
    color: "bg-gold-600",
    quote_en:
      "As a woman seeking help for alcohol addiction, I was terrified of judgment. The counselors here treated me like a human being — not a problem to be fixed. The women's support group changed everything. I found my voice again.",
    quote_hi:
      "शराब की लत के लिए मदद मांगने वाली एक महिला के रूप में, मुझे निर्णय का डर था। यहां के परामर्शदाताओं ने मुझे एक इंसान की तरह व्यवहार किया। महिला सहायता समूह ने सब कुछ बदल दिया। मैंने फिर से अपनी आवाज पाई।",
  },
  {
    name: "Vikram S.",
    location_en: "Jaipur",
    location_hi: "जयपुर",
    years: "5",
    avatar: "VS",
    color: "bg-emerald-600",
    quote_en:
      "Heroin had taken everything — my job, my marriage, my self-respect. The detox was hard, but the team never gave up on me, even when I gave up on myself. Five years sober today. I am living proof that recovery is real.",
    quote_hi:
      "हेरोइन ने सब कुछ ले लिया था — नौकरी, शादी, आत्म-सम्मान। डिटॉक्स कठिन था, लेकिन टीम ने कभी हार नहीं मानी। आज पांच साल से सोबर हूं। मैं जीता-जागता सबूत हूं कि रिकवरी असली है।",
  },
  {
    name: "Priya's Mother",
    location_en: "Agra",
    location_hi: "आगरा",
    years: "1.5",
    avatar: "PM",
    color: "bg-purple-600",
    quote_en:
      "My daughter was 24 when she entered Nav Chetna. The family therapy sessions taught me that I was part of the problem — and part of the solution. We healed together. Today she is 18 months clean and studying again.",
    quote_hi:
      "मेरी बेटी 24 साल की थी जब वह नव चेतना में आई। पारिवारिक चिकित्सा सत्रों ने मुझे सिखाया कि मैं समस्या का हिस्सा था। हम साथ ठीक हुए। आज वह 18 महीने से क्लीन है और फिर से पढ़ाई कर रही है।",
  },
];

export default function Testimonials() {
  const { lang, t } = useLang();
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const next = () => setCurrent((c) => (c + 1) % stories.length);
  const prev = () => setCurrent((c) => (c - 1 + stories.length) % stories.length);

  useEffect(() => {
    timeoutRef.current = setTimeout(next, 6000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [current]);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const story = stories[current];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-28 bg-cream-100 relative overflow-hidden"
    >
      {/* Left diagonal accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-flame-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-flame-500" />
            <span className="text-flame-600 text-xs font-bold tracking-[0.25em] uppercase">
              {t("Recovery Stories", "रिकवरी की कहानियाँ")}
            </span>
            <div className="h-px w-10 bg-flame-500" />
          </div>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-bold text-charcoal-800 leading-tight">
            {t(
              <>Real People. <span className="text-flame-600">Real Recoveries.</span></>,
              <span className="hindi text-4xl">असली लोग। <span className="text-flame-600">असली रिकवरी।</span></span>
            )}
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="reveal relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl shadow-charcoal-900/5 p-10 lg:p-14 relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-6 right-8 text-flame-100">
              <Quote size={80} strokeWidth={1} />
            </div>

            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-cream-200">
              <div
                className="h-full bg-flame-500 transition-all duration-300"
                style={{ width: `${((current + 1) / stories.length) * 100}%` }}
              />
            </div>

            <div className="flex items-start gap-6 mb-8">
              {/* Avatar */}
              <div className={`${story.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                {story.avatar}
              </div>
              <div>
                <h4 className="font-display font-bold text-charcoal-800 text-lg">{story.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-charcoal-400 text-sm ${lang === "hi" ? "hindi" : ""}`}>
                    {lang === "en" ? story.location_en : story.location_hi}
                  </span>
                  <span className="text-charcoal-300">·</span>
                  <span className="text-flame-600 text-sm font-semibold">
                    {story.years} {t("years sober", "साल सोबर")}
                  </span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <blockquote className={`text-charcoal-600 text-lg leading-relaxed relative z-10 ${lang === "hi" ? "hindi" : ""}`}>
              &ldquo;{lang === "en" ? story.quote_en : story.quote_hi}&rdquo;
            </blockquote>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10">
              {/* Dots */}
              <div className="flex gap-2">
                {stories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-flame-500 w-6 h-2.5"
                        : "bg-charcoal-200 hover:bg-charcoal-300 w-2.5 h-2.5"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border-2 border-charcoal-200 hover:border-flame-500 hover:text-flame-600 flex items-center justify-center transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-flame-500 hover:bg-flame-600 text-white flex items-center justify-center transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="reveal text-center text-charcoal-300 text-xs mt-8">
          {t(
            "Names and identifying details have been changed to protect privacy. Shared with consent.",
            "गोपनीयता की रक्षा के लिए नाम और पहचान योग्य विवरण बदल दिए गए हैं। सहमति के साथ साझा किया गया।"
          )}
        </p>
      </div>
    </section>
  );
}
