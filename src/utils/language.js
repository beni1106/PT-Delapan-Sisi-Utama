/**
 * language.js
 * UTILS — menyimpan & membaca preferensi bahasa user, broadcast saat berubah.
 */

const STORAGE_KEY = 'dsu_lang';
const DEFAULT_LANG = 'id';

export function getLang() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
}

export function setLang(lang) {
  if (lang !== 'id' && lang !== 'en') return;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.setAttribute('lang', lang);
  window.dispatchEvent(new CustomEvent('dsu:langchange', { detail: lang }));
}

export function toggleLang() {
  setLang(getLang() === 'id' ? 'en' : 'id');
}

export function initLang() {
  document.documentElement.setAttribute('lang', getLang());
}