import { t, getLang } from '../i18n/index.js';

export function renderHeader() {
  const lang = getLang();

  const productSubLinks = [
    { label: t('header.subEngine'), path: '/products' },
    { label: t('header.subChassis'), path: '/products' },
    { label: t('header.subBraking'), path: '/products' },
    { label: t('header.subCabin'), path: '/products' },
  ];

  const navLinks = [
    { label: t('header.about'), path: '/about' },
    { label: t('header.products'), path: '/products', subLinks: productSubLinks },
    { label: t('header.news'), path: '/news' },
    { label: t('header.contact'), path: '/contact' },
  ];

  const langToggle = `
    <div class="flex items-center rounded-full border border-white/20 overflow-hidden">
      <button data-lang-switch="en"
              class="px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer
                     ${lang === 'en' ? 'bg-brand-gold text-brand-black' : 'text-white/70 hover:text-white'}">
        EN
      </button>
      <button data-lang-switch="vi"
              class="px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer
                     ${lang === 'vi' ? 'bg-brand-gold text-brand-black' : 'text-white/70 hover:text-white'}">
        VI
      </button>
    </div>
  `;

  function renderDesktopLink(link) {
    if (link.subLinks) {
      return `
        <div class="products-nav-dropdown relative group">
          <a href="#${link.path}" data-nav-link
             class="text-white px-4 py-2 text-sm font-medium uppercase tracking-widest
                    hover:text-brand-gold transition-colors duration-300 relative flex items-center gap-1.5 cursor-pointer">
            ${link.label}
            <svg class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-gold
                         transition-all duration-300 group-hover:w-full"></span>
          </a>
          <div class="absolute top-full left-1/2 -translate-x-1/2 pt-3
                      opacity-0 invisible translate-y-2
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
            <div class="bg-brand-dark/95 backdrop-blur-md border border-white/10 rounded-xl
                        shadow-2xl shadow-black/50 py-2 min-w-[280px]">
              ${link.subLinks.map(sub => `
                <a href="#${sub.path}" data-nav-link
                   class="dropdown-sublink flex items-center gap-3 px-5 py-3 text-sm text-brand-gray-light
                          hover:text-brand-gold hover:bg-white/5 transition-all duration-200 cursor-pointer">
                  <span class="w-1.5 h-1.5 rounded-full bg-brand-gold/40 shrink-0"></span>
                  ${sub.label}
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }
    return `
      <a href="#${link.path}" data-nav-link
         class="text-white px-4 py-2 text-sm font-medium uppercase tracking-widest
                hover:text-brand-gold transition-colors duration-300 relative group cursor-pointer">
        ${link.label}
        <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-gold
                     transition-all duration-300 group-hover:w-full"></span>
      </a>
    `;
  }

  function renderMobileLink(link) {
    if (link.subLinks) {
      return `
        <div class="products-mobile-dropdown flex flex-col items-center">
          <div class="flex items-center gap-3">
            <a href="#${link.path}" data-nav-link data-mobile-link
               class="text-white font-heading text-3xl uppercase tracking-widest
                      hover:text-brand-gold transition-colors duration-300">
              ${link.label}
            </a>
            <button id="mobile-products-toggle"
                    class="text-white/60 hover:text-brand-gold transition-colors p-1 cursor-pointer"
                    aria-label="Toggle product submenu">
              <svg class="mobile-products-chevron w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
          <div id="mobile-products-submenu" class="flex-col items-center gap-3 mt-4 hidden">
            ${link.subLinks.map(sub => `
              <a href="#${sub.path}" data-nav-link data-mobile-link
                 class="mobile-product-sublink text-brand-gray-light text-lg
                        hover:text-brand-gold transition-colors duration-300 cursor-pointer">
                ${sub.label}
              </a>
            `).join('')}
          </div>
        </div>
      `;
    }
    return `
      <a href="#${link.path}" data-nav-link data-mobile-link
         class="text-white font-heading text-3xl uppercase tracking-widest
                hover:text-brand-gold transition-colors duration-300">
        ${link.label}
      </a>
    `;
  }

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
            ${navLinks.map(renderDesktopLink).join('')}
            <div class="ml-3">
              ${langToggle}
            </div>
          </div>

          <!-- Mobile Hamburger -->
          <button id="hamburger-btn" class="lg:hidden relative z-50 p-2 -mr-2 cursor-pointer" aria-label="Toggle menu">
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
          ${navLinks.map(renderMobileLink).join('')}
          <div class="mt-2">
            ${langToggle}
          </div>
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
    const submenu = document.getElementById('mobile-products-submenu');
    const chevron = document.querySelector('.mobile-products-chevron');
    if (submenu) submenu.classList.add('hidden');
    if (chevron) chevron.classList.remove('rotate-180');
  }

  // Mobile products submenu toggle
  const mobileProductsToggle = document.getElementById('mobile-products-toggle');
  const mobileProductsSubmenu = document.getElementById('mobile-products-submenu');
  const mobileProductsChevron = document.querySelector('.mobile-products-chevron');

  if (mobileProductsToggle && mobileProductsSubmenu) {
    mobileProductsToggle.addEventListener('click', () => {
      const isHidden = mobileProductsSubmenu.classList.contains('hidden');
      if (isHidden) {
        mobileProductsSubmenu.classList.remove('hidden');
        mobileProductsSubmenu.classList.add('flex');
        mobileProductsChevron?.classList.add('rotate-180');
      } else {
        mobileProductsSubmenu.classList.add('hidden');
        mobileProductsSubmenu.classList.remove('flex');
        mobileProductsChevron?.classList.remove('rotate-180');
      }
    });
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
