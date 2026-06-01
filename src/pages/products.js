import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';
import { getRouteParam, navigate } from '../router.js';
import { getProducts, getProduct, searchProducts } from '../api/index.js';
import { getPageSettings } from '../api/settings.js';
import { renderSkeleton } from '../components/loading.js';

// Cached API data for use by children/detail pages
let cachedProductData = null;

/**
 * Get cached products data (fetches if not cached)
 */
export async function getProductData() {
  if (cachedProductData) return cachedProductData;
  cachedProductData = await getProducts();
  return cachedProductData;
}

/**
 * Find a system by slug from cached data.
 * Falls back to searching all systems if the exact slug isn't found
 * (handles cross-language system slugs like "engine-vi" vs "engine-en").
 */
export async function findSystem(systemSlug) {
  const data = await getProductData();
  if (!data?.systems) return null;

  // Exact match first
  const exact = data.systems.find(s => s.slug === systemSlug);
  if (exact) return exact;

  // Cross-language fallback: strip language suffix and match by base slug
  // e.g. "engine-vi" → "engine", matches "engine-en" or "engine"
  const base = systemSlug.replace(/-(vi|en)$/, '');
  return data.systems.find(s => s.slug === base || s.slug.replace(/-(vi|en)$/, '') === base) || null;
}

/**
 * Find a product by slug within a system.
 * If not found in cached data (e.g. slug is from another language),
 * falls back to the single-product API endpoint which resolves cross-language slugs.
 */
export async function findProduct(systemSlug, productSlug) {
  const system = await findSystem(systemSlug);
  if (!system) return null;

  // Exact match in current language data
  const exact = system.products.find(p => p.slug === productSlug);
  if (exact) return exact;

  // Cross-language fallback: ask the API to resolve the slug
  try {
    const product = await getProduct(productSlug);
    if (product && !product.message) return product;
  } catch (e) {
    // API returned 404 or error
  }

  return null;
}

/**
 * Clear product cache (called on language change via resetAPI)
 */
export function clearProductCache() {
  cachedProductData = null;
}

// Listen for language changes to clear cache
window.addEventListener('lang-change', clearProductCache);

