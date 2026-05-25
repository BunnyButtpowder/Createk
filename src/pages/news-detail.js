import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';
import { getCurrentRoute } from '../router.js';
import { getArticle } from '../api/index.js';
import { renderSkeleton } from '../components/loading.js';

const categoryColorMap = {
  'products': 'bg-brand-gold/10 text-brand-gold border-brand-gold/20',
  'business': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'news':     'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'guides':   'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

export function newsDetailPage() {
  const route = getCurrentRoute();
  const slug = route.replace('/news/', '');

  const html = `
    <section class="relative pt-10 md:pt-32 pb-12 overflow-hidden">
      <div class="container-custom relative z-10 pt-12">
        <a href="/news" class="max-w-4xl mx-auto flex items-center gap-2 text-brand-gold text-sm font-semibold uppercase tracking-wider
                       mb-8 hover:gap-3 transition-all reveal">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
          </svg>
          ${t('news.detail.backToNews')}
        </a>
        <div id="article-detail">
          ${renderSkeleton('detail')}
        </div>
      </div>
    </section>
  `;

  return {
    html,
    init() {
      initPageAnimations();

      getArticle(slug).then(article => {
        const container = document.getElementById('article-detail');
        if (!container) return;

        if (!article) {
          container.innerHTML = `
            <div class="text-center py-12">
              <p class="text-brand-gray-light mb-6">Article not found</p>
              <a href="/news" class="btn-primary btn-lg text-sm uppercase tracking-widest">${t('news.detail.backToNews')}</a>
            </div>
          `;
          return;
        }

        const catSlug = article.categories?.[0]?.slug || 'news';
        const catName = article.categories?.[0]?.name || '';

        container.innerHTML = `
          <div class="max-w-4xl mx-auto reveal">
            <div class="flex items-center gap-2 mb-4">
              <span class="badge ${categoryColorMap[catSlug] || 'badge-gold'}">
                ${catName}
              </span>
            </div>
            <h1 class="heading-xl !leading-snug text-white mb-4">${article.title}</h1>
            <span class="text-brand-gray-mid text-sm">${article.dateFormatted}</span>
          </div>

          ${article.imageFull ? `
            <div class="max-w-4xl mx-auto mt-8">
              <div class="rounded-xl overflow-hidden mb-12 reveal">
                <img src="${article.imageFull}" alt="${article.title}" class="w-full aspect-video sm:aspect-[21/9] object-cover" />
              </div>
            </div>
          ` : ''}

          <div class="max-w-4xl mx-auto">
            <div class="prose prose-invert prose-gold max-w-none reveal">
              ${article.content || `<p class="text-brand-gray-light text-lg leading-relaxed">${article.excerpt}</p>`}
            </div>
          </div>

          ${article.related && article.related.length > 0 ? `
            <div class="max-w-4xl mx-auto mt-20">
              <div class="flex items-center gap-4 mb-8 reveal">
                <div class="divider-gold"></div>
                <h3 class="heading-sm text-white">${t('news.detail.relatedArticles')}</h3>
              </div>
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
                ${article.related.map(r => {
                  const rCatSlug = r.categories?.[0]?.slug || 'news';
                  const rCatName = r.categories?.[0]?.name || '';
                  return `
                    <a href="/news/${r.slug}" class="card-hover group block">
                      <div class="relative h-48 overflow-hidden img-hover-zoom">
                        <img src="${r.image || 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=600&h=400&fit=crop'}" alt="${r.title}"
                             class="w-full h-full object-cover transition-transform duration-500" />
                        <div class="absolute top-3 left-3">
                          <span class="badge ${categoryColorMap[rCatSlug] || 'badge-gold'}">
                            ${rCatName}
                          </span>
                        </div>
                      </div>
                      <div class="p-6">
                        <span class="text-brand-gray-mid text-xs">${r.dateFormatted}</span>
                        <h3 class="font-heading text-lg uppercase text-white mt-2 mb-3
                                   group-hover:text-brand-gold transition-colors leading-tight">${r.title}</h3>
                        <span class="text-brand-gold text-xs font-semibold uppercase tracking-wider
                                     flex items-center gap-1 group-hover:gap-2 transition-all">
                          ${t('news.articles.readArticle')}
                          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                          </svg>
                        </span>
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
