import en from './en.js';
import vi from './vi.js';

const dictionaries = { en, vi };
const STORAGE_KEY = 'createk-lang';
const DEFAULT_LANG = 'vi';

let currentLang = DEFAULT_LANG;

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  if (lang !== 'en' && lang !== 'vi') return;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
}

export function t(key) {
  const dict = dictionaries[currentLang] || dictionaries[DEFAULT_LANG];
  const parts = key.split('.');
  let value = dict;
  for (const part of parts) {
    if (value == null) return key;
    value = value[part];
  }
  return value != null ? value : key;
}

export function initI18n() {
  const stored = localStorage.getItem(STORAGE_KEY);
  currentLang = (stored === 'en' || stored === 'vi') ? stored : DEFAULT_LANG;
  document.documentElement.lang = currentLang;
}
