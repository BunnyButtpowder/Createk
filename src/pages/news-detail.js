import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';
import { getCurrentRoute } from '../router.js';

const articleImages = [
  'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=260&fit=crop',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
];

const categoryColorMap = {
  'products': 'bg-brand-gold/10 text-brand-gold border-brand-gold/20',
  'business': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'news': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'guides': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

export function newsDetailPage() {
  const route = getCurrentRoute();
  const slug = route.replace('/news/', '');
  const articles = t('news.articles.items');
  const featuredCategoryId = 'business';

  let article, img, isFeatured = false;

  if (slug === 'featured') {
    isFeatured = true;
    article = {
      title: t('news.featured.title'),
      date: t('news.featured.date'),
      categoryId: featuredCategoryId,
      excerpt: t('news.featured.excerpt'),
    };
    img = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop';
  } else {
    const index = parseInt(slug);
    article = articles[index];
    if (!article) {
      return { html: '', init() { window.location.hash = '/news'; } };
    }
    img = articleImages[index % articleImages.length];
  }

  const related = articles
    .map((a, i) => ({ ...a, i }))
    .filter(a => a.categoryId === article.categoryId)
    .filter(a => isFeatured || a.i !== parseInt(slug))
    .slice(0, 3);

  const html = `
    <!-- Article Detail -->
    <section class="relative pt-32 pb-12 overflow-hidden">
      <div class="absolute inset-0">
        <img src="${img}" alt="${article.title}" class="w-full h-full object-cover opacity-10" />
        <div class="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black"></div>
      </div>
      <div class="container-custom relative z-10 pt-12">
        <a href="#/news" class="flex items-center gap-2 text-brand-gold text-sm font-semibold uppercase tracking-wider
                       mb-8 hover:gap-3 transition-all reveal">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
          </svg>
          ${t('news.detail.backToNews')}
        </a>

        <div class="max-w-4xl reveal">
          <div class="flex items-center gap-2 mb-4">
            ${isFeatured ? `<span class="badge-gold">${t('news.featured.badge')}</span>` : ''}
            <span class="badge ${categoryColorMap[article.categoryId] || 'badge-gold'}">
              ${t(`news.categories.${article.categoryId}`)}
            </span>
          </div>
          <h1 class="heading-xl !leading-snug text-white mb-4">${article.title}</h1>
          <span class="text-brand-gray-mid text-sm">${article.date}</span>
        </div>
      </div>
    </section>

    <!-- Article Body -->
    <section class="section-dark">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="rounded-xl overflow-hidden mb-12 reveal">
            <img src="${img}" alt="${article.title}" class="w-full aspect-video sm:aspect-[21/9] object-cover" />
          </div>

          <div class="reveal">
            <p class="text-brand-gray-light text-lg leading-relaxed mb-6">
              ${article.excerpt}
            </p>
            <p class="text-brand-gray-light leading-relaxed mb-6">
              This development represents a significant milestone in Createk's ongoing commitment to delivering high-quality heavy-duty vehicle components to markets worldwide. Our engineering team has been working closely with regional partners to ensure seamless integration and support.
            </p>
            <p class="text-brand-gray-light leading-relaxed mb-6">
              As the heavy-duty vehicle industry continues to evolve, Createk remains at the forefront of innovation and quality. Our dedication to rigorous testing, precision manufacturing, and customer satisfaction drives every decision we make. We look forward to sharing more updates as this initiative progresses.
            </p>
            <p class="text-brand-gray-light leading-relaxed">
              For more information about this topic or to discuss how Createk products can benefit your fleet operations, please do not hesitate to contact our technical support team. We are always ready to assist with product selection, technical specifications, and distributor inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>

    ${related.length > 0 ? `
      <!-- Related Articles -->
      <section class="section-darker">
        <div class="container-custom">
          <div class="flex items-center gap-4 mb-8 reveal">
            <div class="divider-gold"></div>
            <h3 class="heading-sm text-white">${t('news.detail.relatedArticles')}</h3>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
            ${related.map(r => `
              <a href="#/news/${r.i}" class="card-hover group block">
                <div class="relative h-48 overflow-hidden img-hover-zoom">
                  <img src="${articleImages[r.i % articleImages.length]}" alt="${r.title}"
                       class="w-full h-full object-cover transition-transform duration-500" />
                  <div class="absolute top-3 left-3">
                    <span class="badge ${categoryColorMap[r.categoryId] || 'badge-gold'}">
                      ${t(`news.categories.${r.categoryId}`)}
                    </span>
                  </div>
                </div>
                <div class="p-6">
                  <span class="text-brand-gray-mid text-xs">${r.date}</span>
                  <h3 class="font-heading text-lg uppercase text-white mt-2 mb-3
                             group-hover:text-brand-gold transition-colors leading-tight">${r.title}</h3>
                  <p class="text-brand-gray-light text-sm leading-relaxed mb-4 line-clamp-2">${r.excerpt}</p>
                  <span class="text-brand-gold text-xs font-semibold uppercase tracking-wider
                               flex items-center gap-1 group-hover:gap-2 transition-all">
                    ${t('news.articles.readArticle')}
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </span>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>
    ` : ''}
  `;

  return {
    html,
    init() {
      initPageAnimations();
      animateImageHover();
    },
  };
}
