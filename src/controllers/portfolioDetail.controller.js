/**
 * portfolioDetail.controller.js
 * CONTROLLER LAYER — Orkestrasi halaman detail proyek portofolio.
 * Membaca query param `?slug=` untuk menentukan proyek mana yang ditampilkan.
 *
 * PERUBAHAN:
 * - companyInfo dipass ke renderPortfolioDetailBody (dibutuhkan untuk
 *   nomor telepon & query lokasi Google Maps di sidebar/section Location).
 * - Tambah initDetailCarousel(): logic navigasi gambar (tombol prev/next,
 *   dots, update counter & label foto), murni DOM manipulation — sesuai
 *   aturan layer Controller.
 */

import AOS from 'aos';
import 'aos/dist/aos.css';

import { companyInfo } from '../models/company.model.js';
import { getProjectBySlug } from '../models/portfolio.model.js';

import { renderNavbar } from '../views/components/navbar.view.js';
import { renderFooter } from '../views/components/footer.view.js';
import { renderFloatingWhatsapp, renderProgressBar } from '../views/components/widgets.view.js';

import { renderPortfolioDetailHero, renderPortfolioDetailBody, renderPortfolioNotFound } from '../views/pages/portfolioDetail.view.js';

import { initStickyNavbar, initMobileMenu, initScrollProgress, initMobileNavAccordion, initLangToggle } from '../utils/animations.js';

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
    ${renderNavbar({ activePage: 'portfolio', whatsapp: companyInfo.whatsapp })}
    ${bodyHtml}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

/** Navigasi carousel gambar: prev/next, klik dot, update counter & label */
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

export function initPortfolioDetailPage() {
  renderPage();
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });
  initStickyNavbar();
  initMobileNavAccordion();
  initLangToggle();
  initMobileMenu();
  initScrollProgress();
  initDetailCarousel();
}