import { initPageAnimations, animateImageHover } from '../animations.js';

const milestones = [
  { year: '1998', title: 'Founded', desc: 'Createk established in Bangkok as a small parts distributor for local truck operators.' },
  { year: '2005', title: 'Regional Expansion', desc: 'Extended distribution network across Southeast Asia, adding engine and electrical parts.' },
  { year: '2012', title: 'Global Reach', desc: 'Began exporting to the Middle East, Africa, and South America. Product catalog exceeds 2,000 items.' },
  { year: '2018', title: 'New Facility', desc: 'Opened state-of-the-art 15,000 sqm warehouse with automated inventory management.' },
  { year: '2023', title: '5,000+ Products', desc: 'Catalog grew to over 5,000 products. Serving customers in 80+ countries worldwide.' },
];

const values = [
  {
    title: 'Quality First',
    desc: 'Every product is rigorously tested against OEM specifications. We never compromise on material or manufacturing standards.',
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>`,
  },
  {
    title: 'Reliability',
    desc: 'Consistent stock availability and dependable delivery schedules keep your operations running smoothly.',
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  },
  {
    title: 'Partnership',
    desc: 'We build long-term relationships with distributors and workshops, offering competitive pricing and dedicated support.',
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
  },
  {
    title: 'Innovation',
    desc: 'Continuously expanding our catalog with the latest parts technology to meet evolving heavy-duty vehicle requirements.',
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
  },
];

const team = [
  { name: 'Somchai Panich', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
  { name: 'Linda Kessler', role: 'VP of Operations', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face' },
  { name: 'Raj Patel', role: 'Head of Quality', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
  { name: 'Yuki Tanaka', role: 'Sales Director', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face' },
];

export function aboutPage() {
  const html = `
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&h=600&fit=crop"
             alt="Workshop" class="w-full h-full object-cover opacity-20" />
        <div class="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black"></div>
      </div>
      <div class="container-custom relative z-10 pt-12">
        <div class="reveal">
          <span class="badge-gold mb-4">About Us</span>
          <h1 class="heading-xl text-white mt-4 mb-6">
            Driving the Heavy-Duty<br/>
            <span class="text-gradient-gold">Industry Forward</span>
          </h1>
          <p class="text-brand-gray-light text-lg max-w-2xl leading-relaxed">
            Since 1998, Createk has grown from a local distributor to a global supplier of premium
            auto parts for large vehicles — trusted by professionals on every continent.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="section-darker">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-left">
            <div class="relative">
              <div class="img-hover-zoom rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop"
                     alt="Createk facility" class="w-full h-[400px] lg:h-[500px] object-cover" />
              </div>
              <div class="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-brand-gold/30 rounded-2xl"></div>
            </div>
          </div>
          <div class="reveal-right">
            <span class="badge-gold mb-4">Our Mission</span>
            <h2 class="heading-lg text-white mt-4 mb-6">
              Keeping the World's<br/>
              <span class="text-gradient-gold">Biggest Machines</span> Moving
            </h2>
            <p class="text-brand-gray-light leading-relaxed mb-6">
              Our mission is to provide the highest quality aftermarket parts for heavy-duty vehicles
              at competitive prices, with unmatched availability and global distribution.
            </p>
            <p class="text-brand-gray-light leading-relaxed mb-8">
              We believe that reliable parts build reliable businesses. That's why every product
              in our catalog undergoes rigorous quality testing before it reaches our customers.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-brand-gray p-4 rounded-xl">
                <div class="font-heading text-2xl font-bold text-brand-gold">ISO 9001</div>
                <div class="text-sm text-brand-gray-light mt-1">Certified Quality</div>
              </div>
              <div class="bg-brand-gray p-4 rounded-xl">
                <div class="font-heading text-2xl font-bold text-brand-gold">15,000m²</div>
                <div class="text-sm text-brand-gray-light mt-1">Warehouse Space</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-dark">
      <div class="container-custom">
        <div class="text-center mb-16 reveal">
          <span class="badge-gold mb-4">Our Values</span>
          <h2 class="heading-lg text-white mt-4">
            What <span class="text-gradient-gold">Drives</span> Us
          </h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
          ${values.map(v => `
            <div class="card p-8 group hover:border-brand-gold/30">
              <div class="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6
                          group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                ${v.icon}
              </div>
              <h3 class="font-heading text-lg uppercase text-white mb-3">${v.title}</h3>
              <p class="text-brand-gray-light text-sm leading-relaxed">${v.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section-darker">
      <div class="container-custom">
        <div class="text-center mb-16 reveal">
          <span class="badge-gold mb-4">Our Journey</span>
          <h2 class="heading-lg text-white mt-4">
            Key <span class="text-gradient-gold">Milestones</span>
          </h2>
        </div>
        <div class="relative">
          <!-- Timeline line -->
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10"></div>
          <div class="space-y-12">
            ${milestones.map((m, i) => `
              <div class="reveal relative md:flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">
                <div class="md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}">
                  <div class="font-heading text-3xl font-bold text-brand-gold mb-2">${m.year}</div>
                  <h3 class="font-heading text-xl uppercase text-white mb-2">${m.title}</h3>
                  <p class="text-brand-gray-light text-sm">${m.desc}</p>
                </div>
                <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-gold border-4 border-brand-dark"></div>
                <div class="md:w-1/2"></div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="section-dark">
      <div class="container-custom">
        <div class="text-center mb-16 reveal">
          <span class="badge-gold mb-4">Leadership</span>
          <h2 class="heading-lg text-white mt-4">
            Meet Our <span class="text-gradient-gold">Team</span>
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
          ${team.map(t => `
            <div class="card group overflow-hidden">
              <div class="relative h-64 overflow-hidden img-hover-zoom">
                <img src="${t.img}" alt="${t.name}"
                     class="w-full h-full object-cover transition-transform duration-500" />
                <div class="overlay-gradient absolute inset-0"></div>
              </div>
              <div class="p-6 text-center">
                <h3 class="font-heading text-lg uppercase text-white group-hover:text-brand-gold transition-colors">${t.name}</h3>
                <p class="text-brand-gold text-sm mt-1">${t.role}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-darker">
      <div class="container-custom text-center reveal">
        <h2 class="heading-lg text-white mb-6">Want to <span class="text-gradient-gold">Work With Us</span>?</h2>
        <p class="text-brand-gray-light max-w-xl mx-auto mb-10">
          Whether you're a distributor, workshop, or fleet operator — let's discuss how Createk can support your business.
        </p>
        <a href="#/contact" class="btn-primary btn-lg text-sm uppercase tracking-widest">
          Get in Touch
        </a>
      </div>
    </section>
  `;

  return {
    html,
    init() {
      initPageAnimations();
      animateImageHover();
    },
  };
}
