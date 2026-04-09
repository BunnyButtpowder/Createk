import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';
import { getRouteParam } from '../router.js';
import { findCategory, findMother, findChild } from './products.js';

export function productsDetailPage() {
  const catId = getRouteParam('cat');
  const motherId = getRouteParam('mother');
  const childKey = getRouteParam('child');
  const cat = findCategory(catId);
  const mother = findMother(catId, motherId);
  const child = findChild(catId, motherId, childKey);

  if (!cat || !mother || !child) {
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

  const siblings = mother.children.filter(c => c.key !== child.key);
  const childrenHref = `#/products/children?cat=${cat.id}&mother=${mother.id}`;

  const html = `
    <section class="section-dark pt-32">
      <div class="container-custom">
        <!-- Breadcrumb -->
        <div class="flex flex-wrap items-center gap-2 text-sm mb-8 reveal">
          <a href="#/products?cat=${cat.id}" class="text-brand-gray-light hover:text-brand-gold transition-colors cursor-pointer">
            ${t(`products.categories.${cat.id}.title`)}
          </a>
          <svg class="w-4 h-4 text-brand-gray-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
          <a href="${childrenHref}" class="text-brand-gray-light hover:text-brand-gold transition-colors cursor-pointer">
            ${t(`products.mothers.${mother.id}`)}
          </a>
          <svg class="w-4 h-4 text-brand-gray-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
          <span class="text-white font-medium">${t(`products.items.${child.key}.name`)}</span>
        </div>

        <!-- Back button -->
        <a href="${childrenHref}"
           class="flex items-center gap-2 text-brand-gold text-sm font-semibold uppercase tracking-wider
                  mb-8 hover:gap-3 transition-all cursor-pointer reveal w-fit">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
          </svg>
          ${t('products.ui.back')}
        </a>

        <!-- Product Detail -->
        <div class="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          <div class="rounded-xl overflow-hidden reveal-left">
            <img src="${child.img}" alt="${t(`products.items.${child.key}.name`)}"
                 class="w-full aspect-[4/3] object-cover" />
          </div>

          <div class="reveal-right">
            <span class="bg-brand-gold/10 text-brand-gold text-sm font-mono px-3 py-1.5 rounded-lg border border-brand-gold/20">
              ${child.code}
            </span>
            <h1 class="heading-lg text-white mt-4 mb-6">${t(`products.items.${child.key}.name`)}</h1>

            <div class="space-y-6">
              <div>
                <h3 class="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-2">${t('products.ui.productSpecs')}</h3>
                <p class="text-brand-gray-light">${t(`products.items.${child.key}.specs`)}</p>
              </div>

              <div>
                <h3 class="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-2">${t('products.ui.productIntro')}</h3>
                <p class="text-brand-gray-light leading-relaxed">${t(`products.items.${child.key}.intro`)}</p>
              </div>
            </div>

            <a href="#/contact"
               class="btn-primary btn-lg text-sm uppercase tracking-widest mt-8 inline-flex">
              ${t('products.ui.contactQuote')}
            </a>
          </div>
        </div>

        ${siblings.length > 0 ? `
          <div class="mt-20 reveal">
            <div class="flex items-center gap-4 mb-8">
              <div class="divider-gold"></div>
              <h3 class="heading-sm text-white">${t('products.ui.relatedProducts')}</h3>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
              ${siblings.map(s => `
                <a href="#/products/detail?cat=${cat.id}&mother=${mother.id}&child=${s.key}"
                   class="card-hover group cursor-pointer block">
                  <div class="relative h-44 overflow-hidden img-hover-zoom">
                    <img src="${s.img}" alt="${t(`products.items.${s.key}.name`)}"
                         class="w-full h-full object-cover transition-transform duration-500" />
                    <div class="absolute top-3 right-3">
                      <span class="bg-brand-black/80 backdrop-blur-sm text-brand-gold text-xs font-mono px-2 py-1 rounded">
                        ${s.code}
                      </span>
                    </div>
                  </div>
                  <div class="p-4">
                    <h4 class="text-white text-sm font-heading uppercase
                               group-hover:text-brand-gold transition-colors">
                      ${t(`products.items.${s.key}.name`)}
                    </h4>
                    <p class="text-brand-gray-light text-xs mt-1">${t(`products.items.${s.key}.specs`)}</p>
                  </div>
                </a>
              `).join('')}
            </div>
          </div>
        ` : ''}
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
