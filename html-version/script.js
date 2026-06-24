/* ─── NAV CHETNA — Main Script ─────────────────────────────────────────── */
(function () {
  'use strict';

  /* ── Language state ──────────────────────────────────────── */
  let lang = 'hi';

  const content = {
    /* NAVBAR */
    'nav-begin': { en: 'New Beginning Awaits', hi: 'नई शुरुआत का इंतज़ार है' },
    'nav-center': { en: 'De-addiction Centre', hi: 'नशा मुक्ति केंद्र' },
    'nav-home': { en: 'Home', hi: 'होम' },
    'nav-about': { en: 'About', hi: 'हमारे बारे में' },
    'nav-programs': { en: 'Programs', hi: 'कार्यक्रम' },
    'nav-stories': { en: 'Stories', hi: 'कहानियाँ' },
    'nav-contact': { en: 'Contact', hi: 'संपर्क' },
    'nav-helpline': { en: 'Helpline', hi: 'हेल्पलाइन' },
    'mob-call': { en: 'Call Helpline', hi: 'हेल्पलाइन कॉल करें' },

    /* HERO */
    'hero-eyebrow': { en: 'New Beginning Awaits', hi: 'नई शुरुआत का इंतज़ार है' },
    'hero-h1-1': { en: 'Break Free.', hi: 'टूटी जंजीरें,' },
    'hero-h1-2-en': { en: 'Rise Again.', hi: '' },
    'hero-h1-2-hi': { en: '', hi: 'उठो, जियो।' },
    'hero-sub': {
      en: 'At Nav Chetna, recovery is not just a goal — it\'s a transformation. Evidence-based care, compassionate counselors, and a community that believes in you.',
      hi: 'नव चेतना में, रिकवरी सिर्फ एक लक्ष्य नहीं है — यह एक परिवर्तन है। साक्ष्य-आधारित देखभाल, दयालु परामर्शदाता, और एक समुदाय जो आप पर विश्वास करता है।',
    },
    'hero-cta': { en: 'Get Help Now', hi: 'अभी मदद पाएं' },
    'hero-link': { en: 'Our Story', hi: 'हमारी कहानी' },
    'helpline-label': { en: '24/7 Helpline:', hi: '24/7 हेल्पलाइन:' },
    'stat-l1': { en: 'Years of Service', hi: 'सेवा के वर्ष' },
    'stat-l2': { en: 'Lives Transformed', hi: 'जीवन बदले' },
    'stat-l3': { en: 'Recovery Rate', hi: 'रिकवरी दर' },
    'stat-l4': { en: 'Expert Counselors', hi: 'विशेषज्ञ परामर्शदाता' },
    'impact-label': { en: 'Our Impact', hi: 'हमारा प्रभाव' },
    'hero-quote': {
      en: '"Every day sober is a victory. We walk beside you, every step of the way."',
      hi: '"हर सोबर दिन एक जीत है। हम हर कदम पर आपके साथ हैं।"',
    },
    'hero-author': { en: 'Dr. Priya Sharma, Founder', hi: 'डॉ. प्रिया शर्मा, संस्थापक' },
    'scroll-text': { en: 'Scroll', hi: 'स्क्रॉल' },

    /* ABOUT */
    'about-tag': { en: 'Who We Are', hi: 'हम कौन हैं' },
    'about-h2-1': { en: 'More Than a Centre.', hi: 'एक केंद्र से बढ़कर।' },
    'about-h2-2': { en: 'A Second Chance.', hi: 'एक नई शुरुआत।' },
    'about-p1': {
      en: 'Founded in 2012, Nav Chetna was born from a simple belief: that every person struggling with addiction deserves dignity, expert care, and a genuine path to recovery.',
      hi: '2012 में स्थापित, नव चेतना एक सरल विश्वास से जन्मी: कि नशे से जूझ रहे हर व्यक्ति को गरिमा, विशेषज्ञ देखभाल और रिकवरी का एक वास्तविक रास्ता मिलना चाहिए।',
    },
    'about-p2': {
      en: 'We don\'t just treat addiction — we treat people. Our holistic approach combines medical detox, psychological counseling, yoga & meditation, vocational therapy, and family reintegration to rebuild whole, fulfilled lives.',
      hi: 'हम सिर्फ नशे का इलाज नहीं करते — हम लोगों का इलाज करते हैं। हमारा समग्र दृष्टिकोण चिकित्सा डिटॉक्स, मनोवैज्ञानिक परामर्श, योग और ध्यान, व्यावसायिक चिकित्सा और पारिवारिक पुनर्एकीकरण को जोड़ता है।',
    },
    'val-t1': { en: 'Compassion First', hi: 'करुणा सर्वप्रथम' },
    'val-d1': { en: 'We meet every individual without judgment — with warmth, dignity, and unconditional care.', hi: 'हम हर व्यक्ति से बिना किसी निर्णय के मिलते हैं — गर्मजोशी, गरिमा और बिना शर्त देखभाल के साथ।' },
    'val-t2': { en: 'Evidence-Based', hi: 'साक्ष्य-आधारित' },
    'val-d2': { en: 'Our treatment protocols are rooted in modern addiction science and validated clinical approaches.', hi: 'हमारे उपचार प्रोटोकॉल आधुनिक व्यसन विज्ञान और मान्य नैदानिक दृष्टिकोणों पर आधारित हैं।' },
    'val-t3': { en: 'Family Included', hi: 'परिवार शामिल' },
    'val-d3': { en: 'Recovery is a family journey. We counsel and support the entire support system, not just the patient.', hi: 'रिकवरी एक पारिवारिक यात्रा है। हम पूरे सहायता तंत्र को परामर्श और समर्थन देते हैं।' },
    'val-t4': { en: 'Lifelong Support', hi: 'जीवनभर का समर्थन' },
    'val-d4': { en: 'Our commitment doesn\'t end at discharge. Aftercare programs and alumni networks keep you supported.', hi: 'हमारी प्रतिबद्धता डिस्चार्ज पर नहीं रुकती। आफ्टरकेयर प्रोग्राम और पूर्व छात्र नेटवर्क।' },
    'accred-sub': { en: 'Accredited & Certified', hi: 'मान्यता प्राप्त और प्रमाणित' },
    'accred-h': { en: 'Recognized by Ministry of Social Justice', hi: 'सामाजिक न्याय मंत्रालय द्वारा मान्यता प्राप्त' },

    /* PROGRAMS */
    'prog-tag': { en: 'Treatment Programs', hi: 'उपचार कार्यक्रम' },
    'prog-h': { en: 'Comprehensive Care, Personalized Recovery', hi: 'व्यापक देखभाल, व्यक्तिगत रिकवरी' },
    'prog-sub': {
      en: 'No two journeys are alike. Our multi-disciplinary team crafts a personalized treatment plan for every individual.',
      hi: 'कोई भी दो यात्राएं एक जैसी नहीं होतीं। हमारी बहु-अनुशासनात्मक टीम हर व्यक्ति के लिए एक व्यक्तिगत उपचार योजना बनाती है।',
    },
    'prog-note': {
      en: 'All programs are supervised by qualified psychiatrists, psychologists, and social workers.',
      hi: 'सभी कार्यक्रम योग्य मनोचिकित्सकों, मनोवैज्ञानिकों और समाज कार्यकर्ताओं द्वारा पर्यवेक्षित हैं।',
    },

    /* TESTIMONIALS */
    'testi-tag': { en: 'Recovery Stories', hi: 'रिकवरी की कहानियाँ' },
    'testi-h-1': { en: 'Real People.', hi: 'असली लोग।' },
    'testi-h-2': { en: 'Real Recoveries.', hi: 'असली रिकवरी।' },
    'testi-disclaimer': {
      en: 'Names and identifying details changed to protect privacy. Shared with consent.',
      hi: 'गोपनीयता की रक्षा के लिए नाम और विवरण बदले गए हैं। सहमति के साथ साझा।',
    },
    'years-sober': { en: 'years sober', hi: 'साल सोबर' },

    /* CONTACT */
    'emerg-text': { en: 'Crisis? Call our 24/7 helpline immediately:', hi: 'संकट? अभी हमारी 24/7 हेल्पलाइन पर कॉल करें:' },
    'contact-tag': { en: 'Reach Out', hi: 'संपर्क करें' },
    'contact-h-1': { en: 'The First Step is', hi: 'पहला कदम' },
    'contact-h-2': { en: 'Asking for Help.', hi: 'मदद मांगना है।' },
    'contact-sub': {
      en: 'Reaching out takes courage. We make it easy, confidential, and judgment-free.',
      hi: 'मदद मांगना साहस का काम है। हम इसे आसान, गोपनीय और बिना निर्णय के बनाते हैं।',
    },
    'ci-l1': { en: '24/7 Helpline', hi: '24/7 हेल्पलाइन' },
    'ci-l2': { en: 'Admissions', hi: 'प्रवेश' },
    'ci-l3': { en: 'Email Us', hi: 'ईमेल करें' },
    'ci-l4': { en: 'Centre Location', hi: 'केंद्र का पता' },
    'ci-l5': { en: 'Visiting Hours', hi: 'मिलने का समय' },
    'conf-text': {
      en: '<strong>Strictly Confidential:</strong> All communications are protected under patient confidentiality norms. Your identity is never shared without explicit consent.',
      hi: '<strong>पूर्णतः गोपनीय:</strong> सभी संचार रोगी गोपनीयता मानदंडों के तहत संरक्षित हैं। आपकी पहचान कभी भी स्पष्ट सहमति के बिना साझा नहीं की जाती।',
    },
    'form-title': { en: 'Send Us a Message', hi: 'हमें संदेश भेजें' },
    'form-l1': { en: 'Your Name *', hi: 'आपका नाम *' },
    'form-ph1': { en: 'Ramesh Kumar', hi: 'रमेश कुमार' },
    'form-l2': { en: 'Phone Number *', hi: 'फोन नंबर *' },
    'form-l3': { en: "I am the patient's...", hi: 'मैं मरीज का/की...' },
    'form-sel': { en: 'Select relationship', hi: 'रिश्ता चुनें' },
    'form-o1': { en: 'Myself (the patient)', hi: 'मैं खुद' },
    'form-o2': { en: 'Parent', hi: 'माता / पिता' },
    'form-o3': { en: 'Spouse / Partner', hi: 'पति / पत्नी' },
    'form-o4': { en: 'Sibling', hi: 'भाई / बहन' },
    'form-o5': { en: 'Friend / Well-wisher', hi: 'मित्र / शुभचिंतक' },
    'form-l4': { en: 'Tell us briefly (optional)', hi: 'संक्षेप में बताएं (वैकल्पिक)' },
    'form-ph4': { en: 'What substance is involved? How long? Any prior treatment?', hi: 'कौन सा पदार्थ? कितने समय से? कोई पूर्व उपचार?' },
    'form-submit': { en: 'Send Message', hi: 'संदेश भेजें' },
    'form-disc': {
      en: 'By submitting, you agree to be contacted by Nav Chetna staff. Confidentiality guaranteed.',
      hi: 'सबमिट करके, आप नव चेतना स्टाफ द्वारा संपर्क किए जाने के लिए सहमत हैं। गोपनीयता की गारंटी।',
    },
    'success-h': { en: "We'll Be In Touch", hi: 'हम जल्द संपर्क करेंगे' },
    'success-p': {
      en: 'Thank you for your courage. Our team will reach you within 2 hours.',
      hi: 'इस साहसी कदम के लिए धन्यवाद। हमारी टीम 2 घंटे के भीतर आपसे संपर्क करेगी।',
    },
    'success-reset': { en: 'Submit another enquiry', hi: 'एक और पूछताछ भेजें' },

    /* FOOTER */
    'foot-desc': {
      en: 'Restoring lives through compassionate, evidence-based addiction treatment since 2012. NABH accredited.',
      hi: '2012 से करुणामय, साक्ष्य-आधारित नशा उपचार के माध्यम से जीवन बहाल कर रहे हैं। NABH मान्यता प्राप्त।',
    },
    'foot-helpline': { en: '24/7 Helpline: +91 12345 67890', hi: '24/7 हेल्पलाइन: +91 12345 67890' },
    'foot-q-title': { en: 'Quick Links', hi: 'त्वरित लिंक' },
    'foot-p-title': { en: 'Programs', hi: 'कार्यक्रम' },
    'foot-q1': { en: 'About Us', hi: 'हमारे बारे में' },
    'foot-q2': { en: 'Programs', hi: 'कार्यक्रम' },
    'foot-q3': { en: 'Success Stories', hi: 'सफलता की कहानियाँ' },
    'foot-q4': { en: 'Contact', hi: 'संपर्क' },
    'foot-p1': { en: 'Medical Detox', hi: 'मेडिकल डिटॉक्स' },
    'foot-p2': { en: 'Counseling', hi: 'परामर्श' },
    'foot-p3': { en: 'Yoga & Mindfulness', hi: 'योग और माइंडफुलनेस' },
    'foot-p4': { en: 'Family Therapy', hi: 'पारिवारिक चिकित्सा' },
    'foot-p5': { en: 'Aftercare', hi: 'आफ्टरकेयर' },
    'foot-copy': {
      en: '© 2024 Nav Chetna De-addiction & Rehabilitation Centre. All rights reserved.',
      hi: '© 2024 नव चेतना नशा मुक्ति एवं पुनर्वास केंद्र। सर्वाधिकार सुरक्षित।',
    },
    'foot-made': { en: 'Made with ♥ for those who seek a new beginning', hi: 'उनके लिए बनाया गया ♥ जो नई शुरुआत चाहते हैं' },
  };

  function t(key) {
    return content[key]?.[lang] ?? content[key]?.en ?? key;
  }

  function applyLang() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const isHtml = el.dataset.i18nHtml;
      if (isHtml) { el.innerHTML = t(key); }
      else { el.textContent = t(key); }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    // Hindi class on body
    document.body.classList.toggle('lang-hi', lang === 'hi');

    // Apply hindi class to elements that need it
    document.querySelectorAll('[data-hindi]').forEach(el => {
      el.classList.toggle('hindi', lang === 'hi');
    });

    // Language toggle UI
    document.querySelectorAll('.lang-en').forEach(el => el.classList.toggle('active', lang === 'en'));
    document.querySelectorAll('.lang-hi-btn').forEach(el => el.classList.toggle('active', lang === 'hi'));

    // Testimonials re-render
    renderTestimonial(testiIndex);
  }

  /* ── Language Toggle ─────────────────── */
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      lang = lang === 'en' ? 'hi' : 'en';
      applyLang();
    });
  });

  /* ── Navbar scroll ───────────────────── */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ── Hamburger menu ──────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  /* ── Particle Canvas ─────────────────── */
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    function initCanvas() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      particles = Array.from({ length: 70 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.8 + 0.4,
        dx: (Math.random() - 0.5) * 0.35,
        dy: -(Math.random() * 0.55 + 0.15),
        o: Math.random() * 0.45 + 0.1,
      }));
    }

    function animCanvas() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,158,11,${p.o})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; }
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
      });
      requestAnimationFrame(animCanvas);
    }

    initCanvas();
    animCanvas();
    window.addEventListener('resize', initCanvas, { passive: true });
  }

  /* ── Reveal on scroll ────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => revealObs.observe(el));

  /* ── Counter animation ───────────────── */
  function animateCounter(el, target, suffix) {
    const duration = 1800;
    const start = performance.now();
    const isFloat = target % 1 !== 0;
    function step(now) {
      const pct = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - pct, 3);
      const val = isFloat ? (target * eased).toFixed(0) : Math.round(target * eased);
      el.textContent = val + suffix;
      if (pct < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const statsSection = document.querySelector('.stats-card');
  let countersDone = false;
  if (statsSection) {
    new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !countersDone) {
        countersDone = true;
        animateCounter(document.getElementById('c1'), 12, '+');
        animateCounter(document.getElementById('c2'), 3200, '+');
        animateCounter(document.getElementById('c3'), 87, '%');
        animateCounter(document.getElementById('c4'), 24, '');
      }
    }, { threshold: 0.4 }).observe(statsSection);
  }

  /* ── Testimonials slider ─────────────── */
  const testimonials = [
    {
      name: 'Rahul M.',
      loc_en: 'Delhi', loc_hi: 'दिल्ली',
      years: '3',
      avatar: 'RM',
      color: '#e35413',
      q_en: 'I walked into Nav Chetna broken — unemployed, estranged from my family, with no hope left. Three years later, I run my own business, my kids call me \'Dad\' again. Nav Chetna didn\'t just save my life. It gave me one worth living.',
      q_hi: 'मैं नव चेतना में टूटा हुआ आया था — बेरोजगार, परिवार से दूर। तीन साल बाद, मैं अपना व्यवसाय चलाता हूं, मेरे बच्चे मुझे \'पापा\' कहते हैं। नव चेतना ने सिर्फ मेरी जान नहीं बचाई। इसने मुझे जीने लायक जीवन दिया।',
    },
    {
      name: 'Sunita K.',
      loc_en: 'Lucknow', loc_hi: 'लखनऊ',
      years: '2',
      avatar: 'SK',
      color: '#d97706',
      q_en: 'As a woman seeking help for alcohol addiction, I was terrified of judgment. The counselors here treated me like a human being — not a problem to be fixed. The women\'s support group changed everything. I found my voice again.',
      q_hi: 'शराब की लत के लिए मदद मांगते हुए मुझे निर्णय का डर था। यहां के परामर्शदाताओं ने मुझे एक इंसान की तरह व्यवहार किया। महिला सहायता समूह ने सब कुछ बदल दिया। मैंने फिर से अपनी आवाज पाई।',
    },
    {
      name: 'Vikram S.',
      loc_en: 'Jaipur', loc_hi: 'जयपुर',
      years: '5',
      avatar: 'VS',
      color: '#059669',
      q_en: 'Heroin had taken everything — my job, my marriage, my self-respect. The detox was hard, but the team never gave up on me. Five years sober today. I am living proof that recovery is real.',
      q_hi: 'हेरोइन ने सब कुछ ले लिया था — नौकरी, शादी, आत्म-सम्मान। डिटॉक्स कठिन था, लेकिन टीम ने कभी हार नहीं मानी। आज पांच साल से सोबर हूं। मैं जीता-जागता सबूत हूं।',
    },
    {
      name: "Priya's Mother",
      loc_en: 'Agra', loc_hi: 'आगरा',
      years: '1.5',
      avatar: 'PM',
      color: '#7c3aed',
      q_en: 'My daughter was 24 when she entered Nav Chetna. The family therapy sessions taught me that I was part of the problem — and part of the solution. We healed together. Today she is 18 months clean and studying again.',
      q_hi: 'मेरी बेटी 24 साल की थी जब वह नव चेतना में आई। पारिवारिक सत्रों ने सिखाया कि मैं समस्या का हिस्सा था। हम साथ ठीक हुए। आज वह 18 महीने से क्लीन है और पढ़ाई कर रही है।',
    },
  ];

  let testiIndex = 0;
  let testiTimer = null;

  function renderTestimonial(i) {
    const d = testimonials[i];
    const isHi = lang === 'hi';

    document.getElementById('testi-avatar').style.background = d.color;
    document.getElementById('testi-avatar').textContent = d.avatar;
    document.getElementById('testi-name').textContent = d.name;
    document.getElementById('testi-loc').textContent = isHi ? d.loc_hi : d.loc_en;
    document.getElementById('testi-years').textContent = d.years + ' ' + t('years-sober');
    document.getElementById('testi-quote').textContent = '“' + (isHi ? d.q_hi : d.q_en) + '”';
    document.getElementById('testi-quote').classList.toggle('hindi', isHi);

    // Dots
    document.querySelectorAll('.testi-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === i);
    });

    // Progress bar
    const pct = ((i + 1) / testimonials.length) * 100;
    const bar = document.getElementById('testi-progress-bar');
    if (bar) bar.style.width = pct + '%';
  }

  function testiNext() {
    testiIndex = (testiIndex + 1) % testimonials.length;
    renderTestimonial(testiIndex);
  }
  function testiPrev() {
    testiIndex = (testiIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(testiIndex);
  }
  function resetTimer() {
    clearInterval(testiTimer);
    testiTimer = setInterval(testiNext, 6000);
  }

  document.getElementById('testi-next')?.addEventListener('click', () => { testiNext(); resetTimer(); });
  document.getElementById('testi-prev')?.addEventListener('click', () => { testiPrev(); resetTimer(); });
  document.querySelectorAll('.testi-dot').forEach((dot, i) => {
    dot.addEventListener('click', () => { testiIndex = i; renderTestimonial(i); resetTimer(); });
  });

  renderTestimonial(0);
  resetTimer();

  /* ── Contact form ────────────────────── */
  const contactForm = document.getElementById('contact-form');
  const successState = document.getElementById('success-state');
  const formWrap = document.getElementById('form-wrap');
  const resetBtn = document.getElementById('reset-form');

  contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    formWrap.style.display = 'none';
    successState.classList.add('show');
  });

  resetBtn?.addEventListener('click', () => {
    contactForm?.reset();
    formWrap.style.display = 'block';
    successState.classList.remove('show');
  });

  /* ── Initial render ──────────────────── */
  applyLang();

})();
