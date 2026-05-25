import { initPageAnimations, animateImageHover } from '../animations.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { t } from '../i18n/index.js';
import { getNews, getFeatured } from '../api/index.js';
import { getPageSettings } from '../api/settings.js';
import { renderSkeleton } from '../components/loading.js';

const ARTICLES_PER_PAGE = 12;

const categoryColorMap = {
  'products': 'bg-brand-gold text-black border-black',
  'business': 'bg-brand-gold text-black border-black',
  'news':     'bg-brand-gold text-black border-black',
  'guides':   'bg-brand-gold text-black border-black',
};

export function newsPage() {
  const html = `
    <!-- Hero -->
    <section class="relative pt-32 pb-12 sm:pb-20 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=1920&h=600&fit=crop"
             alt="News" class="w-full h-full object-cover opacity-15" />
        <div class="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black"></div>
      </div>
      <div class="container-custom relative z-10">
        <div class="reveal text-center md:text-left">
          <span class="badge-gold mb-4 text-base" id="news-hero-badge">${t('news.hero.badge')}</span>
          <h1 class="heading-xl text-white mt-4 mb-6">
            <span id="news-hero-h1">${t('news.hero.heading1')}</span><br/>
            <div class="mt-5 lg:mt-8"/>
            <span class="text-gradient-gold" id="news-hero-h2">${t('news.hero.headingHighlight')}</span>
          </h1>
          <p class="text-brand-gray-light text-lg max-w-2xl leading-relaxed text-balance" id="news-hero-sub">
            ${t('news.hero.subtitle')}
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="section-darker py-12" id="featured-section">
      <div class="container-custom">
        <div class="reveal-scale" id="featured-content">
          ${renderSkeleton('detail')}
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="section-dark py-12">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12 reveal">
          <h2 class="heading-md text-white">${t('news.articles.heading')}</h2>
          <div class="flex items-center gap-2 flex-wrap" id="filter-buttons">
            <button class="filter-btn btn-ghost text-xs uppercase tracking-widest bg-white/5 cursor-pointer" data-filter="all">${t('news.articles.filterAll')}</button>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="articles-grid" data-stagger>
          ${renderSkeleton('article-grid')}
        </div>

        <!-- Pagination -->
        <div id="pagination-container" class="flex items-center justify-center gap-3 mt-12 reveal" style="display:none;">
          <button id="prev-page-btn" class="pagination-prev-btn btn-ghost px-4 py-2 text-sm rounded-lg border border-white/10
                     hover:border-brand-gold/30 hover:text-brand-gold transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled>
            <svg class="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            ${t('news.articles.prevPage')}
          </button>
          <div id="page-numbers" class="flex items-center gap-1"></div>
          <button id="next-page-btn" class="pagination-next-btn btn-ghost px-4 py-2 text-sm rounded-lg border border-white/10
                     hover:border-brand-gold/30 hover:text-brand-gold transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
            ${t('news.articles.nextPage')}
            <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="section-darker py-12">
      <div class="container-custom">
        <div class="bg-gradient-to-br from-brand-gold/10 via-brand-gray-dark to-brand-gray-dark
                    border border-brand-gold/20 rounded-3xl p-6 sm:p-10 md:p-16 text-center reveal-scale">
          <h2 class="heading-md text-white mb-4" id="newsletter-heading">${t('news.newsletter.heading1')} <span class="text-gradient-gold">${t('news.newsletter.headingHighlight')}</span></h2>
          <p class="text-brand-gray-light max-w-lg mx-auto mb-8" id="newsletter-subtitle">
            ${t('news.newsletter.subtitle')}
          </p>
          <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onsubmit="event.preventDefault()">
            <input type="email" placeholder="${t('news.newsletter.placeholder')}" class="input flex-1" />
            <button type="submit" class="btn-primary text-sm uppercase tracking-widest whitespace-nowrap">
              ${t('news.newsletter.subscribe')}
            </button>
          </form>
        </div>
      </div>
    </section>
  `;

  return {
    html,
    init() {
      initPageAnimations();

      let currentFilter = 'all';
      let currentPage = 1;
      let newsData = null;
      let categories = [];

      const articlesGrid = document.getElementById('articles-grid');
      const prevBtn = document.getElementById('prev-page-btn');
      const nextBtn = document.getElementById('next-page-btn');
      const pageNumbers = document.getElementById('page-numbers');
      const paginationContainer = document.getElementById('pagination-container');
      const filterContainer = document.getElementById('filter-buttons');

      // Load featured article
      getFeatured().then(featured => {
        const el = document.getElementById('featured-content');
        if (!el || !featured) return;

        const catSlug = featured.categories?.[0]?.slug || 'business';
        el.innerHTML = `
          <a href="/news/${featured.slug}" class="card-hover group block overflow-hidden">
            <div class="grid lg:grid-cols-2">
              <div class="relative h-64 lg:h-auto overflow-hidden img-hover-zoom">
                <img src="${featured.imageFull || featured.image || '/news/featured/2.jpg'}" alt="${featured.title}"
                     class="w-full h-full object-cover transition-transform duration-500" />
                <div class="absolute top-4 left-4">
                  <span class="badge ${categoryColorMap[catSlug] || 'bg-brand-gold text-black border-black'}">
                    ${featured.categories?.[0]?.name || ''}
                  </span>
                </div>
              </div>
              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <span class="badge-gold mb-4 self-start">${t('news.featured.badge')}</span>
                <h2 class="heading-md text-white mb-4 group-hover:text-brand-gold transition-colors">
                  ${featured.title}
                </h2>
                <p class="text-brand-gray-light leading-relaxed mb-6">${featured.excerpt}</p>
                <div class="flex items-center justify-between">
                  <span class="text-brand-gray-mid text-sm">${featured.dateFormatted}</span>
                  <span class="text-brand-gold text-sm font-semibold uppercase tracking-wider
                               flex items-center gap-1 group-hover:gap-2 transition-all">
                    ${t('news.articles.readArticle')}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>
        `;
        animateImageHover();
      });

      // Load articles
      function loadArticles() {
        const categoryParam = currentFilter === 'all' ? undefined : currentFilter;
        getNews(currentPage, ARTICLES_PER_PAGE, categoryParam).then(data => {
          if (!data || !articlesGrid) return;
          newsData = data;

          // Render filter buttons from API categories (first load only)
          if (categories.length === 0 && data.categories) {
            categories = data.categories;
            filterContainer.innerHTML = `
              <button class="filter-btn btn-ghost text-xs uppercase tracking-widest bg-white/5 cursor-pointer" data-filter="all">${t('news.articles.filterAll')}</button>
              ${categories.map(cat => `
                <button class="filter-btn btn-ghost text-xs uppercase tracking-widest cursor-pointer" data-filter="${cat.slug}">${cat.name}</button>
              `).join('')}
            `;
            bindFilterEvents();
          }

          // Render articles
          if (data.items.length === 0) {
            articlesGrid.innerHTML = `
              <div class="col-span-full text-center py-12">
                <p class="text-brand-gray-mid text-lg">${t('products.ui.noResults')}</p>
              </div>
            `;
          } else {
            articlesGrid.innerHTML = data.items.map(article => {
              const catSlug = article.categories?.[0]?.slug || 'news';
              const catName = article.categories?.[0]?.name || '';
              return `
                <a href="/news/${article.slug}" class="card-hover group block article-card">
                  <div class="relative h-48 overflow-hidden img-hover-zoom">
                    <img src="${article.image || 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=600&h=400&fit=crop'}" alt="${article.title}"
                         class="w-full h-full object-cover transition-transform duration-500" />
                    <div class="absolute top-3 left-3">
                      <span class="badge ${categoryColorMap[catSlug] || 'bg-brand-gold text-black border-black'}">
                        ${catName}
                      </span>
                    </div>
                  </div>
                  <div class="p-6">
                    <span class="text-brand-gray-mid text-sm">${article.dateFormatted}</span>
                    <h3 class="font-heading text-xl uppercase text-white mt-2 mb-3
                               group-hover:text-brand-gold transition-colors leading-tight">${article.title}</h3>
                    <span class="text-brand-gold text-sm font-semibold uppercase tracking-wider
                                 flex items-center gap-1 group-hover:gap-2 transition-all">
                      ${t('news.articles.readArticle')}
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </span>
                  </div>
                </a>
              `;
            }).join('');
          }

          // Pagination
          renderPagination(data.page, data.pages);
          animateImageHover();
          requestAnimationFrame(() => ScrollTrigger.refresh());
        });
      }

      function renderPagination(page, totalPages) {
        if (totalPages <= 1) {
          paginationContainer.style.display = 'none';
          return;
        }
        paginationContainer.style.display = '';
        prevBtn.disabled = page <= 1;
        nextBtn.disabled = page >= totalPages;

        pageNumbers.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
          const btn = document.createElement('button');
          btn.textContent = i;
          btn.className = `page-number-btn w-10 h-10 rounded-lg text-sm font-medium transition-all cursor-pointer ${
            i === page ? 'bg-brand-gold text-brand-black' : 'text-white/60 hover:text-white hover:bg-white/10'
          }`;
          btn.addEventListener('click', () => { currentPage = i; loadArticles(); });
          pageNumbers.appendChild(btn);
        }
      }

      function bindFilterEvents() {
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            currentFilter = btn.dataset.filter;
            currentPage = 1;
            filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('bg-white/5'));
            btn.classList.add('bg-white/5');
            loadArticles();
          });
        });
      }

      prevBtn.addEventListener('click', () => { if (currentPage > 1) { currentPage--; loadArticles(); } });
      nextBtn.addEventListener('click', () => { currentPage++; loadArticles(); });

      // Update hero with CMS settings
      getPageSettings('news').then(settings => {
        if (!settings?.hero) return;
        const h = settings.hero;
        if (h.badge) { const el = document.getElementById('news-hero-badge'); if (el) el.textContent = h.badge; }
        if (h.heading1) { const el = document.getElementById('news-hero-h1'); if (el) el.textContent = h.heading1; }
        if (h.heading2) { const el = document.getElementById('news-hero-h2'); if (el) el.textContent = h.heading2; }
        if (h.subtitle) { const el = document.getElementById('news-hero-sub'); if (el) el.textContent = h.subtitle; }
      });

      // Initial load
      bindFilterEvents();
      loadArticles();
    },
  };
}
