const routes = {};
let currentCleanup = null;

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function navigate(path) {
  window.history.pushState(null, '', path);
  handleRoute();
}

export function getCurrentRoute() {
  const path = window.location.pathname || '/';
  return path.split('?')[0];
}

export function getRouteParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
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

  // Exact match first, then try parent path (e.g. /news/5 → /news)
  let handler = routes[path];
  if (!handler) {
    const parentPath = path.replace(/\/[^/]+$/, '') || '/';
    handler = routes[parentPath];
  }
  handler = handler || routes['/'];
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

    // Update active nav (prefix match so /news/5 highlights /news)
    document.querySelectorAll('[data-nav-link]').forEach(link => {
      const linkPath = link.getAttribute('href').split('?')[0];
      const isActive = linkPath === path || (linkPath !== '/' && path.startsWith(linkPath + '/'));
      if (isActive) {
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
  // Handle browser back/forward
  window.addEventListener('popstate', handleRoute);

  // Intercept internal link clicks for SPA navigation
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    // Skip external links, new-tab links, and non-path links
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') ||
        link.target === '_blank' || e.ctrlKey || e.metaKey || e.shiftKey) {
      return;
    }

    // Only intercept internal paths starting with /
    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
    }
  });

  handleRoute();
}
