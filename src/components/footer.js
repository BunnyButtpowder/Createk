import { t } from '../i18n/index.js';

export function renderFooter() {
  const productLinks = [
    t('footer.engineParts'),
    t('footer.chassisSystem'),
    t('footer.breakingSystem'),
    t('footer.cabinSystem'),
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
            
            <div class="flex items-center gap-4">
              <a href="https://www.facebook.com/createkvietnam" target="_blank" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                                hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black
                                transition-all duration-300 text-white">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
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
                <span class="text-brand-gray-light text-sm font-semibold">An Thái - Đơn vị phân phối độc quyền sản phẩm Createk tại Việt Nam</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-brand-gold mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-brand-gray-light text-sm">Số 288 Trần Thái Tông, Phường Thái Bình, tỉnh Hưng Yên</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-brand-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-brand-gray-light text-sm">0817.821.821</span>
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
