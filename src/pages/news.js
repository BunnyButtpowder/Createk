import { initPageAnimations, animateImageHover } from '../animations.js';

const featuredArticle = {
  title: 'Createk Expands Distribution Network to North Africa',
  date: 'January 15, 2026',
  category: 'Company News',
  img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop',
  excerpt: 'Createk has signed new distribution agreements covering Morocco, Tunisia, and Egypt, bringing our total market coverage to over 85 countries. This expansion solidifies our position as a leading global supplier of heavy-duty auto parts.',
};

const articles = [
  {
    title: 'New Turbocharger Line Compatible with Euro 6 Standards',
    date: 'December 28, 2025',
    category: 'Product Launch',
    img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop',
    excerpt: 'Our latest turbocharger range meets the latest emission standards while delivering improved performance and fuel efficiency for heavy-duty engines.',
  },
  {
    title: 'Createk Achieves ISO 14001 Environmental Certification',
    date: 'November 12, 2025',
    category: 'Company News',
    img: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=600&h=400&fit=crop',
    excerpt: 'Building on our ISO 9001 quality certification, we are proud to announce our commitment to sustainable operations with ISO 14001 compliance.',
  },
  {
    title: 'Heavy-Duty Brake Technology: What\'s Changing in 2026',
    date: 'October 30, 2025',
    category: 'Industry Insights',
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
    excerpt: 'A look at emerging trends in commercial vehicle braking systems, including electronic braking, new friction materials, and predictive maintenance.',
  },
  {
    title: 'Automechanika 2025: Createk Booth Highlights',
    date: 'September 18, 2025',
    category: 'Events',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    excerpt: 'Recap of our showcase at Automechanika Frankfurt, where we unveiled 200+ new product lines and connected with distributors from across the globe.',
  },
  {
    title: 'How to Choose the Right Clutch Disc for Your Fleet',
    date: 'August 5, 2025',
    category: 'Technical Guide',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
    excerpt: 'A practical guide covering organic vs ceramic friction materials, sizing considerations, and maintenance intervals for fleet operators.',
  },
  {
    title: 'Createk Partners with Leading European Testing Lab',
    date: 'July 20, 2025',
    category: 'Company News',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
    excerpt: 'Our new partnership with TÜV ensures every critical safety component meets the strictest European testing protocols before reaching our customers.',
  },
];

const categoryColors = {
  'Company News': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Product Launch': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Industry Insights': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Events': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Technical Guide': 'bg-brand-gold/10 text-brand-gold border-brand-gold/20',
};

export function newsPage() {
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
          <span class="badge-gold mb-4">News & Updates</span>
          <h1 class="heading-xl text-white mt-4 mb-6">
            Latest from<br/>
            <span class="text-gradient-gold">Createk</span>
          </h1>
          <p class="text-brand-gray-light text-lg max-w-2xl leading-relaxed">
            Stay informed with company announcements, product launches, industry insights,
            and technical resources.
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
                <img src="${featuredArticle.img}" alt="${featuredArticle.title}"
                     class="w-full h-full object-cover transition-transform duration-500" />
                <div class="absolute top-4 left-4">
                  <span class="badge ${categoryColors[featuredArticle.category]}">
                    ${featuredArticle.category}
                  </span>
                </div>
              </div>
              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <span class="badge-gold mb-4 self-start">Featured</span>
                <h2 class="heading-md text-white mb-4 group-hover:text-brand-gold transition-colors">
                  ${featuredArticle.title}
                </h2>
                <p class="text-brand-gray-light leading-relaxed mb-6">${featuredArticle.excerpt}</p>
                <div class="flex items-center justify-between">
                  <span class="text-brand-gray-mid text-sm">${featuredArticle.date}</span>
                  <span class="text-brand-gold text-sm font-semibold uppercase tracking-wider
                               flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
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
          <h2 class="heading-md text-white">All Articles</h2>
          <div class="hidden md:flex items-center gap-2">
            <button class="filter-btn btn-ghost text-xs uppercase tracking-widest bg-white/5" data-filter="all">All</button>
            <button class="filter-btn btn-ghost text-xs uppercase tracking-widest" data-filter="Company News">News</button>
            <button class="filter-btn btn-ghost text-xs uppercase tracking-widest" data-filter="Product Launch">Products</button>
            <button class="filter-btn btn-ghost text-xs uppercase tracking-widest" data-filter="Industry Insights">Insights</button>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="articles-grid" data-stagger>
          ${articles.map(a => `
            <article class="card-hover group block article-card" data-article-category="${a.category}">
              <div class="relative h-48 overflow-hidden img-hover-zoom">
                <img src="${a.img}" alt="${a.title}"
                     class="w-full h-full object-cover transition-transform duration-500" />
                <div class="absolute top-3 left-3">
                  <span class="badge ${categoryColors[a.category] || 'badge-gold'}">
                    ${a.category}
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
                  Read Article
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
          <h2 class="heading-md text-white mb-4">Stay <span class="text-gradient-gold">Updated</span></h2>
          <p class="text-brand-gray-light max-w-lg mx-auto mb-8">
            Subscribe to our newsletter for the latest product releases, industry news, and technical guides.
          </p>
          <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onsubmit="event.preventDefault()">
            <input type="email" placeholder="Enter your email" class="input flex-1" />
            <button type="submit" class="btn-primary text-sm uppercase tracking-widest whitespace-nowrap">
              Subscribe
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
