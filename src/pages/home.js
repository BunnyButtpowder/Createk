import { initPageAnimations, initHeroAnimation, animateImageHover } from '../animations.js';

const productCategories = [
  {
    title: 'Engine Parts',
    desc: 'Crankshafts, liner kits, air compressors, turbochargers',
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
  },
  {
    title: 'Electrical Parts',
    desc: 'Starters, alternators, heavy-duty lamps and lighting',
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=260&fit=crop',
  },
  {
    title: 'Gears & Bearings',
    desc: 'Precision-engineered gears and bearings for all applications',
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`,
    img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=600&h=400&fit=crop',
  },
  {
    title: 'Rubber Parts',
    desc: 'Belts, oil seals, cushion gaskets built to endure',
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop',
  },
  {
    title: 'Friction Materials',
    desc: 'Clutch driven discs, brake linings, high-performance stopping',
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=600&h=400&fit=crop',
  },
  {
    title: 'Suspension',
    desc: 'Shock absorbers and suspension components for heavy loads',
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`,
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop',
  },
];

const stats = [
  { value: 25, suffix: '+', label: 'Years Experience' },
  { value: 5000, suffix: '+', label: 'Products Available' },
  { value: 80, suffix: '+', label: 'Countries Served' },
  { value: 99, suffix: '%', label: 'Customer Satisfaction' },
];

const testimonials = [
  {
    text: "Createk's turbochargers and engine parts have been the backbone of our fleet maintenance. Unmatched quality and consistency.",
    name: 'David Chen',
    role: 'Fleet Manager, TransGlobal Logistics',
  },
  {
    text: 'We switched to Createk brake linings two years ago. The durability improvement was immediate — downtime dropped significantly.',
    name: 'Maria Santos',
    role: 'Workshop Director, HeavyTech Repairs',
  },
  {
    text: 'Their product range for large vehicles is comprehensive. One supplier for everything we need — it simplifies our entire operation.',
    name: 'Ahmed Al-Rashid',
    role: 'Procurement Lead, Gulf Transport Co.',
  },
];

