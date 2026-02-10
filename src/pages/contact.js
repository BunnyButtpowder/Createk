import { initPageAnimations } from '../animations.js';
import { t } from '../i18n/index.js';
import gsap from 'gsap';

const offices = [
  {
    city: 'Hanoi',
    country: 'Vietnam (HQ)',
    address: '123 Industrial Zone, Hanoi, Vietnam',
    phone: '+84 90 123 4567',
    email: 'info@createk.com',
  },
  {
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    address: '123 Industrial Zone, Ho Chi Minh City, Vietnam',
    phone: '+84 90 123 4567',
    email: 'info@createk.com',
  },
  {
    city: 'Da Nang',
    country: 'Nigeria',
    address: '123 Industrial Zone, Da Nang, Vietnam',
    phone: '+84 90 123 4567',
    email: 'info@createk.com',
  },
];

export function contactPage() {
  const html = `
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=600&fit=crop"
             alt="Contact" class="w-full h-full object-cover opacity-15" />
        <div class="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black"></div>
      </div>
      <div class="container-custom relative z-10 pt-12">
        <div class="reveal">
          <span class="badge-gold mb-4">${t('contact.hero.badge')}</span>
          <h1 class="heading-xl text-white mt-4 mb-6">
            ${t('contact.hero.heading1')} <span class="text-gradient-gold">${t('contact.hero.headingHighlight')}</span><br/>
            ${t('contact.hero.heading2')}
          </h1>
          <p class="text-brand-gray-light text-lg max-w-2xl leading-relaxed">
            ${t('contact.hero.subtitle')}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form + Info -->
    <section class="section-darker">
      <div class="container-custom">
        <div class="grid lg:grid-cols-5 gap-12 lg:gap-16">

          <!-- Form -->
          <div class="lg:col-span-3 reveal-left">
            <h2 class="heading-md text-white mb-2">${t('contact.form.heading')}</h2>
            <p class="text-brand-gray-light mb-8">${t('contact.form.subtitle')}</p>

            <form id="contact-form" class="space-y-6" onsubmit="event.preventDefault()">
              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm text-brand-gray-light mb-2">${t('contact.form.fullName')}</label>
                  <input type="text" placeholder="${t('contact.form.placeholderName')}" class="input" required />
                </div>
                <div>
                  <label class="block text-sm text-brand-gray-light mb-2">${t('contact.form.company')}</label>
                  <input type="text" placeholder="${t('contact.form.placeholderCompany')}" class="input" />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm text-brand-gray-light mb-2">${t('contact.form.email')}</label>
                  <input type="email" placeholder="${t('contact.form.placeholderEmail')}" class="input" required />
                </div>
                <div>
                  <label class="block text-sm text-brand-gray-light mb-2">${t('contact.form.phone')}</label>
                  <input type="tel" placeholder="${t('contact.form.placeholderPhone')}" class="input" />
                </div>
              </div>

              <div>
                <label class="block text-sm text-brand-gray-light mb-2">${t('contact.form.subject')}</label>
                <select class="input appearance-none cursor-pointer">
                  <option value="">${t('contact.form.selectSubject')}</option>
                  <option value="quote">${t('contact.form.requestQuote')}</option>
                  <option value="technical">${t('contact.form.technicalSupport')}</option>
                  <option value="distributor">${t('contact.form.becomeDistributor')}</option>
                  <option value="general">${t('contact.form.generalInquiry')}</option>
                </select>
              </div>

              <div>
                <label class="block text-sm text-brand-gray-light mb-2">${t('contact.form.message')}</label>
                <textarea placeholder="${t('contact.form.placeholderMessage')}" class="textarea" rows="5" required></textarea>
              </div>

              <button type="submit" id="submit-btn" class="btn-primary btn-lg text-sm uppercase tracking-widest w-full sm:w-auto">
                ${t('contact.form.sendMessage')}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </button>
            </form>

            <!-- Success message (hidden by default) -->
            <div id="form-success" class="hidden mt-8 bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center">
              <svg class="w-12 h-12 text-green-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 class="text-white font-heading text-lg uppercase mb-2">${t('contact.form.successTitle')}</h3>
              <p class="text-brand-gray-light text-sm">${t('contact.form.successMessage')}</p>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="lg:col-span-2 reveal-right">
            <h2 class="heading-md text-white mb-8">${t('contact.info.heading')}</h2>

            <div class="space-y-6 mb-12">
              <div class="flex items-start gap-4 group">
                <div class="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0
                            group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-semibold text-sm mb-1">${t('contact.info.email')}</div>
                  <a href="mailto:info@createk.com" class="text-brand-gray-light text-sm hover:text-brand-gold transition-colors">
                    info@createk.com
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4 group">
                <div class="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0
                            group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-semibold text-sm mb-1">${t('contact.info.phone')}</div>
                  <a href="tel:+6621234567" class="text-brand-gray-light text-sm hover:text-brand-gold transition-colors">
                    +66 2 123 4567
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4 group">
                <div class="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0
                            group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-semibold text-sm mb-1">${t('contact.info.businessHours')}</div>
                  <p class="text-brand-gray-light text-sm">${t('contact.info.hours1')}</p>
                  <p class="text-brand-gray-light text-sm">${t('contact.info.hours2')}</p>
                </div>
              </div>
            </div>

            <!-- Map placeholder -->
            <div class="card overflow-hidden">
              <div class="relative h-48 bg-brand-gray">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=300&fit=crop"
                     alt="Map location" class="w-full h-full object-cover opacity-60" />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="bg-brand-black/80 backdrop-blur-sm rounded-xl px-6 py-3 flex items-center gap-2">
                    <svg class="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span class="text-white text-sm font-medium">${t('contact.info.viewMap')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Offices -->
    <section class="section-dark">
      <div class="container-custom">
        <div class="text-center mb-12 reveal">
          <span class="badge-gold mb-4">${t('contact.offices.badge')}</span>
          <h2 class="heading-lg text-white mt-4">
            ${t('contact.offices.heading1')} <span class="text-gradient-gold">${t('contact.offices.headingHighlight')}</span>
          </h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6" data-stagger>
          ${offices.map(o => `
            <div class="card p-8 text-center group hover:border-brand-gold/30">
              <div class="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center
                          text-brand-gold mx-auto mb-6 group-hover:bg-brand-gold group-hover:text-brand-black
                          transition-all duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 class="font-heading text-xl uppercase text-white mb-1">${o.city}</h3>
              <p class="text-brand-gold text-sm mb-4">${o.country}</p>
              <p class="text-brand-gray-light text-sm mb-2">${o.address}</p>
              <p class="text-brand-gray-light text-sm">${o.phone}</p>
              <a href="mailto:${o.email}" class="text-brand-gold text-sm font-medium mt-2 inline-block hover:text-brand-gold-light transition-colors">
                ${o.email}
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  return {
    html,
    init() {
      initPageAnimations();

      // Form submit animation
      const form = document.getElementById('contact-form');
      const submitBtn = document.getElementById('submit-btn');
      const successMsg = document.getElementById('form-success');

      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          submitBtn.disabled = true;
          submitBtn.textContent = t('contact.form.sending');

          setTimeout(() => {
            gsap.to(form, {
              opacity: 0,
              y: -20,
              duration: 0.4,
              onComplete: () => {
                form.classList.add('hidden');
                successMsg.classList.remove('hidden');
                gsap.fromTo(successMsg,
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
                );
              }
            });
          }, 1000);
        });
      }
    },
  };
}
