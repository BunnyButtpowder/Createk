/**
 * API module — main entry point
 *
 * Re-exports all API modules and provides initialization.
 */

export { fetchAPI, postAPI, clearCache } from './client.js';
export { getProducts, getProduct, getProductSystems, searchProducts } from './products.js';
export { getNews, getFeatured, getArticle } from './news.js';
export { getSettings, getPageSettings, getCompanyInfo, getContactInfo, getLegalContent, clearSettingsCache } from './settings.js';

import { clearCache } from './client.js';
import { clearSettingsCache, getSettings } from './settings.js';

/**
 * Initialize the API layer — prefetch site settings
 */
export async function initAPI() {
  await getSettings();
}

/**
 * Clear all caches (call on language change)
 */
export function resetAPI() {
  clearCache();
  clearSettingsCache();
}
