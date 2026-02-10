import { initPageAnimations, animateImageHover } from '../animations.js';

const categories = [
  {
    id: 'engine',
    title: 'Engine Spare Parts',
    desc: 'Core components built to withstand extreme conditions and deliver reliable performance under heavy loads.',
    products: [
      { name: 'Crankshaft Assembly', code: 'CRK-4500', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=500&fit=crop', specs: 'Forged steel, precision balanced' },
      { name: 'Liner Kit', code: 'LNK-2200', img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=500&h=500&fit=crop', specs: 'Cast iron, honed finish' },
      { name: 'Air Compressor', code: 'ACP-3100', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=500&fit=crop', specs: 'Single/twin cylinder, 12-24V' },
      { name: 'Turbocharger', code: 'TBC-7800', img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&h=500&fit=crop', specs: 'Variable geometry, wastegate' },
      { name: 'Starter Motor', code: 'STM-4400', img: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=500&h=500&fit=crop', specs: '24V, 5.5kW-7.5kW' },
      { name: 'Alternator', code: 'ALT-6600', img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=500&h=500&fit=crop', specs: '28V, 80A-150A output' },
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical Parts',
    desc: 'Heavy-duty lighting and electrical components for maximum visibility and safety on the road.',
    products: [
      { name: 'LED Headlamp', code: 'LED-1100', img: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=500&fit=crop', specs: 'IP67, 6000K, 4800lm' },
      { name: 'Tail Light Assembly', code: 'TLA-2200', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=500&fit=crop', specs: 'LED, ECE R6/R7 approved' },
      { name: 'Work Lamp', code: 'WKL-3300', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=500&fit=crop', specs: 'Flood/spot, 48W LED' },
      { name: 'Fog Lamp', code: 'FGL-4400', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&h=500&fit=crop', specs: 'H3 bulb, aluminum housing' },
    ],
  },
  {
    id: 'transmission',
    title: 'Gears & Bearings',
    desc: 'Precision-machined transmission components for smooth power delivery and extended service life.',
    products: [
      { name: 'Differential Gear Set', code: 'DGS-5500', img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=500&h=500&fit=crop', specs: 'Hardened alloy steel' },
      { name: 'Wheel Bearing Kit', code: 'WBK-6600', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=500&fit=crop', specs: 'Tapered roller, sealed' },
      { name: 'Transmission Gear', code: 'TRG-7700', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=500&fit=crop', specs: 'Case-hardened, ground finish' },
      { name: 'Pilot Bearing', code: 'PLB-8800', img: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=500&h=500&fit=crop', specs: 'Needle roller, pre-lubricated' },
    ],
  },
  {
    id: 'suspension',
    title: 'Shock Absorbers',
    desc: 'Heavy-duty suspension components designed to handle the toughest road conditions and payloads.',
    products: [
      { name: 'Cabin Shock Absorber', code: 'CSA-1100', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=500&fit=crop', specs: 'Gas-charged, adjustable' },
      { name: 'Rear Axle Damper', code: 'RAD-2200', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&h=500&fit=crop', specs: 'Twin-tube, heavy-duty' },
      { name: 'Air Spring', code: 'ARS-3300', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=500&fit=crop', specs: 'Contitech compatible' },
    ],
  },
  {
    id: 'rubber',
    title: 'Rubber Parts',
    desc: 'Durable rubber components engineered to resist heat, oil, and harsh operating environments.',
    products: [
      { name: 'V-Belt Set', code: 'VBS-4400', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=500&fit=crop', specs: 'EPDM, multi-rib' },
      { name: 'Crankshaft Oil Seal', code: 'COS-5500', img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=500&h=500&fit=crop', specs: 'FKM/NBR, dust lip' },
      { name: 'Cushion Gasket Set', code: 'CGS-6600', img: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=500&h=500&fit=crop', specs: 'Silicone/cork composite' },
      { name: 'Engine Mount', code: 'EMT-7700', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=500&fit=crop', specs: 'NR rubber, zinc-plated bracket' },
    ],
  },
  {
    id: 'friction',
    title: 'Friction Materials',
    desc: 'High-performance braking and clutch components for maximum stopping power and longevity.',
    products: [
      { name: 'Clutch Driven Disc', code: 'CDD-8800', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=500&fit=crop', specs: 'Organic/ceramic, 350mm-430mm' },
      { name: 'Brake Lining Set', code: 'BLS-9900', img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&h=500&fit=crop', specs: 'Non-asbestos, ECE R90' },
      { name: 'Clutch Pressure Plate', code: 'CPP-1010', img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=500&h=500&fit=crop', specs: 'Diaphragm spring, balanced' },
      { name: 'Brake Disc', code: 'BRD-1120', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=500&fit=crop', specs: 'Ventilated, GG25 cast iron' },
    ],
  },
];

export function productsPage() {
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
          <span class="badge-gold mb-4">Product Catalog</span>
          <h1 class="heading-xl text-white mt-4 mb-6">
            Parts Built for<br/>
            <span class="text-gradient-gold">Performance</span>
          </h1>
          <p class="text-brand-gray-light text-lg max-w-2xl leading-relaxed">
            Over 5,000 products across 6 categories — everything your heavy-duty fleet needs
            from a single trusted source.
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
              ${cat.title}
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
              <h2 class="heading-lg text-white mb-4">${cat.title}</h2>
              <p class="text-brand-gray-light max-w-2xl">${cat.desc}</p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-stagger>
              ${cat.products.map(p => `
                <div class="card-hover group">
                  <div class="relative h-48 overflow-hidden img-hover-zoom">
                    <img src="${p.img}" alt="${p.name}"
                         class="w-full h-full object-cover transition-transform duration-500" />
                    <div class="absolute top-3 right-3">
                      <span class="bg-brand-black/80 backdrop-blur-sm text-brand-gold text-xs font-mono px-2 py-1 rounded">
                        ${p.code}
                      </span>
                    </div>
                  </div>
                  <div class="p-5">
                    <h3 class="font-heading text-base uppercase text-white mb-1
                               group-hover:text-brand-gold transition-colors">${p.name}</h3>
                    <p class="text-brand-gray-light text-xs mb-4">${p.specs}</p>
                    <a href="#/contact" class="text-brand-gold text-xs font-semibold uppercase tracking-wider
                                              flex items-center gap-1 group/link hover:gap-2 transition-all">
                      Request Quote
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
        <h2 class="heading-lg text-white mb-4">Can't Find What You Need?</h2>
        <p class="text-brand-gray-light max-w-xl mx-auto mb-8">
          Our catalog is always growing. Contact our technical team and we'll help
          source the exact part you need.
        </p>
        <a href="#/contact" class="btn-primary btn-lg text-sm uppercase tracking-widest">
          Contact Our Experts
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
