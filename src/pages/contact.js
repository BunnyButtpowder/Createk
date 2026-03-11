import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';
import gsap from 'gsap';

export function contactPage() {
  const html = `
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0">
        <img src="/anthai.jpg"
             alt="An Thai - Createk Distributor" class="w-full h-full object-cover opacity-15" />
      </div>
      <div class="container-custom relative z-10 pt-12">
        <div class="reveal">
          <span class="badge-gold mb-4">${t('contact.hero.badge')}</span>
          <h1 class="heading-xl text-white mt-4 mb-6">
            ${t('contact.hero.heading1')} <span class="text-gradient-gold">${t('contact.hero.headingHighlight')}</span><br/>
            <div class="mt-3"/>
            ${t('contact.hero.heading2')}
          </h1>
          <p class="text-brand-gray-light text-lg max-w-2xl leading-relaxed">
            ${t('contact.hero.subtitle')}
          </p>
        </div>
      </div>
    </section>

    <!-- An Thai Distributor Showcase -->
    <section class="relative z-10 -mt-1 bg-brand-dark border-y border-white/5">
      <div class="container-custom py-0">
        <div class="grid lg:grid-cols-2 items-stretch -mx-4 sm:-mx-6 lg:-mx-8">
          <div class="an-thai-image-wrapper relative h-[320px] lg:h-auto overflow-hidden reveal-left">
            <img src="/anthai.jpg" alt="An Thai - Createk Distributor"
                 class="an-thai-hero-image w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent lg:hidden"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent to-brand-dark/60 hidden lg:block"></div>
          </div>
          <div class="an-thai-info-section flex flex-col justify-center py-12 lg:py-16 px-4 sm:px-6 lg:pl-12 lg:pr-8 reveal-right">
            <h2 class="font-heading text-2xl lg:text-3xl font-bold uppercase text-white leading-tight mb-8">
              ${t('contact.anThai.title')}
            </h2>
            <div class="space-y-5">
              <a href="tel:0817821821" class="an-thai-phone flex items-center gap-5 group cursor-pointer
                        bg-brand-gold/5 border border-brand-gold/15 rounded-2xl p-5
                        hover:bg-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300">
                <div class="w-14 h-14 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0
                            group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-brand-gray-light text-xs uppercase tracking-wider mb-1">${t('contact.info.phone')}</div>
                  <span class="text-brand-gold font-heading text-2xl font-bold group-hover:text-white transition-colors">
                    ${t('contact.anThai.phone')}
                  </span>
                </div>
              </a>
              <div class="an-thai-address flex items-center gap-5
                          bg-white/[0.02] border border-white/10 rounded-2xl p-5">
                <div class="w-14 h-14 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-brand-gray-light text-xs uppercase tracking-wider mb-1">${t('contact.info.viewMap')}</div>
                  <span class="text-white text-base font-medium leading-relaxed">
                    ${t('contact.anThai.address')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="section-darker">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12 reveal">
            <span class="badge-gold mb-4">${t('contact.form.heading')}</span>
            <h2 class="heading-lg text-white mt-4 mb-4">
              ${t('contact.hero.heading1')} <span class="text-gradient-gold">${t('contact.hero.headingHighlight')}</span> ${t('contact.hero.heading2')}
            </h2>
            <p class="text-brand-gray-light max-w-xl mx-auto">
              ${t('contact.form.subtitle')}
            </p>
          </div>

          <div class="relative reveal">
            <div class="absolute -top-8 -left-8 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>
            <div class="contact-form-card relative bg-brand-gray-dark/80 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <form id="contact-form" class="space-y-6" onsubmit="event.preventDefault()">
                <div class="grid sm:grid-cols-2 gap-6">
                  <div class="form-field-wrapper">
                    <label class="block text-sm text-brand-gray-light mb-2 font-medium">${t('contact.form.fullName')}</label>
                    <input type="text" placeholder="${t('contact.form.placeholderName')}" class="input" required />
                  </div>
                  <div class="form-field-wrapper">
                    <label class="block text-sm text-brand-gray-light mb-2 font-medium">${t('contact.form.company')}</label>
                    <input type="text" placeholder="${t('contact.form.placeholderCompany')}" class="input" />
                  </div>
                </div>

                <div class="grid sm:grid-cols-2 gap-6">
                  <div class="form-field-wrapper">
                    <label class="block text-sm text-brand-gray-light mb-2 font-medium">${t('contact.form.email')}</label>
                    <input type="email" placeholder="${t('contact.form.placeholderEmail')}" class="input" required />
                  </div>
                  <div class="form-field-wrapper">
                    <label class="block text-sm text-brand-gray-light mb-2 font-medium">${t('contact.form.phone')}</label>
                    <input type="tel" placeholder="${t('contact.form.placeholderPhone')}" class="input" />
                  </div>
                </div>

                <div class="form-field-wrapper">
                  <label class="block text-sm text-brand-gray-light mb-2 font-medium">${t('contact.form.subject')}</label>
                  <select class="input appearance-none cursor-pointer">
                    <option value="">${t('contact.form.selectSubject')}</option>
                    <option value="quote">${t('contact.form.requestQuote')}</option>
                    <option value="technical">${t('contact.form.technicalSupport')}</option>
                    <option value="distributor">${t('contact.form.becomeDistributor')}</option>
                    <option value="general">${t('contact.form.generalInquiry')}</option>
                  </select>
                </div>

                <div class="form-field-wrapper">
                  <label class="block text-sm text-brand-gray-light mb-2 font-medium">${t('contact.form.message')}</label>
                  <textarea placeholder="${t('contact.form.placeholderMessage')}" class="textarea" rows="5" required></textarea>
                </div>

                <div class="pt-2">
                  <button type="submit" id="submit-btn" class="btn-primary btn-lg text-sm uppercase tracking-widest w-full cursor-pointer">
                    ${t('contact.form.sendMessage')}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  </button>
                </div>
              </form>

              <div id="form-success" class="hidden mt-8 bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
                <svg class="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h3 class="text-white font-heading text-xl uppercase mb-3">${t('contact.form.successTitle')}</h3>
                <p class="text-brand-gray-light">${t('contact.form.successMessage')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return {
    html,
    init() {
      initPageAnimations();
      animateImageHover();

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