export function homePage() {
  const html = `
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&h=1080&fit=crop"
             alt="Heavy duty truck"
             class="w-full h-full object-cover" data-parallax="0.2" />
        <div class="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-brand-black/30"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50"></div>
      </div>

      <div class="container-custom relative z-10 pt-32 pb-20">
        <div class="max-w-3xl">
          <div class="hero-badge inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30
                      rounded-full px-4 py-2 mb-8">
            <span class="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span class="text-brand-gold text-sm font-medium tracking-wide">Heavy Duty Parts Specialist</span>
          </div>

          <h1 class="hero-title heading-xl text-white mb-6">
            Powering the <br/>
            <span class="text-gradient-gold">World's Biggest</span><br/>
            Machines
          </h1>

          <p class="hero-subtitle text-lg md:text-xl text-brand-gray-light max-w-xl mb-10 leading-relaxed">
            Premium auto parts engineered for large vehicles. From crankshafts to brake linings —
            trusted by professionals across 80+ countries.
          </p>

          <div class="hero-cta flex flex-wrap gap-4">
            <a href="#/products" class="btn-primary btn-lg text-sm uppercase tracking-widest">
              Explore Products
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="#/contact" class="btn-outline btn-lg text-sm uppercase tracking-widest">
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span class="text-xs uppercase tracking-widest">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="relative z-10 -mt-1 bg-brand-dark border-y border-white/5">
      <div class="container-custom py-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          ${stats.map(stat => `
            <div class="text-center">
              <div class="font-heading text-3xl md:text-4xl font-bold text-brand-gold"
                   data-count="${stat.value}" data-suffix="${stat.suffix}">0</div>
              <div class="text-sm text-brand-gray-light mt-2 uppercase tracking-wider">${stat.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- About Preview -->
    <section class="section-dark">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-left">
            <span class="badge-gold mb-4">About Createk</span>
            <h2 class="heading-lg text-white mt-4 mb-6">
              Built for <span class="text-gradient-gold">Power</span>,<br/>
              Engineered for Trust
            </h2>
            <p class="text-brand-gray-light leading-relaxed mb-6">
              With over 25 years of expertise in heavy-duty auto parts, Createk has become a trusted name
              for workshops, fleet operators, and distributors worldwide. Our commitment to quality ensures
              every part meets the demanding standards of large vehicle applications.
            </p>
            <p class="text-brand-gray-light leading-relaxed mb-8">
              From engine cores to braking systems, we deliver components that keep the world's
              biggest machines running at peak performance.
            </p>
            <a href="#/about" class="btn-outline text-sm uppercase tracking-widest">
              Learn More About Us
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
          <div class="reveal-right relative">
            <div class="img-hover-zoom rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&h=600&fit=crop"
                   alt="Createk warehouse" class="w-full h-[400px] lg:h-[500px] object-cover" />
            </div>
            <div class="absolute -bottom-6 -left-6 bg-brand-gold text-brand-black p-6 rounded-xl">
              <div class="font-heading text-4xl font-bold">25+</div>
              <div class="text-sm font-semibold">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Categories -->
    <section class="section-darker">
      <div class="container-custom">
        <div class="text-center mb-16 reveal">
          <span class="badge-gold mb-4">Our Products</span>
          <h2 class="heading-lg text-white mt-4 mb-4">
            Complete Parts <span class="text-gradient-gold">Catalog</span>
          </h2>
          <p class="text-brand-gray-light max-w-2xl mx-auto">
            Everything your heavy-duty vehicles need — all from one trusted source.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
          ${productCategories.map(cat => `
            <a href="#/products" class="card-hover group block">
              <div class="relative h-48 overflow-hidden img-hover-zoom">
                <img src="${cat.img}" alt="${cat.title}"
                     class="w-full h-full object-cover transition-transform duration-500" />
                <div class="overlay-gradient absolute inset-0"></div>
                <div class="absolute top-4 left-4 w-12 h-12 rounded-lg bg-brand-gold/20 backdrop-blur-sm
                            flex items-center justify-center text-brand-gold
                            group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  ${cat.icon}
                </div>
              </div>
              <div class="p-6">
                <h3 class="font-heading text-xl font-semibold uppercase text-white mb-2
                           group-hover:text-brand-gold transition-colors">${cat.title}</h3>
                <p class="text-brand-gray-light text-sm">${cat.desc}</p>
              </div>
            </a>
          `).join('')}
        </div>

        <div class="text-center mt-12 reveal">
          <a href="#/products" class="btn-primary btn-lg text-sm uppercase tracking-widest">
            View All Products
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-dark">
      <div class="container-custom">
        <div class="text-center mb-16 reveal">
          <span class="badge-gold mb-4">Why Createk</span>
          <h2 class="heading-lg text-white mt-4">
            The <span class="text-gradient-gold">Createk</span> Advantage
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
          <div class="card p-8 text-center group hover:border-brand-gold/30 transition-all">
            <div class="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-6
                        group-hover:bg-brand-gold/20 transition-colors">
              <svg class="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h4 class="font-heading text-lg uppercase text-white mb-3">Premium Quality</h4>
            <p class="text-brand-gray-light text-sm">Every part undergoes rigorous testing to meet OEM standards and beyond.</p>
          </div>

          <div class="card p-8 text-center group hover:border-brand-gold/30 transition-all">
            <div class="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-6
                        group-hover:bg-brand-gold/20 transition-colors">
              <svg class="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 class="font-heading text-lg uppercase text-white mb-3">Global Reach</h4>
            <p class="text-brand-gray-light text-sm">Distributing to 80+ countries with reliable logistics and fast delivery.</p>
          </div>

          <div class="card p-8 text-center group hover:border-brand-gold/30 transition-all">
            <div class="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-6
                        group-hover:bg-brand-gold/20 transition-colors">
              <svg class="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
              </svg>
            </div>
            <h4 class="font-heading text-lg uppercase text-white mb-3">Wide Range</h4>
            <p class="text-brand-gray-light text-sm">Over 5,000 products covering every major system in large vehicles.</p>
          </div>

          <div class="card p-8 text-center group hover:border-brand-gold/30 transition-all">
            <div class="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-6
                        group-hover:bg-brand-gold/20 transition-colors">
              <svg class="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
            <h4 class="font-heading text-lg uppercase text-white mb-3">Expert Support</h4>
            <p class="text-brand-gray-light text-sm">Technical team ready to help you find the right parts for any application.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="relative py-32 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=280&fit=crop"
             alt="Manufacturing" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-brand-black/80"></div>
      </div>
      <div class="container-custom relative z-10 text-center">
        <div class="reveal">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener"
             class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-gold
                    text-brand-black hover:scale-110 transition-transform duration-300 mb-8 group">
            <svg class="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </a>
          <h2 class="heading-lg text-white mb-4">See Our <span class="text-gradient-gold">Facility</span> in Action</h2>
          <p class="text-brand-gray-light max-w-xl mx-auto">
            Take a tour of our state-of-the-art warehouse and quality testing facilities.
          </p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-darker">
      <div class="container-custom">
        <div class="text-center mb-16 reveal">
          <span class="badge-gold mb-4">Testimonials</span>
          <h2 class="heading-lg text-white mt-4">
            Trusted by <span class="text-gradient-gold">Professionals</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6" data-stagger>
          ${testimonials.map(t => `
            <div class="card p-8 relative">
              <svg class="w-10 h-10 text-brand-gold/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p class="text-brand-gray-light leading-relaxed mb-6">${t.text}</p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-heading font-bold">
                  ${t.name.charAt(0)}
                </div>
                <div>
                  <div class="text-white text-sm font-semibold">${t.name}</div>
                  <div class="text-brand-gray-light text-xs">${t.role}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-dark">
      <div class="container-custom">
        <div class="relative bg-gradient-to-br from-brand-gold/10 via-brand-gray-dark to-brand-gray-dark
                    border border-brand-gold/20 rounded-3xl p-12 md:p-20 text-center overflow-hidden reveal-scale">
          <div class="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <h2 class="heading-lg text-white mb-6">
              Ready to <span class="text-gradient-gold">Power Up</span>?
            </h2>
            <p class="text-brand-gray-light max-w-xl mx-auto mb-10 text-lg">
              Get in touch for a custom quote, product inquiries, or partnership opportunities.
              Our team responds within 24 hours.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <a href="#/contact" class="btn-primary btn-lg text-sm uppercase tracking-widest">
                Contact Us Today
              </a>
              <a href="#/products" class="btn-outline btn-lg text-sm uppercase tracking-widest">
                Browse Catalog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return {
    html,
    init() {
      initHeroAnimation();
      initPageAnimations();
      animateImageHover();
    },
  };
}
