import './style.css';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { registerRoute, initRouter, handleRoute } from './router.js';
import { renderHeader, initHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { homePage } from './pages/home.js';
import { aboutPage } from './pages/about.js';
import { productsPage } from './pages/products.js';
import { newsPage } from './pages/news.js';
import { newsDetailPage } from './pages/news-detail.js';
import { contactPage } from './pages/contact.js';
import { privacyPage } from './pages/privacy.js';
import { termsPage } from './pages/terms.js';
import { initI18n, setLang } from './i18n/index.js';
import { getCurrentRoute } from './router.js';

// Initialize i18n before anything renders
initI18n();

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

// Store globally for router access
window.__lenis = lenis;

// Connect Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// App shell rendering
const app = document.getElementById('app');
let headerCleanup = null;

function renderAppShell() {
  // Cleanup previous header scroll listener
  if (headerCleanup && typeof headerCleanup === 'function') {
    headerCleanup();
    headerCleanup = null;
  }

  app.innerHTML = `
    ${renderHeader()}
    <main id="page-content"></main>
    ${renderFooter()}
  `;

  headerCleanup = initHeader();
}

// Initial render
renderAppShell();

// Scroll-to-top button
function initScrollToTop() {
  const btn = document.getElementById('scroll-to-top-button');
  if (!btn) return;

  lenis.on('scroll', ({ scroll }) => {
    if (scroll > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    }
  });

  btn.addEventListener('click', () => {
    lenis.scrollTo(0, { duration: 1.2 });
  });
}
initScrollToTop();

// Register routes
registerRoute('/', homePage);
registerRoute('/about', aboutPage);
registerRoute('/products', productsPage);
registerRoute('/news', () => {
  const route = getCurrentRoute();
  return route.startsWith('/news/') ? newsDetailPage() : newsPage();
});
registerRoute('/contact', contactPage);
registerRoute('/privacy', privacyPage);
registerRoute('/terms', termsPage);

// Start router
initRouter();

// Language change handler
window.addEventListener('lang-change', (e) => {
  const { lang } = e.detail;
  setLang(lang);
  renderAppShell();
  initScrollToTop();
  handleRoute();
});
