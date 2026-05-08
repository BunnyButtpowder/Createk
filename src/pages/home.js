import { initPageAnimations, initHeroAnimation, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';

export function homePage() {
  const productCategories = [
    {
      titleKey: 'home.categories.engine.title',
      descKey: 'home.categories.engine.desc',
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
      img: '/engine-assemblies-and-components.jpg',
    },
    {
      titleKey: 'home.categories.chassis.title',
      descKey: 'home.categories.chassis.desc',
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
      img: '/chassis-system.jpg',
    },
    {
      titleKey: 'home.categories.break.title',
      descKey: 'home.categories.break.desc',
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`,
      img: 'break-system.jpg',
    },
    {
      titleKey: 'home.categories.cabin.title',
      descKey: 'home.categories.cabin.desc',
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
      img: 'cabin-system.jpg',
    },
  ];

  const stats = [
    { value: 25, suffix: '+', labelKey: 'home.stats.yearsExperience' },
    { value: 5000, suffix: '+', labelKey: 'home.stats.productsAvailable' },
    { value: 80, suffix: '+', labelKey: 'home.stats.countriesServed' },
    { value: 99, suffix: '%', labelKey: 'home.stats.customerSatisfaction' },
  ];

  const newsArticles = t('news.articles.items');

  const html = `
    <!-- Hero Section -->
    <section class="relative sm:max-h-[45vh] xl:min-h-[85vh] 2xl:min-h-[85vh] flex items-center justify-center md:justify-start overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 mt-10 2xl:mt-0">
        <img src="/banner-home.png"
             alt="Heavy duty truck"
             class="object-cover" data-parallax="0.2" />
      </div>

      <div class="hero-content relative z-10 w-full px-4 mt-16 pt-1 sm:px-8 lg:w-auto lg:max-w-3xl lg:mt-28 lg:pt-32 lg:pb-20 lg:px-20 xl:px-10 2xl:px-28">
        <div class="hero-headline-block lg:max-w-none">
          <div class="hero-badge inline-flex items-center gap-1.5 lg:gap-2 bg-black/50 lg:bg-brand-gold/10 border border-brand-gold/30
                      rounded-full px-2.5 py-1 lg:px-4 lg:py-2 mb-3 lg:mb-8">
            <span class="hero-badge-dot w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span class="hero-badge-text text-brand-gold text-sm sm:text-base font-medium">${t('home.hero.badge')}</span>
          </div>

          <h1 class="hero-title heading-xl text-white text-lg sm:text-3xl lg:text-7xl mb-3 lg:mb-6 py-1 lg:py-3 text-left">
            ${t('home.hero.title1')} <br/>
            <div class="mt-1.5 lg:mt-8"/>
            <span class="text-gradient-gold">${t('home.hero.title2')}</span><br/>
            <div class="mt-1.5 lg:mt-8"/>
            ${t('home.hero.title3')}
          </h1>
        </div>

        <div class="hero-cta hidden lg:flex w-full flex-col gap-3 lg:flex-row lg:flex-wrap lg:gap-4">
          <a href="#/products" class="btn-primary btn-lg w-full justify-center text-sm uppercase tracking-widest lg:w-auto">
            ${t('home.hero.exploreProducts')}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a href="#/about" class="btn-outline btn-lg w-full justify-center text-sm uppercase tracking-widest lg:w-auto">
            ${t('home.hero.learnMore')}
          </a>
        </div>
      </div>
    </section>

    <div class="container-custom lg:hidden hero-cta flex w-full flex-col gap-3 lg:flex-row lg:flex-wrap lg:gap-4 mt-5">
        <a href="#/products" class="btn-primary btn-lg w-full justify-center text-sm uppercase tracking-widest lg:w-auto">
          ${t('home.hero.exploreProducts')}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
        <a href="#/about" class="btn-outline btn-lg w-full justify-center text-sm uppercase tracking-widest lg:w-auto">
          ${t('home.hero.learnMore')}
        </a>
    </div>

    <!-- About Preview -->
    <section class="section-dark py-16">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-left text-center md:text-left">
            <span class="badge-gold mb-4 text-base">${t('home.about.badge')}</span>
            <h2 class="heading-lg text-white text-balance mt-4 mb-6">
              ${t('home.about.heading1')} <span class="text-gradient-gold inline-block mb-3 py-1">${t('home.about.headingHighlight')},</span><br class="hidden lg:block"/>
              ${t('home.about.heading2')}
            </h2>
            <p class="text-brand-gray-light leading-relaxed mb-6 text-justify">
              ${t('home.about.p1')}
            </p>
            <p class="text-brand-gray-light leading-relaxed mb-8 text-justify">
              ${t('home.about.p2')}
            </p>
            <a href="#/about" class="btn-outline text-sm uppercase tracking-widest">
              ${t('home.about.learnMore')}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
          <div class="reveal-right relative">
            <div class="img-hover-zoom rounded-2xl overflow-hidden">
              <img src="/R&D-2.webp"
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
            <span class="text-gradient-gold">${t('home.principle.heading')}</span>
          </h2>
          <div class="w-20 h-1 bg-brand-gold mx-auto mb-6 rounded-full"></div>
          <p class="text-brand-gray-light text-lg leading-relaxed">
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

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6" data-stagger>
          ${productCategories.map(cat => `
            <a href="#/products" class="card-hover group block cursor-pointer">
              <div class="relative h-44 overflow-hidden img-hover-zoom">
                <img src="${cat.img}" alt="${t(cat.titleKey)}"
                     class="w-full h-full object-cover transition-transform duration-500" />
                <div class="absolute top-3 left-3 w-10 h-10 rounded-lg bg-brand-gold/20 backdrop-blur-sm
                            flex items-center justify-center text-brand-gold
                            group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  ${cat.icon}
                </div>
              </div>
              <div class="p-5">
                <h3 class="font-heading text-xl font-semibold uppercase text-white mb-1.5
                           group-hover:text-brand-gold transition-colors pr-5 min-h-[3.5rem] flex items-start">
                           ${t(cat.titleKey)}
                </h3>
                <p class="text-brand-gray-light text-base line-clamp-2 min-h-[2.5rem]">${t(cat.descKey)}</p>
              </div>
            </a>
          `).join('')}
        </div>

        <div class="text-center mt-12 reveal">
          <a href="#/products" class="btn-primary btn-lg text-sm uppercase tracking-widest">
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

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
          <div class="why-card relative overflow-hidden rounded-2xl group hover:border-brand-gold/30 transition-all border border-white/10 min-h-[280px]">
            <img src="/research.jpg" alt="" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-brand-black/75 group-hover:bg-brand-black/65 transition-colors duration-500"></div>
            <div class="relative z-10 p-4 text-center h-full flex flex-col items-center">
              <div class="w-16 h-16 rounded-2xl bg-brand-gold/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6
                          group-hover:bg-brand-gold/20 transition-colors">
                <svg class="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h4 class="font-heading leading-relaxed md:leading-tight text-balance text-4xl px-2 font-semibold uppercase text-white mb-3 min-h-[3.5rem] flex items-start">${t('home.why.premiumQuality.title')}</h4>
              <p class="text-brand-white text-xl text-balance">${t('home.why.premiumQuality.desc')}</p>
            </div>
          </div>

          <div class="why-card relative overflow-hidden rounded-2xl group hover:border-brand-gold/30 transition-all border border-white/10 min-h-[280px]">
            <img src="/manufacture.jpg" alt="" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-brand-black/75 group-hover:bg-brand-black/65 transition-colors duration-500"></div>
            <div class="relative z-10 p-4 text-center h-full flex flex-col items-center">
              <div class="w-16 h-16 rounded-2xl bg-brand-gold/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6
                          group-hover:bg-brand-gold/20 transition-colors">
                <svg class="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 class="font-heading leading-relaxed md:leading-tight text-balance text-4xl px-2 font-semibold uppercase text-white mb-3 min-h-[3.5rem] flex items-start">${t('home.why.globalReach.title')}</h4>
              <p class="text-brand-white text-xl text-balance">${t('home.why.globalReach.desc')}</p>
            </div>
          </div>

          <div class="why-card relative overflow-hidden rounded-2xl group hover:border-brand-gold/30 transition-all border border-white/10 min-h-[280px]">
            <img src="/assembly.jpg" alt="" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-brand-black/75 group-hover:bg-brand-black/65 transition-colors duration-500"></div>
            <div class="relative z-10 p-4 text-center h-full flex flex-col items-center">
              <div class="w-16 h-16 rounded-2xl bg-brand-gold/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6
                          group-hover:bg-brand-gold/20 transition-colors">
                <svg class="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <h4 class="font-heading leading-relaxed md:leading-tight text-balance text-4xl px-2 font-semibold uppercase text-white mb-3 min-h-[3.5rem] flex items-start">${t('home.why.wideRange.title')}</h4>
              <p class="text-brand-white text-xl text-balance">${t('home.why.wideRange.desc')}</p>
            </div>
          </div>

          <div class="why-card relative overflow-hidden rounded-2xl group hover:border-brand-gold/30 transition-all border border-white/10 min-h-[280px]">
            <img src="/QA.jpg" alt="" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-brand-black/75 group-hover:bg-brand-black/65 transition-colors duration-500"></div>
            <div class="relative z-10 p-4 text-center h-full flex flex-col items-center">
              <div class="w-16 h-16 rounded-2xl bg-brand-gold/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6
                          group-hover:bg-brand-gold/20 transition-colors">
                <svg class="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h4 class="font-heading leading-relaxed md:leading-tight text-balance text-4xl px-2 font-semibold uppercase text-white mb-3 min-h-[3.5rem] flex items-start">${t('home.why.expertSupport.title')}</h4>
              <p class="text-brand-white text-xl text-balance">${t('home.why.expertSupport.desc')}</p>
            </div>
          </div>
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

        <div class="grid lg:grid-cols-2 gap-6" data-stagger>
          <a href="#/news/featured" class="news-featured-card group card-hover block cursor-pointer overflow-hidden rounded-2xl">
            <div class="relative h-full min-h-[280px] sm:min-h-[420px]">
              <img src="/news/featured/featured-article-banner.jpg" alt="${t('news.featured.title')}"
                   class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 flex flex-col justify-end p-8">
                <span class="badge-gold self-start mb-4">${t('news.featured.badge')}</span>
                <h3 class="font-heading text-2xl font-semibold uppercase text-black mb-3
                           group-hover:text-brand-gold transition-colors max-w-sm">${t('news.featured.title')}</h3>
                <p class="text-black text-base leading-relaxed mb-4 line-clamp-2 max-w-sm">${t('news.featured.excerpt')}</p>
                <div class="flex items-center justify-between">
                  <span class="text-black text-base">${t('news.featured.date')}</span>
                  <span class="text-brand-gold text-base font-medium flex items-center gap-2
                               group-hover:gap-3 transition-all">
                    ${t('home.news.readArticle')}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div class="flex flex-col gap-6">
            ${newsArticles.slice(1, 4).map(article => `
              <a href="#/news" class="news-article-card group card-hover block cursor-pointer">
                <div class="p-6 flex gap-6 items-start">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-3 mb-3">
                      <span class="text-brand-gold text-xs font-medium uppercase tracking-wider">${t('news.categories.' + article.categoryId)}</span>
                      <span class="w-1 h-1 rounded-full bg-brand-gray-light/50"></span>
                      <span class="text-brand-gray-light text-xs">${article.date}</span>
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
            `).join('')}
          </div>
        </div>

        <div class="text-center mt-12 reveal">
          <a href="#/news" class="btn-primary btn-lg text-sm uppercase tracking-widest cursor-pointer">
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
            <h2 class="heading-lg text-white  leading-relaxed md:leading-tight mb-10">
              ${t('home.cta.heading1')} <span class="text-gradient-gold">${t('home.cta.headingHighlight')}</span>
              <div class="mt-0 md:mt-3"/>
              ${t('home.cta.heading2')}
            </h2>
            <a href="#/contact" class="btn-primary btn-lg text-sm uppercase tracking-widest cursor-pointer">
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
    },
  };
}
