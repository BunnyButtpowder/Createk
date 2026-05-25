/**
 * Products API module
 */

import { fetchAPI } from './client.js';

/**
 * Get all products grouped by system
 * @returns {Promise<Object>} { systems: [...] }
 */
export async function getProducts() {
  return await fetchAPI('/products');
}

/**
 * Get a single product by slug
 * @param {string} slug - Product slug
 * @returns {Promise<Object|null>}
 */
export async function getProduct(slug) {
  return await fetchAPI(`/products/${slug}`);
}

/**
 * Get product system taxonomy terms
 * @returns {Promise<Object>} { systems: [...] }
 */
export async function getProductSystems() {
  return await fetchAPI('/products/systems');
}

/**
 * Search products
 * @param {string} query - Search term
 * @param {string} [system] - Optional system slug filter
 * @returns {Promise<Object>} { products: [...], total }
 */
export async function searchProducts(query, system) {
  const params = { q: query };
  if (system) params.system = system;
  return await fetchAPI('/products/search', params, { skipCache: true });
}
