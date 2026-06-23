/**
 * blogDetail.controller.js
 * CONTROLLER LAYER — Orkestrasi halaman detail artikel blog.
 * Membaca query param `?id=` untuk menentukan artikel mana yang ditampilkan.
 */

import AOS from 'aos';
import 'aos/dist/aos.css';

import { companyInfo } from '../models/company.model.js';
import { getPostById, formatDateID } from '../models/blog.model.js';

import { renderNavbar } from '../views/components/navbar.view.js';
import { renderFooter } from '../views/components/footer.view.js';
import { renderFloatingWhatsapp, renderProgressBar } from '../views/components/widgets.view.js';

import { renderBlogDetailHero, renderBlogDetailBody, renderBlogNotFound } from '../views/pages/blogDetail.view.js';

import { initStickyNavbar, initMobileMenu, initScrollProgress, initMobileNavAccordion, initLangToggle } from '../utils/animations.js';

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
    document.title = `${post.title} – PT. Delapan Sisi Utama`;
  }

  app.innerHTML = `
    ${renderProgressBar()}
    ${renderNavbar({ activePage: 'blog', whatsapp: companyInfo.whatsapp })}
    ${bodyHtml}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

export function initBlogDetailPage() {
  renderPage();
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });
  initStickyNavbar();
  initMobileNavAccordion();
  initLangToggle();
  initMobileMenu();
  initScrollProgress();
}