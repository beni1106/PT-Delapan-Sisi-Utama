/**
 * blogDetail.controller.js — CONTROLLER LAYER
 * PERUBAHAN (i18n): initLang() + getLang() dipass ke navbar; document.title
 * memakai judul sesuai bahasa aktif (pick); listener 'dsu:langchange'
 * me-render ulang halaman.
 */

import AOS from 'aos';
import 'aos/dist/aos.css';

import { companyInfo } from '../models/company.model.js';
import { getPostById, formatDateID } from '../models/blog.model.js';

import { renderNavbar } from '../views/components/navbar.view.js';
import { renderFooter } from '../views/components/footer.view.js';
import { renderFloatingWhatsapp, renderProgressBar } from '../views/components/widgets.view.js';

import { renderBlogDetailHero, renderBlogDetailBody, renderBlogNotFound } from '../views/pages/blogDetail.view.js';

import { initStickyNavbar, initMobileMenu, initScrollProgress, initMobileNavAccordion, initLangToggle, initDropdownHover } from '../utils/animations.js';
import { initLang, getLang } from '../utils/language.js';
import { pick } from '../models/i18n.model.js';

function getPostIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function renderPage() {
  const app = document.querySelector('#app');
  if (!app) return;

  const postId = getPostIdFromUrl();
  const post = postId ? getPostById(postId) : null;

  const bodyHtml = post
    ? `${renderBlogDetailHero(post, { formatDateID })}${renderBlogDetailBody(post)}`
    : renderBlogNotFound();

  if (post) {
    document.title = `${pick(post.title)} – PT. Delapan Sisi Utama`;
  }

  app.innerHTML = `
    ${renderProgressBar()}
    ${renderNavbar({ activePage: 'blog', whatsapp: companyInfo.whatsapp, lang: getLang() })}
    ${bodyHtml}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

function bindPageBehavior() {
  initStickyNavbar();
  initMobileNavAccordion();
  initLangToggle();
  initMobileMenu();
  initScrollProgress();
  initDropdownHover();
}

export function initBlogDetailPage() {
  initLang();
  renderPage();
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });
  bindPageBehavior();

  window.addEventListener('dsu:langchange', () => {
    renderPage();
    bindPageBehavior();
  });
}