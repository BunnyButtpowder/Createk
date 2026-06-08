import { t } from '../i18n/index.js';
import { getSettings } from '../api/settings.js';

export function renderFooter() {
  const productLinks = [
    t('footer.engineParts'),
    t('footer.chassisSystem'),
    t('footer.breakingSystem'),
    t('footer.cabinSystem'),
  ];

  const quickLinks = [
    { label: t('footer.home'), path: '/' },
    { label: t('footer.aboutUs'), path: '/about' },
    { label: t('footer.productsLink'), path: '/products' },
    { label: t('footer.news'), path: '/news' },
    { label: t('footer.contactLink'), path: '/contact' },
  ];

  return `
    <footer class="bg-brand-dark border-t border-white/5">
      <!-- Main Footer -->
      <div class="container-custom py-16 lg:py-20">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">

          <!-- Brand -->
          <div class="flex flex-col items-center md:items-start">
            <a href="/" class="footer-logo-link mb-6">
              <img src="/logo-vertical.png" alt="Createk" class="h-full w-44 sm:w-60" />
            </a>
          </div>

          <!-- Products -->
          <div>
            <h4 class="font-heading text-xl uppercase tracking-wider mb-6 text-white">${t('footer.products')}</h4>
            <ul class="space-y-3">
              ${productLinks.map(name => `
                <li>
                  <a href="/products" class="text-brand-gray-light text-base hover:text-brand-gold
                                              transition-colors duration-300 flex items-center gap-2">
                    <svg class="w-3 h-3 text-brand-gold/50" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    ${name}
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="font-heading text-xl uppercase tracking-wider mb-6 text-white">${t('footer.contactUs')}</h4>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="text-brand-gray-light text-base font-semibold">${t('contact.anThai.title')}</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-brand-gold mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span id="footer-address" class="text-brand-gray-light text-base">${t('contact.anThai.address')}</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-brand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span id="footer-phone" class="text-brand-gray-light text-base">${t('contact.anThai.phone')}</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-brand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a id="footer-email" href="mailto:marketing@anthaiautoparts.com" class="text-brand-gray-light text-base hover:text-brand-gold transition-colors duration-300">marketing@anthaiautoparts.com</a>
              </li>
              <div class="flex items-center gap-4">
                <a id="footer-facebook" href="https://www.facebook.com/createkvietnam" target="_blank" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                                hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black
                                transition-all duration-300 text-white">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/5">
        <div class="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-brand-gray-mid text-xs">${t('footer.copyright')}</p>
          <div class="flex items-center gap-6">
            <a href="/privacy" class="text-brand-gray-mid text-xs hover:text-brand-gold transition-colors">${t('footer.privacyPolicy')}</a>
            <a href="/terms" class="text-brand-gray-mid text-xs hover:text-brand-gold transition-colors">${t('footer.termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Scroll to Top Button -->
    <button id="scroll-to-top-button"
            class="scroll-to-top-button cursor-pointer fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full
                   bg-brand-gold text-brand-black shadow-lg
                   flex items-center justify-center
                   hover:bg-brand-gold-light transition-all duration-300
                   opacity-0 pointer-events-none translate-y-4"
            aria-label="Scroll to top">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
      </svg>
    </button>
  `;
}

export async function initFooter() {
  const settings = await getSettings();
  if (!settings) return;

  const { contact, distributor } = settings;

  // Update distributor address
  if (distributor?.address) {
    const addressEl = document.getElementById('footer-address');
    if (addressEl) addressEl.textContent = distributor.address;
  }

  // Update phone (prefer distributor phone, fall back to contact phone)
  const phone = distributor?.phone || contact?.phone;
  if (phone) {
    const phoneEl = document.getElementById('footer-phone');
    if (phoneEl) phoneEl.textContent = phone;
  }

  // Update email
  if (contact?.email) {
    const emailEl = document.getElementById('footer-email');
    if (emailEl) {
      emailEl.textContent = contact.email;
      emailEl.href = `mailto:${contact.email}`;
    }
  }

  // Update facebook link
  if (contact?.facebook) {
    const fbEl = document.getElementById('footer-facebook');
    if (fbEl) fbEl.href = contact.facebook;
  }
}
