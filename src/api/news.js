/**
 * News API module
 */

import { fetchAPI } from './client.js';

/**
 * Get paginated news articles
 * @param {number} [page=1]
 * @param {number} [perPage=12]
 * @param {string} [category] - Category slug filter
 * @returns {Promise<Object>} { items, total, pages, page, categories }
 */
export async function getNews(page = 1, perPage = 12, category) {
  const params = { page, per_page: perPage };
  if (category) params.category = category;
  return await fetchAPI('/news', params);
}

/**
 * Get the featured article
 * @returns {Promise<Object|null>}
 */
export async function getFeatured() {
  return await fetchAPI('/news/featured');
}

/**
 * Get a single article by slug
 * @param {string} slug
 * @returns {Promise<Object|null>}
 */
export async function getArticle(slug) {
  return await fetchAPI(`/news/${slug}`);
}
