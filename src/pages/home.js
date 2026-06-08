import { initPageAnimations, initHeroAnimation, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';
import { getSettings, getPageSettings } from '../api/settings.js';
import { getNews, getFeatured } from '../api/news.js';

export function homePage() {
  // Hardcoded fallback data — overridden by CMS settings when available
  const defaultCategoryImages = [
    '/engine-assemblies-and-components.jpg',
    '/chassis-system.jpg',
    'break-system.jpg',
    'cabin-system.jpg',
  ];

  const defaultCategoryIcons = [
    `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`,
    `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  ];

  const defaultCategoryHrefs = ['/products?cat=engine', '/products?cat=chassis', '/products?cat=brake', '/products?cat=cabin'];

  const defaultCategoryTitleKeys = [
    'home.categories.engine.title', 'home.categories.chassis.title',
    'home.categories.break.title', 'home.categories.cabin.title',
  ];
  const defaultCategoryDescKeys = [
    'home.categories.engine.desc', 'home.categories.chassis.desc',
    'home.categories.break.desc', 'home.categories.cabin.desc',
  ];

  const defaultWhyImages = ['/research.jpg', '/manufacture.jpg', '/assembly.jpg', '/QA.jpg'];
  const defaultWhyIcons = [
    `<svg class="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    `<svg class="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    `<svg class="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`,
    `<svg class="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`,
  ];
  const defaultWhyTitleKeys = [
    'home.why.premiumQuality.title', 'home.why.globalReach.title',
    'home.why.wideRange.title', 'home.why.expertSupport.title',
  ];
  const defaultWhyDescKeys = [
    'home.why.premiumQuality.desc', 'home.why.globalReach.desc',
    'home.why.wideRange.desc', 'home.why.expertSupport.desc',
  ];

  const html = `
    <!-- Hero Section -->
    <section class="relative pt-16 sm:pt-20 lg:pt-24 sm:max-h-[45vh] xl:min-h-[85vh] 2xl:min-h-[85vh] flex items-center justify-center md:justify-start overflow-hidden">
      <div class="absolute inset-0">
        <img id="home-hero-img" src="/banner-home.png"
             alt="Heavy duty truck"
             class=" w-full h-full object-cover" />
      </div>

      <div class="hero-content relative z-10 w-full px-4 py-3 sm:px-8 lg:w-auto lg:max-w-4xl lg:py-20 lg:px-20 xl:px-10 2xl:px-28">
        <div class="hero-headline-block lg:max-w-none">
          <div class="hero-badge inline-flex items-center gap-1.5 lg:gap-2 bg-black/50 lg:bg-brand-gold/10 border border-brand-gold/30
                      rounded-full px-2.5 py-1 lg:px-4 lg:py-2 mb-3 lg:mb-8">
            <span class="hero-badge-dot w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span class="hero-badge-text text-brand-gold text-sm sm:text-base font-medium" id="home-hero-badge">${t('home.hero.badge')}</span>
          </div>

          <h1 class="hero-title heading-xl text-white text-lg sm:text-3xl lg:text-6xl mb-3 lg:mb-6 py-1 lg:py-3 text-left">
            <span id="home-hero-h1">${t('home.hero.title1')}</span> <br/>
            <div class="mt-1.5 lg:mt-8"/>
            <span class="text-gradient-gold" id="home-hero-h2">${t('home.hero.title2')}</span><br/>
            <div class="mt-1.5 lg:mt-8"/>
            <span id="home-hero-h3">${t('home.hero.title3')}</span>
          </h1>
        </div>

        <div class="hero-cta hidden lg:flex w-full flex-col gap-3 lg:flex-row lg:flex-wrap lg:gap-4">
          <a id="home-hero-btn1" href="/products" class="btn-primary btn-lg w-full justify-center text-sm uppercase tracking-widest lg:w-auto">
            <span id="home-hero-btn1-label">${t('home.hero.exploreProducts')}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a id="home-hero-btn2" href="/about" class="btn-outline btn-lg w-full justify-center text-sm uppercase tracking-widest lg:w-auto">
            <span id="home-hero-btn2-label">${t('home.hero.learnMore')}</span>
          </a>
        </div>
      </div>
    </section>

    <div class="container-custom lg:hidden hero-cta flex w-full flex-col gap-3 lg:flex-row lg:flex-wrap lg:gap-4 mt-5">
        <a id="home-hero-btn1-mobile" href="/products" class="btn-primary btn-lg w-full justify-center text-sm uppercase tracking-widest lg:w-auto">
          <span id="home-hero-btn1-label-mobile">${t('home.hero.exploreProducts')}</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
        <a id="home-hero-btn2-mobile" href="/about" class="btn-outline btn-lg w-full justify-center text-sm uppercase tracking-widest lg:w-auto">
          <span id="home-hero-btn2-label-mobile">${t('home.hero.learnMore')}</span>
        </a>
    </div>

    <!-- About Preview -->
    <section class="section-dark py-16">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-left text-center md:text-left">
            <span class="badge-gold mb-4 text-base" id="home-about-badge">${t('home.about.badge')}</span>
            <h2 class="heading-lg text-white text-balance mt-4 mb-6">
              <span id="home-about-h1">${t('home.about.heading1')}</span> <span class="text-gradient-gold inline-block mb-3 py-1" id="home-about-hl">${t('home.about.headingHighlight')},</span><br class="hidden lg:block"/>
              <span id="home-about-h2">${t('home.about.heading2')}</span>
            </h2>
            <p class="text-brand-gray-light leading-relaxed mb-6 text-justify" id="home-about-p1">
              ${t('home.about.p1')}
            </p>
            <p class="text-brand-gray-light leading-relaxed mb-8 text-justify" id="home-about-p2">
              ${t('home.about.p2')}
            </p>
            <a href="/about" class="btn-outline text-sm uppercase tracking-widest" id="home-about-btn">
              ${t('home.about.learnMore')}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
          <div class="reveal-right relative">
            <div class="img-hover-zoom rounded-2xl overflow-hidden">
              <img id="home-about-img" src="/R&D-2.webp"
                   alt="Createk warehouse" class="w-full h-[250px] sm:h-[350px] lg:h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Principle Banner -->
    <section class="relative overflow-hidden md:pb-16">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-brand-gold/20 via-brand-gold/10 to-brand-gold/20"></div>
        <div class="absolute inset-0 bg-brand-black/90"></div>
      </div>
      <div class="container-custom relative z-10 text-center reveal">
        <div class="max-w-3xl mx-auto">
          <svg class="w-12 h-12 text-brand-gold mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <h2 class="heading-lg text-balance leading-relaxed md:leading-tight mb-4">
            <span class="text-gradient-gold" id="home-principle-heading">${t('home.principle.heading')}</span>
          </h2>
          <div class="w-20 h-1 bg-brand-gold mx-auto mb-6 rounded-full"></div>
          <p class="text-brand-gray-light text-lg leading-relaxed" id="home-principle-sub">
            ${t('home.principle.subtitle')}
          </p>
        </div>
      </div>
    </section>

    <!-- Product Categories -->
    <section class="section-darker py-16">
      <div class="container-custom">
        <div class="text-center mb-16 reveal">
          <span class="badge-gold mb-4 text-base">${t('home.products.badge')}</span>
          <h2 class="heading-lg text-white leading-relaxed text-balance mt-4 mb-4">
            ${t('home.products.heading1')} <span class="text-gradient-gold">${t('home.products.headingHighlight')}</span>
          </h2>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6" data-stagger id="home-categories-grid">
          ${[0,1,2,3].map(i => `
            <a href="${defaultCategoryHrefs[i]}" class="card-hover group block cursor-pointer">
              <div class="relative h-44 overflow-hidden img-hover-zoom">
                <img src="${defaultCategoryImages[i]}" alt="${t(defaultCategoryTitleKeys[i])}"
                     class="w-full h-full object-cover transition-transform duration-500" />
                <div class="absolute top-3 left-3 w-10 h-10 rounded-lg bg-brand-gold/20 backdrop-blur-sm
                            flex items-center justify-center text-brand-gold
                            group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  ${defaultCategoryIcons[i]}
                </div>
              </div>
              <div class="p-5">
                <h3 class="font-heading text-xl font-semibold uppercase text-white mb-1.5
                           group-hover:text-brand-gold transition-colors pr-5 min-h-[3.5rem] flex items-start">
                           ${t(defaultCategoryTitleKeys[i])}
                </h3>
                <p class="text-brand-gray-light text-base line-clamp-2 min-h-[2.5rem]">${t(defaultCategoryDescKeys[i])}</p>
              </div>
            </a>
          `).join('')}
        </div>

        <div class="text-center mt-12 reveal">
          <a href="/products" class="btn-primary btn-lg text-sm uppercase tracking-widest">
            ${t('home.products.viewAll')}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-dark py-16">
      <div class="container-custom">
        <div class="text-center mb-16 reveal">
          <span class="badge-gold mb-4 text-base">${t('home.why.badge')}</span>
          <h2 class="heading-lg text-white mt-4 leading-relaxed md:leading-tight">
            ${t('home.why.heading1')} <span class="text-gradient-gold">${t('home.why.headingHighlight')}</span> ${t('home.why.heading2')}
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger id="home-why-grid">
          ${[0,1,2,3].map(i => `
            <div class="why-card relative overflow-hidden rounded-2xl group hover:border-brand-gold/30 transition-all border border-white/10 min-h-[280px]">
              <img src="${defaultWhyImages[i]}" alt="" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-brand-black/75 group-hover:bg-brand-black/65 transition-colors duration-500"></div>
              <div class="relative z-10 p-6 text-center h-full flex flex-col items-center justify-start gap-4">
                <div class="w-16 h-16 rounded-2xl bg-brand-gold/10 backdrop-blur-sm flex items-center justify-center shrink-0
                            group-hover:bg-brand-gold/20 transition-colors">
                  ${defaultWhyIcons[i]}
                </div>
                <h4 class="font-heading leading-tight text-balance text-xl font-semibold uppercase text-white min-h-[3.5rem] flex items-center">${t(defaultWhyTitleKeys[i])}</h4>
                <p class="text-brand-white text-base text-balance">${t(defaultWhyDescKeys[i])}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Recent News -->
    <section class="section-darker py-16">
      <div class="container-custom">
        <div class="text-center mb-16 reveal">
          <span class="badge-gold mb-4 text-base">${t('home.news.badge')}</span>
          <h2 class="heading-lg text-white mt-4">
            ${t('home.news.heading1')} <span class="text-gradient-gold">${t('home.news.headingHighlight')}</span>
          </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-6 items-stretch" data-stagger>
          <div id="home-news-featured" class="flex"></div>
          <div class="flex flex-col gap-6" id="home-news-articles"></div>
        </div>

        <div class="text-center mt-12 reveal">
          <a href="/news" class="btn-primary btn-lg text-sm uppercase tracking-widest cursor-pointer">
            ${t('home.news.viewAll')}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-dark py-16">
      <div class="container-custom">
        <div class="relative bg-gradient-to-br from-brand-gold/10 via-brand-gray-dark to-brand-gray-dark
                    border border-brand-gold/20 rounded-3xl p-6 sm:p-12 md:p-20 text-center overflow-hidden reveal-scale">
          <div class="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <h2 class="heading-lg text-white leading-relaxed md:leading-tight mb-10" id="home-cta-heading">
              ${t('home.cta.heading1')} <span class="text-gradient-gold">${t('home.cta.headingHighlight')}</span>
              <div class="mt-0 md:mt-3"/>
              ${t('home.cta.heading2')}
            </h2>
            <a href="/contact" class="btn-primary btn-lg text-sm uppercase tracking-widest cursor-pointer" id="home-cta-btn">
              ${t('home.cta.contactUs')}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  return {
    html,
    init() {
      initHeroAnimation();
      initPageAnimations();
      animateImageHover();

      // Overlay CMS settings
      getPageSettings('home').then(pg => {
        if (!pg) return;

        // Hero
        const h = pg.hero;
        if (h) {
          if (h.image) { const el = document.getElementById('home-hero-img'); if (el) el.src = h.image; }
          if (h.badge) { const el = document.getElementById('home-hero-badge'); if (el) el.textContent = h.badge; }
          if (h.heading1) { const el = document.getElementById('home-hero-h1'); if (el) el.textContent = h.heading1; }
          if (h.heading2) { const el = document.getElementById('home-hero-h2'); if (el) el.textContent = h.heading2; }
          if (h.heading3) { const el = document.getElementById('home-hero-h3'); if (el) el.textContent = h.heading3; }
          if (h.btn1Label) { document.querySelectorAll('#home-hero-btn1-label, #home-hero-btn1-label-mobile').forEach(el => el.textContent = h.btn1Label); }
          if (h.btn1Url) { document.querySelectorAll('#home-hero-btn1, #home-hero-btn1-mobile').forEach(el => el.href = h.btn1Url); }
          if (h.btn2Label) { document.querySelectorAll('#home-hero-btn2-label, #home-hero-btn2-label-mobile').forEach(el => el.textContent = h.btn2Label); }
          if (h.btn2Url) { document.querySelectorAll('#home-hero-btn2, #home-hero-btn2-mobile').forEach(el => el.href = h.btn2Url); }
        }

        // About preview
        const a = pg.about;
        if (a) {
          if (a.image) { const el = document.getElementById('home-about-img'); if (el) el.src = a.image; }
          if (a.badge) { const el = document.getElementById('home-about-badge'); if (el) el.textContent = a.badge; }
          if (a.heading1) { const el = document.getElementById('home-about-h1'); if (el) el.textContent = a.heading1; }
          if (a.headingHighlight) { const el = document.getElementById('home-about-hl'); if (el) el.textContent = a.headingHighlight + ','; }
          if (a.heading2) { const el = document.getElementById('home-about-h2'); if (el) el.textContent = a.heading2; }
          if (a.p1) { const el = document.getElementById('home-about-p1'); if (el) el.textContent = a.p1; }
          if (a.p2) { const el = document.getElementById('home-about-p2'); if (el) el.textContent = a.p2; }
        }

        // Principle
        const p = pg.principle;
        if (p) {
          if (p.heading) { const el = document.getElementById('home-principle-heading'); if (el) el.textContent = p.heading; }
          if (p.subtitle) { const el = document.getElementById('home-principle-sub'); if (el) el.textContent = p.subtitle; }
        }

        // Categories — overlay titles/descriptions/images from CMS
        if (pg.categories?.length) {
          const grid = document.getElementById('home-categories-grid');
          if (grid) {
            const cards = grid.querySelectorAll('a');
            pg.categories.forEach((cat, i) => {
              if (!cards[i]) return;
              if (cat.title) { const h3 = cards[i].querySelector('h3'); if (h3) h3.textContent = cat.title; }
              if (cat.desc) { const p = cards[i].querySelector('p'); if (p) p.textContent = cat.desc; }
              if (cat.image) { const img = cards[i].querySelector('img'); if (img) img.src = cat.image; }
            });
          }
        }

        // Why Choose Us — overlay from CMS
        if (pg.why?.length) {
          const grid = document.getElementById('home-why-grid');
          if (grid) {
            const cards = grid.querySelectorAll('.why-card');
            pg.why.forEach((item, i) => {
              if (!cards[i]) return;
              if (item.title) { const h4 = cards[i].querySelector('h4'); if (h4) h4.textContent = item.title; }
              if (item.desc) { const p = cards[i].querySelector('p'); if (p) p.textContent = item.desc; }
              if (item.image) { const img = cards[i].querySelector('img'); if (img) img.src = item.image; }
            });
          }
        }

        // CTA
        const cta = pg.cta;
        if (cta) {
          const el = document.getElementById('home-cta-heading');
          if (el && (cta.heading1 || cta.headingHighlight || cta.heading2)) {
            el.innerHTML = `${cta.heading1 || t('home.cta.heading1')} <span class="text-gradient-gold">${cta.headingHighlight || t('home.cta.headingHighlight')}</span><div class="mt-0 md:mt-3"/>${cta.heading2 || t('home.cta.heading2')}`;
          }
          if (cta.button) { const btn = document.getElementById('home-cta-btn'); if (btn) btn.textContent = cta.button; }
        }
      });

      // Stats from CMS
      getSettings().then(settings => {
        if (!settings?.company?.stats) return;
        const s = settings.company.stats;
        const statEls = document.querySelectorAll('[data-count]');
        const statValues = [s.years, s.products, s.countries, s.satisfaction];
        statEls.forEach((el, i) => {
          if (statValues[i] !== undefined) el.setAttribute('data-count', statValues[i]);
        });
      });

      // Featured article from dedicated API endpoint
      getFeatured().then(f => {
        const featuredContainer = document.getElementById('home-news-featured');
        if (!featuredContainer || !f || f.message) return;

        featuredContainer.innerHTML = `
          <a href="/news/${f.slug}" class="news-featured-card group card-hover block cursor-pointer overflow-hidden rounded-2xl w-full">
            <div class="relative h-full min-h-[280px]">
              <img src="${f.imageFull || f.image || '/news/featured/featured-article-banner.png'}" alt="${f.title}"
                   class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 sm:p-8 bg-brand-gold">
                <span class="bg-black text-brand-gold text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full self-start mb-2">${f.categories?.[0]?.name || t('news.featured.badge')}</span>
                <h3 class="font-heading text-xl sm:text-2xl font-semibold uppercase text-black mb-2">${f.title}</h3>
                <p class="text-black/70 text-base leading-relaxed mb-4 line-clamp-2">${f.excerpt}</p>
                <div class="flex items-center justify-between">
                  <span class="text-black/60 text-sm sm:text-base">${f.dateFormatted}</span>
                  <span class="text-black text-sm sm:text-base font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    ${t('home.news.readArticle')}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>
        `;
      });

      // Recent articles for the sidebar list
      getNews(1, 3).then(data => {
        const newsContainer = document.getElementById('home-news-articles');
        if (!newsContainer || !data?.items?.length) return;

        newsContainer.innerHTML = data.items.map(article => `
          <a href="/news/${article.slug}" class="news-article-card group card-hover block cursor-pointer">
            <div class="p-6 flex gap-6 items-start">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-brand-gold text-xs font-medium uppercase tracking-wider">${article.categories?.[0]?.name || ''}</span>
                  <span class="w-1 h-1 rounded-full bg-brand-gray-light/50"></span>
                  <span class="text-brand-gray-light text-xs">${article.dateFormatted}</span>
                </div>
                <h3 class="font-heading text-lg font-semibold uppercase text-white mb-2
                           group-hover:text-brand-gold transition-colors line-clamp-2">${article.title}</h3>
                <p class="text-brand-gray-light text-sm leading-relaxed line-clamp-2">${article.excerpt}</p>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center
                          group-hover:bg-brand-gold/20 transition-colors mt-1">
                <svg class="w-5 h-5 text-brand-gold transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </a>
        `).join('');
      });
    },
  };
}
