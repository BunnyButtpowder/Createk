import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';
import gsap from 'gsap';
import { postAPI } from '../api/client.js';
import { getSettings } from '../api/settings.js';

export function contactPage() {
  const html = `
    <!-- Hero -->
    <section class="relative pt-32 pb-12 sm:pb-20 overflow-hidden">
      <div class="absolute inset-0">
        <img id="contact-hero-image" src="/anthai.jpg"
             alt="An Thai - Createk Distributor" class="w-full h-full object-cover opacity-15" />
        <div class="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black"></div>
      </div>
      <div class="container-custom relative z-10">
        <div class="reveal text-center md:text-left">
          <h1 class="heading-xl text-white mt-4 mb-6">
            <span id="contact-hero-heading1">${t('contact.hero.heading1')}</span> <span id="contact-hero-heading2" class="text-gradient-gold">${t('contact.hero.headingHighlight')}</span><br/>
            <div class="mt-5 lg:mt-8"/>
            <span id="contact-hero-heading3">${t('contact.hero.heading2')}</span>
          </h1>
          <p id="contact-hero-subtitle" class="text-brand-gray-light text-lg max-w-2xl leading-relaxed text-balance">
            ${t('contact.hero.subtitle')}
          </p>
        </div>
      </div>
    </section>

    <!-- An Thai Distributor Showcase -->
    <section class="relative z-10 bg-brand-dark border-y border-white/5">
      <div class="container-custom py-10">
        <div class="grid lg:grid-cols-[3fr_2fr] items-stretch">
          <div class="an-thai-image-wrapper relative h-[320px] lg:h-auto lg:my-16 overflow-hidden reveal-left rounded-2xl">
            <img id="contact-distributor-image" src="/anthai.jpg" alt="An Thai - Createk Distributor"
                 class="an-thai-hero-image w-full h-full object-cover" />
          </div>
          <div class="an-thai-info-section flex flex-col justify-center py-12 lg:py-16 px-0 lg:pl-12 lg:pr-8 min-w-0 reveal-right">
            <h2 id="contact-distributor-title" class="font-heading text-2xl lg:text-3xl font-bold uppercase text-white leading-relaxed md:leading-tight mb-8">
              ${t('contact.anThai.title')}
            </h2>
            <div class="space-y-5">
              <a id="contact-phone-link" href="tel:0817821821" class="an-thai-phone flex items-center gap-5 group cursor-pointer
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
                  <span id="contact-phone-text" class="text-brand-gold font-heading text-2xl font-bold group-hover:text-white transition-colors">
                    ${t('contact.anThai.phone')}
                  </span>
                </div>
              </a>
              <div class="an-thai-address bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
                <div class="flex items-center gap-5 p-5">
                  <div class="w-14 h-14 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-brand-gray-light text-xs uppercase tracking-wider mb-1">${t('contact.info.viewMap')}</div>
                    <span id="contact-address-text" class="text-white text-base font-medium leading-relaxed">
                      ${t('contact.anThai.address')}
                    </span>
                  </div>
                </div>
                <iframe
                  id="contact-maps-embed"
                  src="https://maps.google.com/maps?ll=20.450371,106.334039&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=3950152260773286403&output=embed"
                  class="w-full h-48 border-t border-white/10"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <a id="contact-email-link" href="mailto:marketing@anthaiautoparts.com"
                 class="an-thai-email flex items-center gap-5 group cursor-pointer
                        bg-white/[0.02] border border-white/10 rounded-2xl p-5
                        hover:bg-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300">
                <div class="w-14 h-14 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0
                            group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-brand-gray-light text-xs uppercase tracking-wider mb-1">Email</div>
                  <span id="contact-email-text" class="text-white text-base font-medium group-hover:text-brand-gold transition-colors break-all">
                    marketing@anthaiautoparts.com
                  </span>
                </div>
              </a>
              <a id="contact-facebook-link" href="https://www.facebook.com/createkvietnam"
                 target="_blank" rel="noopener noreferrer"
                 class="an-thai-facebook flex items-center gap-5 group cursor-pointer
                        bg-white/[0.02] border border-white/10 rounded-2xl p-5
                        hover:bg-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300">
                <div class="w-14 h-14 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0
                            group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-brand-gray-light text-xs uppercase tracking-wider mb-1">Facebook</div>
                  <span id="contact-facebook-text" class="text-white text-base font-medium group-hover:text-brand-gold transition-colors">
                    Createk Vietnam
                  </span>
                </div>
              </a>
              <a id="contact-zalo-link" href="https://zalo.me/2822820424446155302"
                 target="_blank" rel="noopener noreferrer"
                 class="contact-zalo-button btn-primary btn-lg text-sm uppercase tracking-widest w-full justify-center cursor-pointer rounded-2xl">
                ${t('contact.info.contactUs')}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return {
    html,
    async init() {
      initPageAnimations();
      animateImageHover();

      // Form submit animation
      const form = document.getElementById('contact-form');
      const submitBtn = document.getElementById('submit-btn');
      const successMsg = document.getElementById('form-success');

      if (form) {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          submitBtn.disabled = true;
          submitBtn.textContent = t('contact.form.sending');

          // Collect form data
          const formData = new FormData(form);
          const body = {
            name: formData.get('name') || '',
            email: formData.get('email') || '',
            company: formData.get('company') || '',
            phone: formData.get('phone') || '',
            subject: formData.get('subject') || '',
            message: formData.get('message') || '',
          };

          // Submit to WordPress REST API
          const result = await postAPI('/contact', body);

          if (result?.success) {
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
          } else {
            submitBtn.disabled = false;
            submitBtn.textContent = t('contact.form.sendMessage');
          }
        });
      }

      // Overlay CMS settings onto the DOM
      try {
        const settings = await getSettings();
        if (!settings) return;

        const pageSettings = settings.pages?.contact;
        const contact = settings.contact;
        const distributor = settings.distributor;

        // Hero section
        if (pageSettings?.hero) {
          const hero = pageSettings.hero;
          if (hero.image) {
            const heroImg = document.getElementById('contact-hero-image');
            if (heroImg) heroImg.src = hero.image;
          }
          if (hero.heading1) {
            const el = document.getElementById('contact-hero-heading1');
            if (el) el.textContent = hero.heading1;
          }
          if (hero.heading2) {
            const el = document.getElementById('contact-hero-heading2');
            if (el) el.textContent = hero.heading2;
          }
          if (hero.heading3) {
            const el = document.getElementById('contact-hero-heading3');
            if (el) el.textContent = hero.heading3;
          }
          if (hero.subtitle) {
            const el = document.getElementById('contact-hero-subtitle');
            if (el) el.textContent = hero.subtitle;
          }
        }

        // Distributor image
        if (pageSettings?.distributorImage) {
          const distImg = document.getElementById('contact-distributor-image');
          if (distImg) distImg.src = pageSettings.distributorImage;
        }

        // Distributor name/title
        if (distributor?.name) {
          const titleEl = document.getElementById('contact-distributor-title');
          if (titleEl) titleEl.textContent = distributor.name;
        }

        // Distributor phone
        if (distributor?.phone) {
          const phoneLink = document.getElementById('contact-phone-link');
          const phoneText = document.getElementById('contact-phone-text');
          if (phoneLink) phoneLink.href = 'tel:' + distributor.phone.replace(/\s+/g, '');
          if (phoneText) phoneText.textContent = distributor.phone;
        }

        // Distributor address
        if (distributor?.address) {
          const addressText = document.getElementById('contact-address-text');
          if (addressText) addressText.textContent = distributor.address;
        }

        // Contact email
        if (contact?.email) {
          const emailLink = document.getElementById('contact-email-link');
          const emailText = document.getElementById('contact-email-text');
          if (emailLink) emailLink.href = 'mailto:' + contact.email;
          if (emailText) emailText.textContent = contact.email;
        }

        // Contact phone (fallback to distributor phone already handled above)
        if (contact?.phone) {
          const phoneLink = document.getElementById('contact-phone-link');
          const phoneText = document.getElementById('contact-phone-text');
          if (phoneLink) phoneLink.href = 'tel:' + contact.phone.replace(/\s+/g, '');
          if (phoneText) phoneText.textContent = contact.phone;
        }

        // Facebook
        if (contact?.facebook) {
          const fbLink = document.getElementById('contact-facebook-link');
          const fbText = document.getElementById('contact-facebook-text');
          if (fbLink) fbLink.href = contact.facebook;
          if (fbText) {
            // Extract page name from URL or use the URL itself
            try {
              const url = new URL(contact.facebook);
              const pageName = url.pathname.replace(/^\//, '').replace(/\/$/, '');
              if (fbText && pageName) fbText.textContent = pageName;
            } catch (_) {
              // leave fallback text
            }
          }
        }

        // Zalo
        if (contact?.zalo) {
          const zaloLink = document.getElementById('contact-zalo-link');
          if (zaloLink) zaloLink.href = contact.zalo;
        }

        // Maps embed
        if (contact?.mapsEmbed) {
          const iframe = document.getElementById('contact-maps-embed');
          if (iframe) iframe.src = contact.mapsEmbed;
        } else if (contact?.mapsUrl) {
          const iframe = document.getElementById('contact-maps-embed');
          if (iframe) iframe.src = contact.mapsUrl;
        }
      } catch (err) {
        // Settings fetch failed — hardcoded fallbacks remain visible
        console.warn('Failed to load contact settings:', err);
      }
    },
  };
}
