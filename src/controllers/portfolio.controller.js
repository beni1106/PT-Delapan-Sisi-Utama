/**
 * portfolio.controller.js
 * CONTROLLER LAYER — Orkestrasi halaman Portfolio.
 *
 * PERUBAHAN:
 * - document.body.classList.add('home-light') tetap ada — skema warna
 *   terang + pola section selang-seling sama dengan Home.
 * - initPortfolioFilter() diganti total: tombol filter sekarang ANCHOR,
 *   klik = smooth-scroll ke section kategori terkait (#category-<key>),
 *   bukan show/hide kartu seperti sebelumnya (karena tampilan grid
 *   sekarang sudah dikelompokkan per kategori secara permanen, lihat
 *   portfolio.view.js).
 * - Tambah initCategoryScrollSpy(): IntersectionObserver yang otomatis
 *   meng-highlight tombol filter sesuai section kategori mana yang
 *   sedang terlihat di viewport saat user scroll manual.
 */

import AOS from 'aos';
import 'aos/dist/aos.css';

import { companyInfo } from '../models/company.model.js';
import { portfolioProjects, portfolioCategories } from '../models/portfolio.model.js';

import { renderNavbar } from '../views/components/navbar.view.js';
import { renderFooter } from '../views/components/footer.view.js';
import { renderFloatingWhatsapp, renderProgressBar } from '../views/components/widgets.view.js';

import { renderPortfolioHero, renderPortfolioGridSection } from '../views/pages/portfolio.view.js';

import { initStickyNavbar, initMobileMenu, initScrollProgress, initMobileNavAccordion, initLangToggle } from '../utils/animations.js';

function renderPage() {
  const app = document.querySelector('#app');
  if (!app) return;
  document.body.classList.add('home-light');

  app.innerHTML = `
    ${renderProgressBar()}
    ${renderNavbar({ activePage: 'portfolio', whatsapp: companyInfo.whatsapp })}
    ${renderPortfolioHero()}
    ${renderPortfolioGridSection(portfolioProjects, portfolioCategories)}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

/** Tinggi navbar fixed, dipakai sebagai offset supaya section tidak ketutup navbar saat discroll-ke */
const SCROLL_OFFSET = 100;

function scrollToCategory(key) {
  // 'all' → scroll ke section kategori pertama (paling atas dari grid)
  const targetId = key === 'all' ? document.querySelector('.portfolio-category-section')?.id : `category-${key}`;
  if (!targetId) return;

  const target = document.getElementById(targetId.replace(/^#/, ''));
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');
      scrollToCategory(btn.dataset.filter);
    });
  });
}

/** Highlight tombol filter otomatis mengikuti section kategori yang sedang terlihat */
function initCategoryScrollSpy() {
  const sections = document.querySelectorAll('.portfolio-category-section');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const key = entry.target.id.replace('category-', '');
        filterBtns.forEach((b) => {
          b.classList.toggle('filter-btn--active', b.dataset.filter === key);
        });
      });
    },
    { rootMargin: `-${SCROLL_OFFSET + 20}px 0px -60% 0px`, threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/** Jika diakses dengan ?category=perumahan, langsung scroll ke kategori itu setelah render */
function applyInitialFilterFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  if (!category) return;

  const targetBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
  if (targetBtn) {
    // Delay singkat supaya layout (termasuk gambar) sudah settle sebelum scroll dihitung
    setTimeout(() => targetBtn.click(), 150);
  }
}

export function initPortfolioPage() {
  renderPage();
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });
  initStickyNavbar();
  initMobileMenu();
  initMobileNavAccordion();
  initLangToggle();
  initScrollProgress();
  initPortfolioFilter();
  initCategoryScrollSpy();
  applyInitialFilterFromQuery();
}