export function productsPage() {
  let activeCategory = 'engine';
  let searchQuery = '';
  let productData = null;
  let pageSettings = null;

  function getActiveSystem() {
    if (!productData?.systems) return null;
    return productData.systems.find(s => s.slug === activeCategory) || productData.systems[0];
  }

  function getFilteredProducts() {
    const system = getActiveSystem();
    if (!system) return [];
    if (!searchQuery.trim()) return system.products;
    const q = searchQuery.trim().toLowerCase();
    return system.products.filter(p => {
      const title = (p.title || '').toLowerCase();
      const variantNames = p.variants.map(v => (v.name || '').toLowerCase()).join(' ');
      return title.includes(q) || variantNames.includes(q);
    });
  }

  function scrollToContent() {
    const el = document.getElementById('products-content');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      if (window.__lenis) {
        window.__lenis.scrollTo(y);
      } else {
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }

  function renderMothers() {
    const system = getActiveSystem();
    if (!system) return '';

    const filtered = getFilteredProducts();

    return `
      <section class="section-dark py-12">
        <div class="container-custom">
          <div class="mb-12 reveal">
            <h2 class="heading-lg text-white mb-4 text-center md:text-left text-balance leading-relaxed md:leading-tight">${system.name}</h2>
            <p class="mx-auto md:mx-0 rounded-xl border border-brand-gold/25 bg-brand-gold/10 px-5 py-4 text-brand-gold text-base sm:text-lg font-medium leading-relaxed text-center md:text-left">${system.description}</p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-stagger>
            ${filtered.map(p => `
              <div class="card-hover group cursor-pointer" data-product-slug="${p.slug}" data-system-slug="${system.slug}">
                <div class="relative h-52 overflow-hidden img-hover-zoom">
                  <img src="${p.image || '/products/placeholder.jpg'}" alt="${p.title}"
                       class="w-full h-full object-cover transition-transform duration-500" />
                </div>
                <div class="p-5">
                  <h3 class="font-heading text-xl uppercase text-white
                             group-hover:text-brand-gold transition-colors">
                    ${p.title}
                  </h3>
                  <p class="text-brand-gray-light text-base mt-2 line-clamp-2">
                    ${p.description ? p.description.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() : p.variants.map(v => v.name).join(', ')}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>

          ${filtered.length === 0 ? `
            <div class="text-center py-16">
              <svg class="w-16 h-16 text-brand-gray-mid/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <p class="text-brand-gray-mid text-lg">${t('products.ui.noResults')}</p>
            </div>
          ` : ''}
        </div>
      </section>
    `;
  }

  function renderContent() {
    const el = document.getElementById('products-content');
    if (!el) return;
    el.innerHTML = renderMothers();

    setTimeout(() => {
      initPageAnimations({ fast: true });
      animateImageHover();
      bindContentEvents();
    }, 50);
  }

  function renderCategoryNav() {
    const nav = document.getElementById('category-nav');
    if (!nav || !productData?.systems) return;

    nav.innerHTML = productData.systems.map(system => `
      <button data-category="${system.slug}"
              class="cat-nav-btn whitespace-nowrap px-5 py-2.5 text-sm font-medium rounded-lg transition-all cursor-pointer
                     ${system.slug === activeCategory ? 'bg-brand-gold text-brand-black' : 'text-brand-gray-light hover:text-white hover:bg-white/5'}">
        ${system.name}
      </button>
    `).join('');

    // Re-bind nav click events
    nav.querySelectorAll('.cat-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.category;
        searchQuery = '';
        const searchInput = document.getElementById('product-search');
        if (searchInput) searchInput.value = '';
        updateSearchClear();
        updateNavButtons();
        renderContent();
        scrollToContent();
      });
    });
  }

  function bindContentEvents() {
    document.querySelectorAll('[data-product-slug]').forEach(card => {
      card.addEventListener('click', () => {
        const productSlug = card.dataset.productSlug;
        const systemSlug = card.dataset.systemSlug;
        navigate(`/products/children?cat=${systemSlug}&mother=${productSlug}`);
      });
    });
  }

  function updateSearchClear() {
    const clearBtn = document.getElementById('product-search-clear');
    if (clearBtn) {
      clearBtn.classList.toggle('hidden', !searchQuery);
    }
  }

  function updateNavButtons() {
    const navBtns = document.querySelectorAll('.cat-nav-btn');
    navBtns.forEach(btn => {
      if (btn.dataset.category === activeCategory) {
        btn.classList.add('bg-brand-gold', 'text-brand-black');
        btn.classList.remove('text-brand-gray-light');
      } else {
        btn.classList.remove('bg-brand-gold', 'text-brand-black');
        btn.classList.add('text-brand-gray-light');
      }
    });
  }

  // Hero uses settings if available, falls back to t()
  const heroHtml = `
    <!-- Hero -->
    <section class="relative pt-16 sm:pt-20 lg:pt-24 sm:max-h-[45vh] xl:min-h-[85vh] 2xl:min-h-[85vh] flex items-center justify-center md:justify-start lg:overflow-hidden">
      <div class="absolute inset-0 mt-10 2xl:mt-0">
        <img src="/banner-product.png"
             alt="Auto parts" class="hero-banner-image w-full h-full object-cover" data-parallax="0.2" />
      </div>

      <div class="hero-content relative z-10 w-full px-4 py-3 sm:px-8 lg:w-auto lg:max-w-4xl lg:py-32 lg:px-20 xl:px-10 2xl:px-28">
        <div class="hero-headline-block lg:max-w-none">
          <div class="hero-badge inline-flex items-center gap-1.5 lg:gap-2 bg-black/50 lg:bg-brand-gold/10 border border-brand-gold/30
                      rounded-full px-2.5 py-1 lg:px-4 lg:py-2 mb-3 lg:mb-8">
            <span class="hero-badge-dot w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span class="hero-badge-text text-brand-gold text-sm sm:text-base font-medium" id="hero-badge">${t('products.hero.badge')}</span>
          </div>

          <h1 class="hero-title heading-xl text-white text-lg sm:text-3xl lg:text-7xl mb-3 lg:mb-6 py-1 lg:py-3 text-left">
            <span id="hero-heading1">${t('products.hero.heading1')}</span><br/>
            <div class="mt-1.5 lg:mt-8"/>
            <span class="text-gradient-gold" id="hero-heading2">${t('products.hero.headingHighlight')}</span>
          </h1>

          <p class="hero-subtitle text-white text-sm sm:text-base lg:text-lg leading-relaxed text-balance max-w-xs lg:max-w-none mt-3 lg:mt-6" id="hero-subtitle">
            ${t('products.hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  `;

  const html = `
    ${heroHtml}

    <!-- Category Navigation -->
    <section class="sticky top-16 sm:top-20 lg:top-24 z-30 bg-brand-dark/95 backdrop-blur-md border-y border-white/5">
      <div class="container-custom">
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 py-3">
          <div class="flex overflow-x-auto gap-1 scrollbar-hide shrink-0" id="category-nav">
            <!-- Populated dynamically after API load -->
          </div>

          <div class="relative sm:ml-auto shrink-0">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray-mid pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input id="product-search"
                   type="text"
                   placeholder="${t('products.ui.searchPlaceholder')}"
                   class="w-full sm:w-48 lg:w-64 pl-9 pr-8 py-2.5 text-sm rounded-lg bg-white/5 border border-white/10
                          text-white placeholder-brand-gray-mid
                          focus:outline-none focus:border-brand-gold/50 focus:bg-white/10 transition-all" />
            <button id="product-search-clear"
                    class="absolute right-2.5 top-1/2 -translate-y-1/2 text-brand-gray-mid hover:text-white transition-colors hidden cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Dynamic Content Area -->
    <div id="products-content">
      <div class="container-custom py-12">
        ${renderSkeleton('product-grid')}
      </div>
    </div>

    <!-- CTA -->
    <section class="section-darker" id="products-cta">
      <div class="container-custom text-center reveal">
        <h2 class="heading-lg text-white mb-4 leading-relaxed md:leading-tight" id="cta-heading">${t('products.cta.heading1')} <span class="text-gradient-gold">${t('products.cta.headingHighlight')}</span>
        <div class="mt-0 md:mt-3"/>
        ${t('products.cta.heading2')}
        </h2>
        <p class="text-brand-gray-light max-w-xl mx-auto mb-8" id="cta-subtitle">
          ${t('products.cta.subtitle')}
        </p>
        <a href="/contact" class="btn-primary btn-lg text-sm uppercase tracking-widest">
          ${t('products.cta.button')}
        </a>
      </div>
    </section>
  `;

  return {
    html,
    init() {
      const catParam = getRouteParam('cat');
      if (catParam) activeCategory = catParam;

      initPageAnimations();

      // Load product data and page settings
      Promise.all([getProductData(), getPageSettings('products')]).then(([data, settings]) => {
        productData = data;
        pageSettings = settings;

        // Update hero with CMS content if available
        if (settings?.hero) {
          const h = settings.hero;
          if (h.badge) document.getElementById('hero-badge')?.replaceChildren(document.createTextNode(h.badge));
          if (h.heading1) {
            const el = document.getElementById('hero-heading1');
            if (el) el.textContent = h.heading1;
          }
          if (h.heading2) {
            const el = document.getElementById('hero-heading2');
            if (el) el.textContent = h.heading2;
          }
          if (h.subtitle) {
            const el = document.getElementById('hero-subtitle');
            if (el) el.textContent = h.subtitle;
          }
        }

        // Set active category from URL or default to first system
        if (data?.systems) {
          if (!data.systems.some(s => s.slug === activeCategory)) {
            activeCategory = data.systems[0]?.slug || 'engine';
          }
        }

        renderCategoryNav();
        renderContent();
      });

      // Search
      const searchInput = document.getElementById('product-search');
      const clearBtn = document.getElementById('product-search-clear');
      if (searchInput) {
        searchInput.addEventListener('input', () => {
          searchQuery = searchInput.value;
          updateSearchClear();
          renderContent();
        });
      }
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          updateSearchClear();
          renderContent();
        });
      }
    },
  };
}
