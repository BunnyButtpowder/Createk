import './style.css';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { registerRoute, initRouter } from './router.js';
import { renderHeader, initHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { homePage } from './pages/home.js';
import { aboutPage } from './pages/about.js';
import { productsPage } from './pages/products.js';
import { newsPage } from './pages/news.js';
import { contactPage } from './pages/contact.js';

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

// Build app shell
const app = document.getElementById('app');
app.innerHTML = `
  ${renderHeader()}
  <main id="page-content"></main>
  ${renderFooter()}
`;

// Initialize header interactions
initHeader();

// Register routes
registerRoute('/', homePage);
registerRoute('/about', aboutPage);
registerRoute('/products', productsPage);
registerRoute('/news', newsPage);
registerRoute('/contact', contactPage);

// Start router
initRouter();
