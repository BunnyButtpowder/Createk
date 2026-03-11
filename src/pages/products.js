import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';

export function productsPage() {
  // ── Product Data ──
  const categories = [
    {
      id: 'engine',
      mothers: [
        {
          id: 'crankshaftGroup',
          img: '/engine-assemblies-and-components.jpg',
          children: [
            { key: 'crankshaft', code: 'CRK-4500', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=500&fit=crop' },
            { key: 'mainBearing', code: 'MBR-4501', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=500&fit=crop' },
            { key: 'crankshaftSeal', code: 'COS-4502', img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=500&h=500&fit=crop' },
          ],
        },
        {
          id: 'linerGroup',
          img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=500&h=500&fit=crop',
          children: [
            { key: 'cylinderLiner', code: 'LNR-2200', img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=500&h=500&fit=crop' },
            { key: 'piston', code: 'PST-2201', img: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=500&h=500&fit=crop' },
            { key: 'pistonRing', code: 'PRG-2202', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=500&fit=crop' },
          ],
        },
        {
          id: 'turboGroup',
          img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&h=500&fit=crop',
          children: [
            { key: 'turbocharger', code: 'TBC-7800', img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&h=500&fit=crop' },
            { key: 'airCompressor', code: 'ACP-3100', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=500&fit=crop' },
            { key: 'waterPump', code: 'WPM-7801', img: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=500&h=500&fit=crop' },
          ],
        },
        {
          id: 'starterAltGroup',
          img: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=500&h=500&fit=crop',
          children: [
            { key: 'starterMotor', code: 'STM-4400', img: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=500&h=500&fit=crop' },
            { key: 'alternator', code: 'ALT-6600', img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=500&h=500&fit=crop' },
            { key: 'fuelPump', code: 'FPM-4401', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=500&fit=crop' },
          ],
        },
      ],
    },
    {
      id: 'chassis',
      mothers: [
        {
          id: 'drivetrainGroup',
          img: '/chassis-system.jpg',
          children: [
            { key: 'differentialGear', code: 'DGS-5500', img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=500&h=500&fit=crop' },
            { key: 'wheelBearing', code: 'WBK-6600', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=500&fit=crop' },
            { key: 'transmissionGear', code: 'TRG-7700', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=500&fit=crop' },
          ],
        },
        {
          id: 'suspensionGroup',
          img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=500&fit=crop',
          children: [
            { key: 'leafSpring', code: 'LSP-1100', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=500&fit=crop' },
            { key: 'shockAbsorber', code: 'SKA-2200', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&h=500&fit=crop' },
            { key: 'airSpring', code: 'ARS-3300', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=500&fit=crop' },
          ],
        },
        {
          id: 'rubberGroup',
          img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=500&h=500&fit=crop',
          children: [
            { key: 'vBelt', code: 'VBS-4400', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=500&fit=crop' },
            { key: 'engineMount', code: 'EMT-7700', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=500&fit=crop' },
            { key: 'gasketSet', code: 'CGS-6600', img: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=500&h=500&fit=crop' },
          ],
        },
      ],
    },
    {
      id: 'brake',
      mothers: [
        {
          id: 'brakeAssemblyGroup',
          img: '/break-system.jpg',
          children: [
            { key: 'brakeChamber', code: 'BPC-1001', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=500&fit=crop' },
            { key: 'brakeAdjuster', code: 'BCA-1002', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=500&fit=crop' },
            { key: 'brakeLining', code: 'BLS-9900', img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&h=500&fit=crop' },
          ],
        },
        {
          id: 'discDrumGroup',
          img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=500&fit=crop',
          children: [
            { key: 'brakeDisc', code: 'BRD-1120', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=500&fit=crop' },
            { key: 'brakeDrum', code: 'BDR-2001', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&h=500&fit=crop' },
            { key: 'brakeCaliper', code: 'BCL-2003', img: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=500&h=500&fit=crop' },
          ],
        },
        {
          id: 'clutchGroup',
          img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=500&h=500&fit=crop',
          children: [
            { key: 'clutchDisc', code: 'CDD-8800', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=500&fit=crop' },
            { key: 'pressurePlate', code: 'CPP-1010', img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=500&h=500&fit=crop' },
            { key: 'releaseBearing', code: 'CRB-3003', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=500&fit=crop' },
          ],
        },
      ],
    },
    {
      id: 'cabin',
      mothers: [
        {
          id: 'lightingGroup',
          img: '/cabin-system.jpg',
          children: [
            { key: 'ledHeadlamp', code: 'LED-1100', img: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=500&fit=crop' },
            { key: 'tailLight', code: 'TLA-2200', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=500&fit=crop' },
            { key: 'fogLamp', code: 'FGL-4400', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&h=500&fit=crop' },
          ],
        },
        {
          id: 'cabinSuspGroup',
          img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=500&fit=crop',
          children: [
            { key: 'cabinShock', code: 'CSA-1100', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=500&fit=crop' },
            { key: 'cabinAirSpring', code: 'CAS-2003', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=500&fit=crop' },
            { key: 'cabinMount', code: 'CMT-3001', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=500&fit=crop' },
          ],
        },
        {
          id: 'exteriorGroup',
          img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=500&fit=crop',
          children: [
            { key: 'mirror', code: 'MRR-3001', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=500&fit=crop' },
            { key: 'doorHandle', code: 'DHD-3002', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&h=500&fit=crop' },
            { key: 'cabinHinge', code: 'CHG-3003', img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=500&h=500&fit=crop' },
          ],
        },
      ],
    },
  ];

  // ── State ──
  let activeCategory = 'engine';
  let activeMotherId = null;
  let activeChildKey = null;

  // ── Helpers ──
  function getCat() {
    return categories.find(c => c.id === activeCategory);
  }

  function getMother() {
    const cat = getCat();
    return cat ? cat.mothers.find(m => m.id === activeMotherId) : null;
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

  // ── Renderers ──
  function renderMothers() {
    const cat = getCat();
    if (!cat) return '';

    return `
      <section class="section-dark">
        <div class="container-custom">
          <div class="mb-12 reveal">
            <div class="flex items-center gap-4 mb-4">
              <div class="divider-gold"></div>
              <span class="text-brand-gold text-sm uppercase tracking-widest font-medium">
                ${t(`products.categories.${cat.id}.title`)}
              </span>
            </div>
            <h2 class="heading-lg text-white mb-4">${t(`products.categories.${cat.id}.title`)}</h2>
            <p class="text-brand-gray-light max-w-2xl">${t(`products.categories.${cat.id}.desc`)}</p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-stagger>
            ${cat.mothers.map(m => `
              <div class="card-hover group cursor-pointer" data-mother-id="${m.id}">
                <div class="relative h-52 overflow-hidden img-hover-zoom">
                  <img src="${m.img}" alt="${t(`products.mothers.${m.id}`)}"
                       class="w-full h-full object-cover transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent"></div>
                </div>
                <div class="p-5">
                  <h3 class="font-heading text-lg uppercase text-white
                             group-hover:text-brand-gold transition-colors">
                    ${t(`products.mothers.${m.id}`)}
                  </h3>
                  <p class="text-brand-gray-light text-xs mt-2">
                    ${m.children.map(c => t(`products.items.${c.key}.name`)).join(', ')}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function renderChildren() {
    const cat = getCat();
    const mother = getMother();
    if (!cat || !mother) return '';

    return `
      <section class="section-dark">
        <div class="container-custom">
          <!-- Breadcrumb -->
          <div class="flex items-center gap-2 text-sm mb-8 reveal">
            <button class="back-to-mothers text-brand-gray-light hover:text-brand-gold transition-colors cursor-pointer">
              ${t(`products.categories.${cat.id}.title`)}
            </button>
            <svg class="w-4 h-4 text-brand-gray-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <span class="text-white font-medium">${t(`products.mothers.${mother.id}`)}</span>
          </div>

          <!-- Back button -->
          <button class="back-to-mothers flex items-center gap-2 text-brand-gold text-sm font-semibold uppercase tracking-wider
                         mb-8 hover:gap-3 transition-all cursor-pointer reveal">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            ${t('products.ui.back')}
          </button>

          <div class="mb-10 reveal">
            <h2 class="heading-lg text-white mb-4">${t(`products.mothers.${mother.id}`)}</h2>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" data-stagger>
            ${mother.children.map(child => `
              <div class="card-hover group">
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
                  <p class="text-brand-gray-light text-xs mb-5">${t(`products.items.${child.key}.specs`)}</p>
                  <button data-view-child="${child.key}"
                          class="text-brand-gold text-xs font-semibold uppercase tracking-wider
                                 flex items-center gap-1.5 hover:gap-2.5 transition-all cursor-pointer">
                    ${t('products.ui.detail')}
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function renderDetail() {
    const cat = getCat();
    const mother = getMother();
    if (!cat || !mother) return '';

    const child = mother.children.find(c => c.key === activeChildKey);
    if (!child) return '';

    const siblings = mother.children.filter(c => c.key !== activeChildKey);

    return `
      <section class="section-dark">
        <div class="container-custom">
          <!-- Breadcrumb -->
          <div class="flex flex-wrap items-center gap-2 text-sm mb-8 reveal">
            <button class="back-to-mothers text-brand-gray-light hover:text-brand-gold transition-colors cursor-pointer">
              ${t(`products.categories.${cat.id}.title`)}
            </button>
            <svg class="w-4 h-4 text-brand-gray-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <button class="back-to-children text-brand-gray-light hover:text-brand-gold transition-colors cursor-pointer">
              ${t(`products.mothers.${mother.id}`)}
            </button>
            <svg class="w-4 h-4 text-brand-gray-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <span class="text-white font-medium">${t(`products.items.${child.key}.name`)}</span>
          </div>

          <!-- Back button -->
          <button class="back-to-children flex items-center gap-2 text-brand-gold text-sm font-semibold uppercase tracking-wider
                         mb-8 hover:gap-3 transition-all cursor-pointer reveal">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            ${t('products.ui.back')}
          </button>

          <!-- Product Detail -->
          <div class="grid lg:grid-cols-2 gap-12 items-start">
            <!-- Image -->
            <div class="rounded-xl overflow-hidden reveal-left">
              <img src="${child.img}" alt="${t(`products.items.${child.key}.name`)}"
                   class="w-full aspect-[4/3] object-cover" />
            </div>

            <!-- Info -->
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

          <!-- Related Products -->
          ${siblings.length > 0 ? `
            <div class="mt-20 reveal">
              <div class="flex items-center gap-4 mb-8">
                <div class="divider-gold"></div>
                <h3 class="heading-sm text-white">${t('products.ui.relatedProducts')}</h3>
              </div>
              <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
                ${siblings.map(s => `
                  <div class="card-hover group cursor-pointer" data-view-child="${s.key}">
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
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </section>
    `;
  }

  function renderContent() {
    const el = document.getElementById('products-content');
    if (!el) return;

    if (activeChildKey) {
      el.innerHTML = renderDetail();
    } else if (activeMotherId) {
      el.innerHTML = renderChildren();
    } else {
      el.innerHTML = renderMothers();
    }

    setTimeout(() => {
      initPageAnimations();
      animateImageHover();
      bindContentEvents();
    }, 50);
  }

  // ── Event Binding ──
  function bindContentEvents() {
    // Click mother product card
    document.querySelectorAll('[data-mother-id]').forEach(card => {
      card.addEventListener('click', () => {
        activeMotherId = card.dataset.motherId;
        activeChildKey = null;
        renderContent();
        scrollToContent();
      });
    });

    // Click "Chi tiết" or related product card
    document.querySelectorAll('[data-view-child]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        activeChildKey = el.dataset.viewChild;
        renderContent();
        scrollToContent();
      });
    });

    // Back to mothers
    document.querySelectorAll('.back-to-mothers').forEach(btn => {
      btn.addEventListener('click', () => {
        activeMotherId = null;
        activeChildKey = null;
        renderContent();
        scrollToContent();
      });
    });

    // Back to children
    document.querySelectorAll('.back-to-children').forEach(btn => {
      btn.addEventListener('click', () => {
        activeChildKey = null;
        renderContent();
        scrollToContent();
      });
    });
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

  // ── Page HTML ──
  const html = `
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0">
        <img src="/banner-product.jpg"
             alt="Auto parts" class="w-full h-full object-cover opacity-15" />
      </div>
      <div class="container-custom relative z-10 pt-12">
        <div class="reveal">
          <span class="badge-gold mb-4">${t('products.hero.badge')}</span>
          <h1 class="heading-xl text-white mt-4 mb-6">
            ${t('products.hero.heading1')}<br/>
            <span class="text-gradient-gold">${t('products.hero.headingHighlight')}</span>
          </h1>
          <p class="text-brand-gray-light text-lg max-w-2xl leading-relaxed">
            ${t('products.hero.subtitle')}
          </p>
        </div>
      </div>
    </section>

    <!-- Category Navigation -->
    <section class="sticky top-20 lg:top-24 z-30 bg-brand-dark/95 backdrop-blur-md border-y border-white/5">
      <div class="container-custom">
        <div class="flex overflow-x-auto gap-1 py-3 scrollbar-hide" id="category-nav">
          ${categories.map((cat, i) => `
            <button data-category="${cat.id}"
                    class="cat-nav-btn whitespace-nowrap px-5 py-2.5 text-sm font-medium rounded-lg transition-all cursor-pointer
                           ${i === 0 ? 'bg-brand-gold text-brand-black' : 'text-brand-gray-light hover:text-white hover:bg-white/5'}">
              ${t(`products.categories.${cat.id}.title`)}
            </button>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Dynamic Content Area -->
    <div id="products-content"></div>

    <!-- CTA -->
    <section class="section-darker">
      <div class="container-custom text-center reveal">
        <h2 class="heading-lg text-white mb-4">${t('products.cta.heading')}</h2>
        <p class="text-brand-gray-light max-w-xl mx-auto mb-8">
          ${t('products.cta.subtitle')}
        </p>
        <a href="#/contact" class="btn-primary btn-lg text-sm uppercase tracking-widest">
          ${t('products.cta.button')}
        </a>
      </div>
    </section>
  `;

  return {
    html,
    init() {
      initPageAnimations();

      // Initial content render
      renderContent();

      // Category nav click handling
      const navBtns = document.querySelectorAll('.cat-nav-btn');
      navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          activeCategory = btn.dataset.category;
          activeMotherId = null;
          activeChildKey = null;
          updateNavButtons();
          renderContent();
          scrollToContent();
        });
      });
    },
  };
}
