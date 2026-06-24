/**
 * blog.controller.js — CONTROLLER LAYER
 * PERUBAHAN (i18n): initLang() + getLang() dipass ke navbar; listener
 * 'dsu:langchange' me-render ulang seluruh halaman saat bahasa diganti.
 */

import AOS from 'aos';
import 'aos/dist/aos.css';

import { companyInfo } from '../models/company.model.js';
import { blogPosts, formatDateID } from '../models/blog.model.js';

import { renderNavbar } from '../views/components/navbar.view.js';
import { renderFooter } from '../views/components/footer.view.js';
import { renderFloatingWhatsapp, renderProgressBar } from '../views/components/widgets.view.js';

import { renderBlogHero, renderBlogGrid } from '../views/pages/blog.view.js';

import { initStickyNavbar, initMobileMenu, initScrollProgress, initMobileNavAccordion, initLangToggle, initDropdownHover } from '../utils/animations.js';
import { initLang, getLang } from '../utils/language.js';

function renderPage() {
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    ${renderProgressBar()}
    ${renderNavbar({ activePage: 'blog', whatsapp: companyInfo.whatsapp, lang: getLang() })}
    ${renderBlogHero()}
    ${renderBlogGrid(blogPosts, { formatDateID })}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

function bindPageBehavior() {
  initStickyNavbar();
  initMobileMenu();
  initMobileNavAccordion();
  initLangToggle();
  initScrollProgress();
  initDropdownHover();
}

export function initBlogPage() {
  initLang();
  renderPage();
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });
  bindPageBehavior();

  window.addEventListener('dsu:langchange', () => {
    renderPage();
    bindPageBehavior();
  });
}