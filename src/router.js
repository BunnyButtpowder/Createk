const routes = {};
let currentCleanup = null;

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function navigate(path) {
  window.location.hash = path;
}

export function getCurrentRoute() {
  const hash = window.location.hash.slice(1) || '/';
  return hash;
}

export async function handleRoute() {
  const path = getCurrentRoute();
  const content = document.getElementById('page-content');
  if (!content) return;

  // Run cleanup from previous page
  if (currentCleanup && typeof currentCleanup === 'function') {
    currentCleanup();
    currentCleanup = null;
  }

  const handler = routes[path] || routes['/'];
  if (handler) {
    const result = handler();
    content.innerHTML = result.html || '';

    // Scroll to top
    window.scrollTo(0, 0);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }

    // Run page init (animations etc.)
    if (result.init) {
      currentCleanup = result.init();
    }

    // Update active nav
    document.querySelectorAll('[data-nav-link]').forEach(link => {
      const linkPath = link.getAttribute('href').slice(1);
      if (linkPath === path) {
        link.classList.add('text-brand-gold');
        link.classList.remove('text-white');
      } else {
        link.classList.remove('text-brand-gold');
        link.classList.add('text-white');
      }
    });
  }
}

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  // Set default hash if none
  if (!window.location.hash) {
    window.location.hash = '/';
  }
  handleRoute();
}
