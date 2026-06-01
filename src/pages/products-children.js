import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';
import { getRouteParam } from '../router.js';
import { findSystem, findProduct } from './products.js';
import { renderSkeleton } from '../components/loading.js';

export function productsChildrenPage() {
  const catId = getRouteParam('cat');
  const motherId = getRouteParam('mother');

  const html = `
    <section class="section-dark pt-22">
      <div class="container-custom" id="children-content">
        ${renderSkeleton('detail')}
      </div>
    </section>
  `;

  return {
    html,
    init() {
      Promise.all([findSystem(catId), findProduct(catId, motherId)]).then(([system, product]) => {
        const container = document.getElementById('children-content');
        if (!container) return;

        if (!system || !product) {
          container.innerHTML = `
            <div class="text-center pt-12">
              <p class="text-brand-gray-light mb-6">${t('products.ui.noResults') || 'Not found'}</p>
              <a href="/products" class="btn-primary btn-lg text-sm uppercase tracking-widest">${t('products.ui.back')}</a>
            </div>
          `;
          return;
        }

        container.innerHTML = `
          <!-- Breadcrumb -->
          <div class="flex items-center gap-2 text-sm mb-8 reveal">
            <a href="/products?cat=${system.slug}" class="text-brand-gray-light hover:text-brand-gold transition-colors cursor-pointer">
              ${system.name}
            </a>
            <svg class="w-4 h-4 text-brand-gray-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <span class="text-white font-medium">${product.title}</span>
          </div>

          <!-- Back button -->
          <a href="/products?cat=${system.slug}"
             class="flex items-center gap-2 text-brand-gold text-sm font-semibold uppercase tracking-wider
                    mb-8 hover:gap-3 transition-all cursor-pointer reveal w-fit">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            ${t('products.ui.back')}
          </a>

          <div class="mb-10 reveal">
            <h2 class="heading-lg text-white text-center md:text-left mb-4">${product.title}</h2>
            ${product.excerpt ? `<p class="product-excerpt-highlight mx-auto md:mx-0 rounded-xl border border-brand-gold/25 bg-brand-gold/10 px-5 py-4 text-brand-gold text-base sm:text-lg font-medium leading-relaxed text-center md:text-left">${product.excerpt}</p>` : ''}
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" data-stagger>
            ${product.variants.map((variant, i) => `
              <a href="/products/detail?cat=${system.slug}&mother=${product.slug}&variant=${i}"
                 class="card-hover group cursor-pointer block">
                <div class="relative h-56 overflow-hidden img-hover-zoom">
                  <img src="${variant.image || product.image || '/products/placeholder.jpg'}" alt="${variant.name}"
                       class="w-full h-full object-cover transition-transform duration-500" />
                  <div class="absolute top-3 right-3">
                    <span class="bg-brand-black/80 backdrop-blur-sm text-brand-gold text-base font-mono px-3 py-1.5 rounded-lg">
                      ${variant.code}
                    </span>
                  </div>
                </div>
                <div class="p-5">
                  <h3 class="font-heading text-xl uppercase text-white mb-1
                             group-hover:text-brand-gold transition-colors">
                    ${variant.name}
                  </h3>
                  <p class="text-brand-gray-light text-base mb-3">${variant.specs}</p>
                  <span class="text-brand-gold text-base font-semibold uppercase tracking-wider
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
        `;

        setTimeout(() => {
          initPageAnimations();
          animateImageHover();
        }, 50);
      });
    },
  };
}
