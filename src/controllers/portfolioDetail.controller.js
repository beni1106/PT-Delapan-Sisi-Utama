/**
 * portfolioDetail.controller.js — CONTROLLER LAYER
 * PERUBAHAN (i18n): initLang() + getLang() dipass ke navbar; listener
 * 'dsu:langchange' me-render ulang halaman + pasang ulang carousel
 * (karena DOM carousel dibuat ulang dari nol saat re-render).
 */

import AOS from 'aos';
import 'aos/dist/aos.css';

import { companyInfo } from '../models/company.model.js';
import { getProjectBySlug } from '../models/portfolio.model.js';

import { renderNavbar } from '../views/components/navbar.view.js';
import { renderFooter } from '../views/components/footer.view.js';
import { renderFloatingWhatsapp, renderProgressBar } from '../views/components/widgets.view.js';

import { renderPortfolioDetailHero, renderPortfolioDetailBody, renderPortfolioNotFound } from '../views/pages/portfolioDetail.view.js';

import { initStickyNavbar, initMobileMenu, initScrollProgress, initMobileNavAccordion, initLangToggle, initDropdownHover } from '../utils/animations.js';
import { initLang, getLang } from '../utils/language.js';

function getSlugFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('slug');
}

let currentProject = null;

function renderPage() {
  const app = document.querySelector('#app');
  if (!app) return;
  document.body.classList.add('home-light');

  const slug = getSlugFromUrl();
  const project = slug ? getProjectBySlug(slug) : null;
  currentProject = project;

  const bodyHtml = project
    ? `${renderPortfolioDetailHero(project)}${renderPortfolioDetailBody(project, { whatsapp: companyInfo.whatsapp, companyInfo })}`
    : renderPortfolioNotFound();

  if (project) {
    document.title = `${project.title} – PT. Delapan Sisi Utama`;
  }

  app.innerHTML = `
    ${renderProgressBar()}
    ${renderNavbar({ activePage: 'portfolio', whatsapp: companyInfo.whatsapp, lang: getLang() })}
    ${bodyHtml}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

function initDetailCarousel() {
  const carousel = document.getElementById('detail-carousel');
  if (!carousel || !currentProject) return;

  const hasPhotos = (currentProject.gallery && currentProject.gallery.length > 0) || currentProject.coverImage;
  if (!hasPhotos) return;

  const photos = currentProject.gallery && currentProject.gallery.length > 0
    ? currentProject.gallery
    : [currentProject.coverImage];
  const labels = currentProject.photoLabels && currentProject.photoLabels.length === photos.length
    ? currentProject.photoLabels
    : photos.map((_, i) => (i === 0 ? 'Tampak Depan' : `Foto ${i + 1}`));

  const total = photos.length;
  if (total <= 1) return;

  let index = 0;
  const slides = carousel.querySelectorAll('.detail-carousel-slide');
  const dots = carousel.querySelectorAll('.detail-carousel-dot');
  const counterEl = document.getElementById('carousel-current');
  const labelEl = document.getElementById('carousel-label');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  function goTo(newIndex) {
    index = (newIndex + total) % total;

    slides.forEach((slide, i) => slide.classList.toggle('detail-carousel-slide--active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('detail-carousel-dot--active', i === index));

    if (counterEl) counterEl.textContent = String(index + 1);
    if (labelEl) labelEl.textContent = labels[index];
  }

  prevBtn?.addEventListener('click', () => goTo(index - 1));
  nextBtn?.addEventListener('click', () => goTo(index + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
}

function bindPageBehavior() {
  initStickyNavbar();
  initMobileNavAccordion();
  initLangToggle();
  initMobileMenu();
  initScrollProgress();
  initDropdownHover();
  initDetailCarousel();
}

export function initPortfolioDetailPage() {
  initLang();
  renderPage();
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });
  bindPageBehavior();

  window.addEventListener('dsu:langchange', () => {
    renderPage();
    bindPageBehavior();
  });
}