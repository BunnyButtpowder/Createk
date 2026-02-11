import { t, getLang } from '../i18n/index.js';

export function renderHeader() {
  const lang = getLang();
  const navLinks = [
    { label: t('header.home'), path: '/' },
    { label: t('header.about'), path: '/about' },
    { label: t('header.products'), path: '/products' },
    { label: t('header.news'), path: '/news' },
    { label: t('header.contact'), path: '/contact' },
  ];

  const langToggle = `
    <div class="flex items-center rounded-full border border-white/20 overflow-hidden">
      <button data-lang-switch="en"
              class="px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-all duration-200
                     ${lang === 'en' ? 'bg-brand-gold text-brand-black' : 'text-white/70 hover:text-white'}">
        EN
      </button>
      <button data-lang-switch="vi"
              class="px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-all duration-200
                     ${lang === 'vi' ? 'bg-brand-gold text-brand-black' : 'text-white/70 hover:text-white'}">
        VI
      </button>
    </div>
  `;

  return `
    <header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div class="container-custom">
        <nav class="flex items-center justify-between h-20 lg:h-24">
          <!-- Logo -->
          <a href="#/" class="relative z-50 flex items-center gap-3 group">
            <img src="/logo.png" alt="Createk" class="h-16 lg:h-20 transition-transform duration-300 group-hover:scale-105" />
          </a>

          <!-- Desktop Nav -->
          <div class="hidden lg:flex items-center gap-1">
            ${navLinks.map(link => `
              <a href="#${link.path}" data-nav-link
                 class="text-white px-4 py-2 text-sm font-medium uppercase tracking-widest
                        hover:text-brand-gold transition-colors duration-300 relative group">
                ${link.label}
                <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-gold
                             transition-all duration-300 group-hover:w-full"></span>
              </a>
            `).join('')}
            <div class="ml-3">
              ${langToggle}
            </div>
            <a href="#/contact" class="btn-primary ml-4 text-xs tracking-widest uppercase">
              ${t('header.getQuote')}
            </a>
          </div>

          <!-- Mobile Hamburger -->
          <button id="hamburger-btn" class="lg:hidden relative z-50 p-2 -mr-2" aria-label="Toggle menu">
            <div class="flex flex-col gap-1.5">
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
            </div>
          </button>
        </nav>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="fixed inset-0 bg-brand-black/98 backdrop-blur-lg z-40
                                     flex items-center justify-center
                                     opacity-0 pointer-events-none transition-all duration-500">
        <div class="flex flex-col items-center gap-6">
          ${navLinks.map(link => `
            <a href="#${link.path}" data-nav-link data-mobile-link
               class="text-white font-heading text-3xl uppercase tracking-widest
                      hover:text-brand-gold transition-colors duration-300">
              ${link.label}
            </a>
          `).join('')}
          <div class="mt-2">
            ${langToggle}
          </div>
          <a href="#/contact" data-mobile-link class="btn-primary btn-lg mt-4 text-sm tracking-widest uppercase">
            ${t('header.getQuote')}
          </a>
        </div>
      </div>
    </header>
  `;
}

export function initHeader() {
  const header = document.getElementById('site-header');
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  let isOpen = false;

  // Scroll-based header background
  const updateHeader = () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-brand-black/95', 'backdrop-blur-md', 'shadow-lg', 'shadow-black/20');
    } else {
      header.classList.remove('bg-brand-black/95', 'backdrop-blur-md', 'shadow-lg', 'shadow-black/20');
    }
  };

  window.addEventListener('scroll', updateHeader);
  updateHeader();

  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
      hamburger.querySelector('div').classList.add('hamburger-active');
      mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100');
      document.body.style.overflow = 'hidden';
    } else {
      closeMobileMenu();
    }
  });

  function closeMobileMenu() {
    isOpen = false;
    hamburger.querySelector('div').classList.remove('hamburger-active');
    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    mobileMenu.classList.remove('opacity-100');
    document.body.style.overflow = '';
  }

  // Close mobile menu on link click
  document.querySelectorAll('[data-mobile-link]').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Language switch
  document.querySelectorAll('[data-lang-switch]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.langSwitch;
      window.dispatchEvent(new CustomEvent('lang-change', { detail: { lang } }));
    });
  });

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', updateHeader);
  };
}
