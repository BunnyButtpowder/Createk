import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';

export function productsPage() {
  const categories = [
    {
      id: 'engine',
      products: [
        { nameKey: 'crankshaft', code: 'CRK-4500', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=500&fit=crop', specs: 'Forged steel, precision balanced' },
        { nameKey: 'linerKit', code: 'LNK-2200', img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=500&h=500&fit=crop', specs: 'Cast iron, honed finish' },
        { nameKey: 'airCompressor', code: 'ACP-3100', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=260&fit=crop', specs: 'Single/twin cylinder, 12-24V' },
        { nameKey: 'turbocharger', code: 'TBC-7800', img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&h=500&fit=crop', specs: 'Variable geometry, wastegate' },
        { nameKey: 'starterMotor', code: 'STM-4400', img: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=500&h=500&fit=crop', specs: '24V, 5.5kW-7.5kW' },
        { nameKey: 'alternator', code: 'ALT-6600', img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=500&h=500&fit=crop', specs: '28V, 80A-150A output' },
      ],
    },
    {
      id: 'electrical',
      products: [
        { nameKey: 'ledHeadlamp', code: 'LED-1100', img: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=500&fit=crop', specs: 'IP67, 6000K, 4800lm' },
        { nameKey: 'tailLight', code: 'TLA-2200', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=500&fit=crop', specs: 'LED, ECE R6/R7 approved' },
        { nameKey: 'workLamp', code: 'WKL-3300', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=500&fit=crop', specs: 'Flood/spot, 48W LED' },
        { nameKey: 'fogLamp', code: 'FGL-4400', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&h=500&fit=crop', specs: 'H3 bulb, aluminum housing' },
      ],
    },
    {
      id: 'transmission',
      products: [
        { nameKey: 'differentialGear', code: 'DGS-5500', img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=500&h=500&fit=crop', specs: 'Hardened alloy steel' },
        { nameKey: 'wheelBearing', code: 'WBK-6600', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=260&fit=crop', specs: 'Tapered roller, sealed' },
        { nameKey: 'transmissionGear', code: 'TRG-7700', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=500&fit=crop', specs: 'Case-hardened, ground finish' },
        { nameKey: 'pilotBearing', code: 'PLB-8800', img: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=500&h=500&fit=crop', specs: 'Needle roller, pre-lubricated' },
      ],
    },
    {
      id: 'suspension',
      products: [
        { nameKey: 'cabinShock', code: 'CSA-1100', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=500&fit=crop', specs: 'Gas-charged, adjustable' },
        { nameKey: 'rearDamper', code: 'RAD-2200', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&h=500&fit=crop', specs: 'Twin-tube, heavy-duty' },
        { nameKey: 'airSpring', code: 'ARS-3300', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=500&fit=crop', specs: 'Contitech compatible' },
      ],
    },
    {
      id: 'rubber',
      products: [
        { nameKey: 'vBelt', code: 'VBS-4400', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=500&fit=crop', specs: 'EPDM, multi-rib' },
        { nameKey: 'oilSeal', code: 'COS-5500', img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=500&h=500&fit=crop', specs: 'FKM/NBR, dust lip' },
        { nameKey: 'gasketSet', code: 'CGS-6600', img: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=500&h=500&fit=crop', specs: 'Silicone/cork composite' },
        { nameKey: 'engineMount', code: 'EMT-7700', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=260&fit=crop', specs: 'NR rubber, zinc-plated bracket' },
      ],
    },
    {
      id: 'friction',
      products: [
        { nameKey: 'clutchDisc', code: 'CDD-8800', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=500&fit=crop', specs: 'Organic/ceramic, 350mm-430mm' },
        { nameKey: 'brakeLining', code: 'BLS-9900', img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&h=500&fit=crop', specs: 'Non-asbestos, ECE R90' },
        { nameKey: 'pressurePlate', code: 'CPP-1010', img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=500&h=500&fit=crop', specs: 'Diaphragm spring, balanced' },
        { nameKey: 'brakeDisc', code: 'BRD-1120', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=500&fit=crop', specs: 'Ventilated, GG25 cast iron' },
      ],
    },
  ];

  const html = `
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&h=600&fit=crop"
             alt="Auto parts" class="w-full h-full object-cover opacity-15" />
        <div class="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black"></div>
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
                    class="cat-nav-btn whitespace-nowrap px-4 py-2 text-sm font-medium rounded-lg transition-all
                           ${i === 0 ? 'bg-brand-gold text-brand-black' : 'text-brand-gray-light hover:text-white hover:bg-white/5'}">
              ${t(`products.categories.${cat.id}.title`)}
            </button>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Product Categories -->
    <div class="divide-y divide-white/5">
      ${categories.map(cat => `
        <section id="cat-${cat.id}" class="section-dark">
          <div class="container-custom">
            <div class="mb-12 reveal">
              <div class="flex items-center gap-4 mb-4">
                <div class="divider-gold"></div>
                <span class="text-brand-gold text-sm uppercase tracking-widest font-medium">${cat.id}</span>
              </div>
              <h2 class="heading-lg text-white mb-4">${t(`products.categories.${cat.id}.title`)}</h2>
              <p class="text-brand-gray-light max-w-2xl">${t(`products.categories.${cat.id}.desc`)}</p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-stagger>
              ${cat.products.map(p => `
                <div class="card-hover group">
                  <div class="relative h-48 overflow-hidden img-hover-zoom">
                    <img src="${p.img}" alt="${t(`products.categories.${cat.id}.products.${p.nameKey}`)}"
                         class="w-full h-full object-cover transition-transform duration-500" />
                    <div class="absolute top-3 right-3">
                      <span class="bg-brand-black/80 backdrop-blur-sm text-brand-gold text-xs font-mono px-2 py-1 rounded">
                        ${p.code}
                      </span>
                    </div>
                  </div>
                  <div class="p-5">
                    <h3 class="font-heading text-base uppercase text-white mb-1
                               group-hover:text-brand-gold transition-colors">${t(`products.categories.${cat.id}.products.${p.nameKey}`)}</h3>
                    <p class="text-brand-gray-light text-xs mb-4">${p.specs}</p>
                    <a href="#/contact" class="text-brand-gold text-xs font-semibold uppercase tracking-wider
                                              flex items-center gap-1 group/link hover:gap-2 transition-all">
                      ${t('products.requestQuote')}
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </a>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `).join('')}
    </div>

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
      animateImageHover();

      // Category nav scrollspy & click handling
      const navBtns = document.querySelectorAll('.cat-nav-btn');

      navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const catId = btn.dataset.category;
          const target = document.getElementById(`cat-${catId}`);
          if (target) {
            const offset = 140;
            const y = target.getBoundingClientRect().top + window.scrollY - offset;
            if (window.__lenis) {
              window.__lenis.scrollTo(y);
            } else {
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }

          navBtns.forEach(b => {
            b.classList.remove('bg-brand-gold', 'text-brand-black');
            b.classList.add('text-brand-gray-light');
          });
          btn.classList.add('bg-brand-gold', 'text-brand-black');
          btn.classList.remove('text-brand-gray-light');
        });
      });
    },
  };
}
