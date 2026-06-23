"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Phone, ChevronRight } from "lucide-react";
import { useLang } from "./LanguageContext";

const stats = [
  { en: "Years of Service", hi: "सेवा के वर्ष", value: "12+" },
  { en: "Lives Transformed", hi: "जीवन बदले", value: "3,200+" },
  { en: "Recovery Rate", hi: "रिकवरी दर", value: "87%" },
  { en: "Expert Counselors", hi: "विशेषज्ञ परामर्शदाता", value: "24" },
];

export default function Hero() {
  const { lang, t } = useLang();
  const particleRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = particleRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; r: number; dx: number; dy: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: -Math.random() * 0.6 - 0.2,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-[#1a0a00]" />

      {/* Orange glow orb */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-flame-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gold-500/10 blur-[100px] pointer-events-none" />

      {/* Particle canvas */}
      <canvas
        ref={particleRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-flame-500/30 to-transparent" />
      <div className="absolute top-0 left-[calc(50%-1px)] w-px h-32 bg-gradient-to-b from-gold-400/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="h-px w-12 bg-gold-400" />
              <span className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase">
                {t("New Beginning Awaits", "नई शुरुआत का इंतज़ार है")}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-4">
              {lang === "en" ? (
                <>
                  Break Free.<br />
                  <span className="gradient-text">Rise Again.</span>
                </>
              ) : (
                <span className="hindi text-5xl lg:text-6xl">
                  टूटी जंजीरें,<br />
                  <span className="gradient-text">उठो, जियो।</span>
                </span>
              )}
            </h1>

            {/* Bilingual Sub-headline */}
            <div className="mb-8 space-y-1">
              {lang === "en" ? (
                <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                  At Nav Chetna, recovery is not just a goal — it&apos;s a transformation. Evidence-based care, compassionate counselors, and a community that believes in you.
                </p>
              ) : (
                <p className="hindi text-white/60 text-lg leading-relaxed max-w-lg">
                  नव चेतना में, रिकवरी सिर्फ एक लक्ष्य नहीं है — यह एक परिवर्तन है। साक्ष्य-आधारित देखभाल, दयालु परामर्शदाता, और एक समुदाय जो आप पर विश्वास करता है।
                </p>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                <Phone size={16} />
                {t("Get Help Now", "अभी मदद पाएं")}
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors group"
              >
                {t("Our Story", "हमारी कहानी")}
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            {/* 24/7 helpline chip */}
            <div className="mt-8 inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-white/70 text-sm">
                {t("24/7 Helpline:", "24/7 हेल्पलाइन:")}
                <a href="tel:+911234567890" className="text-gold-300 font-bold ml-1.5 hover:text-gold-200">
                  +91 12345 67890
                </a>
              </span>
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-flame-500/20 rounded-2xl" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <p className="text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                {t("Our Impact", "हमारा प्रभाव")}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.en} className="group">
                    <div className="text-4xl font-display font-bold text-white group-hover:text-gold-300 transition-colors">
                      {stat.value}
                    </div>
                    <div className={`text-white/50 text-sm mt-1 ${lang === "hi" ? "hindi" : ""}`}>
                      {lang === "en" ? stat.en : stat.hi}
                    </div>
                    <div className="mt-2 h-0.5 w-8 bg-flame-500/50 group-hover:w-full transition-all duration-500 rounded-full" />
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className={`text-white/60 text-sm italic leading-relaxed ${lang === "hi" ? "hindi not-italic" : ""}`}>
                  {t(
                    '"Every day sober is a victory. We walk beside you, every step of the way."',
                    '"हर सोबर दिन एक जीत है। हम हर कदम पर आपके साथ हैं।"'
                  )}
                </p>
                <p className="text-gold-400 text-xs font-semibold mt-2">
                  — {t("Dr. Priya Sharma, Founder", "डॉ. प्रिया शर्मा, संस्थापक")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-xs tracking-widest uppercase">{t("Scroll", "स्क्रॉल")}</span>
        <ArrowDown size={16} />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#fffdf9"
          />
        </svg>
      </div>
    </section>
  );
}
