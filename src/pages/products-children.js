import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';
import { getRouteParam } from '../router.js';
import { findCategory, findMother } from './products.js';

export function productsChildrenPage() {
  const catId = getRouteParam('cat');
  const motherId = getRouteParam('mother');
  const cat = findCategory(catId);
  const mother = findMother(catId, motherId);

  if (!cat || !mother) {
    return {
      html: `
        <section class="section-dark pt-32">
          <div class="container-custom text-center">
            <p class="text-brand-gray-light mb-6">${t('products.ui.noResults') || 'Not found'}</p>
            <a href="#/products" class="btn-primary btn-lg text-sm uppercase tracking-widest">${t('products.ui.back')}</a>
          </div>
        </section>
      `,
      init() {},
    };
  }

  const html = `
    <section class="section-dark pt-32">
      <div class="container-custom">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm mb-8 reveal">
          <a href="#/products?cat=${cat.id}" class="text-brand-gray-light hover:text-brand-gold transition-colors cursor-pointer">
            ${t(`products.categories.${cat.id}.title`)}
          </a>
          <svg class="w-4 h-4 text-brand-gray-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
          <span class="text-white font-medium">${t(`products.mothers.${mother.id}`)}</span>
        </div>

        <!-- Back button -->
        <a href="#/products?cat=${cat.id}"
           class="flex items-center gap-2 text-brand-gold text-sm font-semibold uppercase tracking-wider
                  mb-8 hover:gap-3 transition-all cursor-pointer reveal w-fit">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
          </svg>
          ${t('products.ui.back')}
        </a>

        <div class="mb-10 reveal">
          <h2 class="heading-lg text-white mb-4">${t(`products.mothers.${mother.id}`)}</h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" data-stagger>
          ${mother.children.map(child => `
            <a href="#/products/detail?cat=${cat.id}&mother=${mother.id}&child=${child.key}"
               class="card-hover group cursor-pointer block">
              <div class="relative h-56 overflow-hidden img-hover-zoom">
                <img src="${child.img}" alt="${t(`products.items.${child.key}.name`)}"
                     class="w-full h-full object-cover transition-transform duration-500" />
                <div class="absolute top-3 right-3">
                  <span class="bg-brand-black/80 backdrop-blur-sm text-brand-gold text-xs font-mono px-3 py-1.5 rounded-lg">
                    ${child.code}
                  </span>
                </div>
              </div>
              <div class="p-5">
                <h3 class="font-heading text-base uppercase text-white mb-1
                           group-hover:text-brand-gold transition-colors">
                  ${t(`products.items.${child.key}.name`)}
                </h3>
                <p class="text-brand-gray-light text-xs mb-3">${t(`products.items.${child.key}.specs`)}</p>
                <span class="text-brand-gold text-xs font-semibold uppercase tracking-wider
                             flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  ${t('products.ui.detail')}
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </span>
              </div>
            </a>
          `).join('')}
        </div>
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
