import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';

const articleImages = [
  'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=260&fit=crop',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
];

const categoryColorMap = {
  'company_news': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'product_launch': 'bg-green-500/10 text-green-400 border-green-500/20',
  'industry_insights': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'events': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'technical_guide': 'bg-brand-gold/10 text-brand-gold border-brand-gold/20',
};

export function newsPage() {
  const featuredCategoryId = 'company_news';
  const articles = t('news.articles.items');

  const html = `
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=1920&h=600&fit=crop"
             alt="News" class="w-full h-full object-cover opacity-15" />
        <div class="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black"></div>
      </div>
      <div class="container-custom relative z-10 pt-12">
        <div class="reveal">
          <span class="badge-gold mb-4">${t('news.hero.badge')}</span>
          <h1 class="heading-xl text-white mt-4 mb-6">
            ${t('news.hero.heading1')}<br/>
            <span class="text-gradient-gold">${t('news.hero.headingHighlight')}</span>
          </h1>
          <p class="text-brand-gray-light text-lg max-w-2xl leading-relaxed">
            ${t('news.hero.subtitle')}
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="section-darker">
      <div class="container-custom">
        <div class="reveal-scale">
          <a href="#" class="card-hover group block overflow-hidden">
            <div class="grid lg:grid-cols-2">
              <div class="relative h-64 lg:h-auto overflow-hidden img-hover-zoom">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop" alt="${t('news.featured.title')}"
                     class="w-full h-full object-cover transition-transform duration-500" />
                <div class="absolute top-4 left-4">
                  <span class="badge ${categoryColorMap[featuredCategoryId]}">
                    ${t(`news.categories.${featuredCategoryId}`)}
                  </span>
                </div>
              </div>
              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <span class="badge-gold mb-4 self-start">${t('news.featured.badge')}</span>
                <h2 class="heading-md text-white mb-4 group-hover:text-brand-gold transition-colors">
                  ${t('news.featured.title')}
                </h2>
                <p class="text-brand-gray-light leading-relaxed mb-6">${t('news.featured.excerpt')}</p>
                <div class="flex items-center justify-between">
                  <span class="text-brand-gray-mid text-sm">${t('news.featured.date')}</span>
                  <span class="text-brand-gold text-sm font-semibold uppercase tracking-wider
                               flex items-center gap-1 group-hover:gap-2 transition-all">
                    ${t('news.featured.readMore')}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="section-dark">
      <div class="container-custom">
        <div class="flex items-center justify-between mb-12 reveal">
          <h2 class="heading-md text-white">${t('news.articles.heading')}</h2>
          <div class="hidden md:flex items-center gap-2">
            <button class="filter-btn btn-ghost text-xs uppercase tracking-widest bg-white/5" data-filter="all">${t('news.articles.filterAll')}</button>
            <button class="filter-btn btn-ghost text-xs uppercase tracking-widest" data-filter="company_news">${t('news.articles.filterNews')}</button>
            <button class="filter-btn btn-ghost text-xs uppercase tracking-widest" data-filter="product_launch">${t('news.articles.filterProducts')}</button>
            <button class="filter-btn btn-ghost text-xs uppercase tracking-widest" data-filter="industry_insights">${t('news.articles.filterInsights')}</button>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="articles-grid" data-stagger>
          ${articles.map((a, i) => `
            <article class="card-hover group block article-card" data-article-category="${a.categoryId}">
              <div class="relative h-48 overflow-hidden img-hover-zoom">
                <img src="${articleImages[i]}" alt="${a.title}"
                     class="w-full h-full object-cover transition-transform duration-500" />
                <div class="absolute top-3 left-3">
                  <span class="badge ${categoryColorMap[a.categoryId] || 'badge-gold'}">
                    ${t(`news.categories.${a.categoryId}`)}
                  </span>
                </div>
              </div>
              <div class="p-6">
                <span class="text-brand-gray-mid text-xs">${a.date}</span>
                <h3 class="font-heading text-lg uppercase text-white mt-2 mb-3
                           group-hover:text-brand-gold transition-colors leading-tight">${a.title}</h3>
                <p class="text-brand-gray-light text-sm leading-relaxed mb-4">${a.excerpt}</p>
                <span class="text-brand-gold text-xs font-semibold uppercase tracking-wider
                             flex items-center gap-1 group-hover:gap-2 transition-all">
                  ${t('news.articles.readArticle')}
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </span>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="section-darker">
      <div class="container-custom">
        <div class="bg-gradient-to-br from-brand-gold/10 via-brand-gray-dark to-brand-gray-dark
                    border border-brand-gold/20 rounded-3xl p-12 md:p-16 text-center reveal-scale">
          <h2 class="heading-md text-white mb-4">${t('news.newsletter.heading1')} <span class="text-gradient-gold">${t('news.newsletter.headingHighlight')}</span></h2>
          <p class="text-brand-gray-light max-w-lg mx-auto mb-8">
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
      animateImageHover();

      // Filter functionality
      const filterBtns = document.querySelectorAll('.filter-btn');
      const articleCards = document.querySelectorAll('.article-card');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.dataset.filter;

          filterBtns.forEach(b => b.classList.remove('bg-white/5'));
          btn.classList.add('bg-white/5');

          articleCards.forEach(card => {
            if (filter === 'all' || card.dataset.articleCategory === filter) {
              card.style.display = '';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    },
  };
}
