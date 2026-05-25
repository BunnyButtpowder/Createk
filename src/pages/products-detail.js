import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';
import { getRouteParam } from '../router.js';
import { findSystem, findProduct } from './products.js';
import { renderSkeleton } from '../components/loading.js';

export function productsDetailPage() {
  const catId = getRouteParam('cat');
  const motherId = getRouteParam('mother');
  const variantIndex = parseInt(getRouteParam('variant') || '0', 10);

  const html = `
    <section class="section-dark pt-22">
      <div class="container-custom" id="detail-content">
        ${renderSkeleton('detail')}
      </div>
    </section>
  `;

  return {
    html,
    init() {
      Promise.all([findSystem(catId), findProduct(catId, motherId)]).then(([system, product]) => {
        const container = document.getElementById('detail-content');
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

        const variant = product.variants[variantIndex];
        if (!variant) {
          container.innerHTML = `
            <div class="text-center pt-12">
              <p class="text-brand-gray-light mb-6">${t('products.ui.noResults') || 'Not found'}</p>
              <a href="/products/children?cat=${system.slug}&mother=${product.slug}" class="btn-primary btn-lg text-sm uppercase tracking-widest">${t('products.ui.back')}</a>
            </div>
          `;
          return;
        }

        const siblings = product.variants.filter((_, i) => i !== variantIndex);
        const childrenHref = `/products/children?cat=${system.slug}&mother=${product.slug}`;

        container.innerHTML = `
          <!-- Breadcrumb -->
          <div class="flex flex-wrap items-center gap-2 text-sm mb-8 reveal">
            <a href="/products?cat=${system.slug}" class="text-brand-gray-light hover:text-brand-gold transition-colors cursor-pointer">
              ${system.name}
            </a>
            <svg class="w-4 h-4 text-brand-gray-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <a href="${childrenHref}" class="text-brand-gray-light hover:text-brand-gold transition-colors cursor-pointer">
              ${product.title}
            </a>
            <svg class="w-4 h-4 text-brand-gray-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <span class="text-white font-medium">${variant.name}</span>
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
              <img src="${variant.image || product.image || '/products/placeholder.jpg'}" alt="${variant.name}"
                   class="w-full aspect-[4/3] object-cover" />
            </div>

            <div class="reveal-right">
              <span class="product-code-badge block w-fit mx-auto text-center sm:mx-0 sm:inline-block sm:text-left bg-brand-gold/10 text-brand-gold text-sm font-mono px-3 py-1.5 rounded-lg border border-brand-gold/20">
                ${variant.code}
              </span>
              <h1 class="heading-lg text-white text-center sm:text-left mt-4 mb-6">${variant.name}</h1>

              <div class="space-y-6">
                ${variant.specs ? `
                  <div>
                    <h3 class="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-2">${t('products.ui.productSpecs')}</h3>
                    <p class="text-brand-gray-light">${variant.specs}</p>
                  </div>
                ` : ''}

                ${variant.intro ? `
                  <div>
                    <h3 class="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-2">${t('products.ui.productIntro')}</h3>
                    <p class="text-brand-gray-light leading-relaxed">${variant.intro}</p>
                  </div>
                ` : ''}
              </div>

              <a href="/contact"
                 class="btn-primary btn-lg text-sm uppercase tracking-widest mt-8 w-full sm:w-auto">
                ${t('products.ui.contactQuote')}
              </a>
              <a href="https://zalo.me/2822820424446155302" target="_blank" class="btn-outline btn-lg text-sm uppercase mt-4 sm:mt-0 sm:ms-2 w-full sm:w-auto">
                ${t('products.ui.viewAllProducts')}
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
                ${siblings.map((s, idx) => {
                  // Find the actual index in the original variants array
                  const actualIdx = product.variants.indexOf(s);
                  return `
                    <a href="/products/detail?cat=${system.slug}&mother=${product.slug}&variant=${actualIdx}"
                       class="card-hover group cursor-pointer block">
                      <div class="relative h-44 overflow-hidden img-hover-zoom">
                        <img src="${s.image || product.image || '/products/placeholder.jpg'}" alt="${s.name}"
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
                          ${s.name}
                        </h4>
                        <p class="text-brand-gray-light text-xs mt-1">${s.specs}</p>
                      </div>
                    </a>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}
        `;

        setTimeout(() => {
          initPageAnimations();
          animateImageHover();
        }, 50);
      });
    },
  };
}
