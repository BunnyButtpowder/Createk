/**
 * Loading state components — skeleton placeholders and error states
 */

/**
 * Render a skeleton loader placeholder
 * @param {'product-grid'|'article-grid'|'hero'|'detail'|'text'} type
 * @returns {string} HTML
 */
export function renderSkeleton(type) {
  const pulse = 'animate-pulse bg-brand-gray-dark/30 rounded';

  switch (type) {
    case 'product-grid':
      return `
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          ${Array(8).fill(`
            <div class="card p-0 overflow-hidden">
              <div class="${pulse} h-48 w-full"></div>
              <div class="p-4 space-y-2">
                <div class="${pulse} h-4 w-3/4"></div>
                <div class="${pulse} h-3 w-1/2"></div>
              </div>
            </div>
          `).join('')}
        </div>
      `;

    case 'article-grid':
      return `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${Array(6).fill(`
            <div class="card p-0 overflow-hidden">
              <div class="${pulse} h-48 w-full"></div>
              <div class="p-4 space-y-2">
                <div class="${pulse} h-3 w-1/4"></div>
                <div class="${pulse} h-5 w-full"></div>
                <div class="${pulse} h-3 w-full"></div>
                <div class="${pulse} h-3 w-2/3"></div>
              </div>
            </div>
          `).join('')}
        </div>
      `;

    case 'hero':
      return `
        <div class="py-20 text-center space-y-4">
          <div class="${pulse} h-6 w-32 mx-auto"></div>
          <div class="${pulse} h-10 w-2/3 mx-auto"></div>
          <div class="${pulse} h-4 w-1/2 mx-auto"></div>
        </div>
      `;

    case 'detail':
      return `
        <div class="max-w-4xl mx-auto py-12 space-y-6">
          <div class="${pulse} h-8 w-3/4"></div>
          <div class="${pulse} h-64 w-full rounded-lg"></div>
          <div class="space-y-3">
            <div class="${pulse} h-4 w-full"></div>
            <div class="${pulse} h-4 w-full"></div>
            <div class="${pulse} h-4 w-5/6"></div>
            <div class="${pulse} h-4 w-4/5"></div>
          </div>
        </div>
      `;

    case 'text':
      return `
        <div class="space-y-3">
          <div class="${pulse} h-4 w-full"></div>
          <div class="${pulse} h-4 w-full"></div>
          <div class="${pulse} h-4 w-3/4"></div>
        </div>
      `;

    default:
      return `<div class="${pulse} h-32 w-full"></div>`;
  }
}

/**
 * Render an error state with retry option
 * @param {string} message
 * @param {Function} [onRetry] - Retry callback
 * @returns {string} HTML
 */
export function renderError(message) {
  return `
    <div class="text-center py-16">
      <div class="text-brand-gray-light text-lg mb-4">${message || 'Something went wrong. Please try again.'}</div>
      <button class="btn-primary" onclick="window.location.reload()">Retry</button>
    </div>
  `;
}
