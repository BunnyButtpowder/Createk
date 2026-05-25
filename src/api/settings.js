/**
 * Settings API module
 *
 * Fetches site-wide settings (company info, contact, page content, legal).
 * Cached aggressively since settings rarely change.
 */

import { fetchAPI, SETTINGS_TTL } from './client.js';

// Local reference for fast access after prefetch
let cachedSettings = null;

/**
 * Get all site settings
 * @param {boolean} [forceRefresh=false]
 * @returns {Promise<Object|null>}
 */
export async function getSettings(forceRefresh = false) {
  if (cachedSettings && !forceRefresh) {
    return cachedSettings;
  }

  const data = await fetchAPI('/settings', {}, { ttl: SETTINGS_TTL, skipCache: forceRefresh });
  if (data) {
    cachedSettings = data;
  }
  return data;
}

/**
 * Clear the local settings cache (called on language change)
 */
export function clearSettingsCache() {
  cachedSettings = null;
}

/**
 * Get a specific page's settings
 * @param {string} page - Page name (home, about, products, news, contact)
 * @returns {Promise<Object|null>}
 */
export async function getPageSettings(page) {
  const settings = await getSettings();
  return settings?.pages?.[page] || null;
}

/**
 * Get company info
 * @returns {Promise<Object|null>}
 */
export async function getCompanyInfo() {
  const settings = await getSettings();
  return settings?.company || null;
}

/**
 * Get contact info
 * @returns {Promise<Object|null>}
 */
export async function getContactInfo() {
  const settings = await getSettings();
  return settings?.contact || null;
}

/**
 * Get legal page content
 * @param {string} page - 'privacy' or 'terms'
 * @returns {Promise<string>}
 */
export async function getLegalContent(page) {
  const settings = await getSettings();
  return settings?.legal?.[page] || '';
}
