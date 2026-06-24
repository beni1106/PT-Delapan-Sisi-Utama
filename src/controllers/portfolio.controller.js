/**
 * portfolio.controller.js — CONTROLLER LAYER
 * PERUBAHAN (i18n): initLang() + getLang() dipass ke navbar; listener
 * 'dsu:langchange' me-render ulang halaman + pasang ulang semua listener
 * filter/scrollspy (karena DOM dibuat ulang dari nol saat re-render).
 */

import AOS from 'aos';
import 'aos/dist/aos.css';

import { companyInfo } from '../models/company.model.js';
import { portfolioProjects, portfolioCategories } from '../models/portfolio.model.js';

import { renderNavbar } from '../views/components/navbar.view.js';
import { renderFooter } from '../views/components/footer.view.js';
import { renderFloatingWhatsapp, renderProgressBar } from '../views/components/widgets.view.js';

import { renderPortfolioHero, renderPortfolioGridSection } from '../views/pages/portfolio.view.js';

import { initStickyNavbar, initMobileMenu, initScrollProgress, initMobileNavAccordion, initLangToggle, initDropdownHover } from '../utils/animations.js';
import { initLang, getLang } from '../utils/language.js';

function renderPage() {
  const app = document.querySelector('#app');
  if (!app) return;
  document.body.classList.add('home-light');

  app.innerHTML = `
    ${renderProgressBar()}
    ${renderNavbar({ activePage: 'portfolio', whatsapp: companyInfo.whatsapp, lang: getLang() })}
    ${renderPortfolioHero()}
    ${renderPortfolioGridSection(portfolioProjects, portfolioCategories)}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

const SCROLL_OFFSET = 100;

function scrollToCategory(key) {
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

function applyInitialFilterFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  if (!category) return;

  const targetBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
  if (targetBtn) {
    setTimeout(() => targetBtn.click(), 150);
  }
}

function bindPageBehavior() {
  initStickyNavbar();
  initMobileMenu();
  initMobileNavAccordion();
  initLangToggle();
  initScrollProgress();
  initDropdownHover();
  initPortfolioFilter();
  initCategoryScrollSpy();
}

export function initPortfolioPage() {
  initLang();
  renderPage();
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });
  bindPageBehavior();
  applyInitialFilterFromQuery();

  window.addEventListener('dsu:langchange', () => {
    renderPage();
    bindPageBehavior();
  });
}