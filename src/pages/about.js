import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';

export function aboutPage() {
  const milestoneYears = ['1998', '2005', '2012', '2018', '2023'];
  const milestones = t('about.milestones.items');

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

  const valueKeys = ['qualityFirst', 'reliability', 'partnership', 'innovation'];
  const valueIcons = [
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>`,
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
    `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
  ];

  const team = [
    { name: 'Somchai Panich', roleKey: 'ceo', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
    { name: 'Linda Kessler', roleKey: 'vpOps', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face' },
    { name: 'Raj Patel', roleKey: 'headQuality', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
    { name: 'Yuki Tanaka', roleKey: 'salesDirector', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face' },
  ];

  const html = `
    <!-- Hero -->
    <section class="relative pt-32 pb-12 sm:pb-20 overflow-hidden">
      <div class="absolute max-h-[30vh] md:max-h-none inset-0">
        <img src="/banner-about.jpg"
             alt="Workshop" class="w-full h-full object-cover hidden md:block" />
        <img src="/banner-about-mobile.jpg"
             alt="Workshop" class="w-full h-full object-cover block md:hidden" />
        <div class="absolute hidden md:block inset-0 bg-gradient-to-r from-brand-black/60 via-brand-black/30 to-brand-black/0"></div>
      </div>
      <div class="container-custom relative z-10 pt-12 mt-40 md:mt-0">
        <div class="reveal text-center md:text-left">
          <span class="badge-gold mb-4 text-base">${t('about.hero.badge')}</span>
          <h1 class="heading-xl text-white mt-4 mb-6">
            ${t('about.hero.heading1')}<br/>
            <div class="mt-5"/>
            <span class="text-gradient-gold">${t('about.hero.headingHighlight')}</span>
          </h1>
          <p class="text-white text-lg max-w-3xl leading-relaxed text-balance">
            ${t('about.hero.subtitle')}
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section-darker py-12">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-left">
            <div class="relative overflow-hidden md:pr-4 md:pb-4">
              <div class="img-hover-zoom rounded-2xl overflow-hidden">
                <img src="/1.jpg"
                     alt="Createk facility" class="facility-image w-full h-[300px] lg:h-[460px] object-cover" />
              </div>
            </div>
          </div>
          <div class="reveal-right text-center md:text-left">
            <span class="badge-gold mb-4 text-base">${t('about.story.badge')}</span>
            <h2 class="heading-lg text-white mt-4 mb-6">
              ${t('about.story.heading1')}<br/>
              <div class="mt-4"/>
              <span class="text-gradient-gold">${t('about.story.headingHighlight')}</span>
            </h2>
            <p class="text-white leading-relaxed mb-6 text-justify">
              ${t('about.story.p1')}
            </p>
            <p class="text-white leading-relaxed mb-6 text-justify">
              ${t('about.story.p2')}
            </p>
            <p class="text-brand-gold font-semibold leading-relaxed text-lg italic text-justify">
              ${t('about.story.p3')}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- R&D Process Video -->
    <section class="section-darker pt-0 pb-12">
      <div class="container-custom reveal">
        <div class="rd-video-wrapper relative rounded-2xl overflow-hidden">
          <video class="rd-process-video w-full h-[220px] sm:h-[300px] lg:h-full object-cover rounded-2xl"
                 autoplay loop muted playsinline preload="auto" poster="/1.jpg">
            <source src="/R&D-createk-process.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>

    <!-- Product Categories -->
    <section class="section-darker pt-0 pb-12">
      <div class="container-custom">
        <div class="text-center mb-16 reveal">
          <span class="badge-gold mb-4 text-base">${t('home.products.badge')}</span>
          <h2 class="heading-lg text-white mt-4 mb-4">
            ${t('home.products.heading1')} <span class="text-gradient-gold">${t('home.products.headingHighlight')}</span>
          </h2>
          <p class="text-brand-gray-light max-w-2xl mx-auto">
            ${t('home.products.subtitle')}
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
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

    <!-- CTA -->
    <section class="section-darker pt-0 pb-12 md:py-12">
      <div class="container-custom text-center reveal">
        <h2 class="heading-lg text-white mb-6">${t('about.cta.heading1')} <span class="text-gradient-gold">${t('about.cta.headingHighlight')}</span> 
        <div class="mt-3"/>
        ${t('about.cta.heading2')}</h2>
        <a href="#/contact" class="btn-primary btn-lg text-sm uppercase tracking-widest">
          ${t('about.cta.button')}
        </a>
      </div>
    </section>
  `;

  return {
    html,
    init() {
      initPageAnimations();
      animateImageHover();
    },
  };
}
