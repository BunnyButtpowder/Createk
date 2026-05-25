/**
 * API Client for WordPress REST API
 *
 * Central fetch wrapper with in-memory caching and automatic language handling.
 */

import { getLang } from '../i18n/index.js';

const API_BASE = import.meta.env.VITE_API_BASE || '/cms/wp-json/createk/v1';

// In-memory cache: Map<string, { data, timestamp }>
const cache = new Map();
const DEFAULT_TTL = 5 * 60 * 1000;     // 5 minutes
const SETTINGS_TTL = 30 * 60 * 1000;   // 30 minutes

/**
 * Fetch from the API with automatic language and caching
 *
 * @param {string} endpoint - API endpoint path (e.g., '/products')
 * @param {Object} params - Query parameters
 * @param {Object} options - { ttl, skipCache }
 * @returns {Promise<Object|null>} Parsed JSON or null on error
 */
export async function fetchAPI(endpoint, params = {}, options = {}) {
  const lang = getLang();
  const allParams = { lang, ...params };

  // Build URL
  const url = new URL(API_BASE + endpoint, window.location.origin);
  Object.entries(allParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value);
    }
  });

  const cacheKey = url.toString();

  // Check cache
  if (!options.skipCache) {
    const cached = cache.get(cacheKey);
    const ttl = options.ttl || DEFAULT_TTL;
    if (cached && (Date.now() - cached.timestamp) < ttl) {
      return cached.data;
    }
  }

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      console.error(`API error: ${response.status} ${response.statusText} for ${endpoint}`);
      return null;
    }

    const data = await response.json();

    // Store in cache
    cache.set(cacheKey, { data, timestamp: Date.now() });

    return data;
  } catch (error) {
    console.error(`API fetch failed for ${endpoint}:`, error);

    // Return stale cache if available
    const stale = cache.get(cacheKey);
    if (stale) {
      return stale.data;
    }

    return null;
  }
}

/**
 * POST to the API
 *
 * @param {string} endpoint - API endpoint path
 * @param {Object} body - Request body
 * @returns {Promise<Object|null>}
 */
export async function postAPI(endpoint, body = {}) {
  const url = API_BASE + endpoint;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    return await response.json();
  } catch (error) {
    console.error(`API POST failed for ${endpoint}:`, error);
    return null;
  }
}

/**
 * Clear all cached data (call on language change)
 */
export function clearCache() {
  cache.clear();
}

export { API_BASE, SETTINGS_TTL };
