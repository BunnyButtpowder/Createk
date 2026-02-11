import { t } from '../i18n/index.js';

export function renderFooter() {
  const productLinks = [
    t('footer.engineParts'),
    t('footer.electricalParts'),
    t('footer.gearsBearings'),
    t('footer.shockAbsorbers'),
    t('footer.rubberParts'),
    t('footer.frictionMaterials'),
  ];

  const quickLinks = [
    { label: t('footer.home'), path: '#/' },
    { label: t('footer.aboutUs'), path: '#/about' },
    { label: t('footer.productsLink'), path: '#/products' },
    { label: t('footer.news'), path: '#/news' },
    { label: t('footer.contactLink'), path: '#/contact' },
  ];

  return `
    <footer class="bg-brand-dark border-t border-white/5">
      <!-- Main Footer -->
      <div class="container-custom py-16 lg:py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          <!-- Brand -->
          <div class="lg:col-span-1">
            <a href="#/" class="flex justify-center mb-6">
              <img src="/logo-text.png" alt="Createk" class="h-20 w-auto" />
            </a>
            <p class="text-brand-gray-light text-sm leading-relaxed mb-6">
              ${t('footer.brandDesc')}
            </p>
            <div class="flex items-center gap-4">
              <a href="#" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                                hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black
                                transition-all duration-300 text-white">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                                hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black
                                transition-all duration-300 text-white">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                                hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black
                                transition-all duration-300 text-white">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.771-.773 1.771-1.729v-20.542c0-.955-.793-1.729-1.771-1.729z"/></svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-heading text-lg uppercase tracking-wider mb-6 text-white">${t('footer.quickLinks')}</h4>
            <ul class="space-y-3">
              ${quickLinks.map(link => `
                <li>
                  <a href="${link.path}" class="text-brand-gray-light text-sm hover:text-brand-gold
                                                transition-colors duration-300 flex items-center gap-2">
                    <svg class="w-3 h-3 text-brand-gold/50" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    ${link.label}
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Products -->
          <div>
            <h4 class="font-heading text-lg uppercase tracking-wider mb-6 text-white">${t('footer.products')}</h4>
            <ul class="space-y-3">
              ${productLinks.map(name => `
                <li>
                  <a href="#/products" class="text-brand-gray-light text-sm hover:text-brand-gold
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
            <h4 class="font-heading text-lg uppercase tracking-wider mb-6 text-white">${t('footer.contactUs')}</h4>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-brand-gold mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-brand-gray-light text-sm">123 Industrial Zone,<br/>Hanoi, Vietnam 10000</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-brand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-brand-gray-light text-sm">+84 90 123 4567</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-brand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-brand-gray-light text-sm">info@createk.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/5">
        <div class="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-brand-gray-mid text-xs">${t('footer.copyright')}</p>
          <div class="flex items-center gap-6">
            <a href="#" class="text-brand-gray-mid text-xs hover:text-brand-gold transition-colors">${t('footer.privacyPolicy')}</a>
            <a href="#" class="text-brand-gray-mid text-xs hover:text-brand-gold transition-colors">${t('footer.termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
