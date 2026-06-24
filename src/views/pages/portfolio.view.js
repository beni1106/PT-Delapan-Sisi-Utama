/**
 * portfolio.view.js — VIEW LAYER
 * PERUBAHAN (i18n): teks statis hero & label "Proyek" memakai t().
 * CATATAN: category.label dan project.title/location berasal dari
 * portfolio.model.js (belum di-upload) — belum bisa ikut toggle bahasa
 * sampai field tersebut diubah jadi { id, en } di model tersebut.
 */

import { renderPortfolioCard } from '../components/cards.view.js';
import { t } from '../../models/i18n.model.js';

export function renderPortfolioHero() {
  return `
    <section class="pt-32 pb-16 relative overflow-hidden services-hero-bg section-dark">
      <div class="absolute inset-0 opacity-5 services-hero-radial"></div>
      <div class="max-w-3xl mx-auto px-6 relative z-10 text-center" data-aos="fade-up">
        <div class="section-label mb-4">${t('portfolio.heroLabel')}</div>
        <h1 class="section-title mb-6">${t('portfolio.heroTitleLine1')} <span class="text-gold-gradient">${t('portfolio.heroTitleHighlight')}</span></h1>
        <div class="gold-line mx-auto mb-8"></div>
        <p class="text-white/60 font-poppins text-sm leading-8 max-w-2xl mx-auto">${t('portfolio.heroDesc')}</p>
      </div>
    </section>
  `;
}

function renderFilterNav(categories) {
  const buttons = categories
    .map((c, i) => `<button class="filter-btn ${i === 0 ? 'filter-btn--active' : ''}" data-filter="${c.key}">${c.label}</button>`)
    .join('');

  return `<div class="flex flex-wrap justify-center gap-3 mb-14 sticky-filter-nav" data-aos="fade-up">${buttons}</div>`;
}

function renderCategorySection(category, index, projectsInCategory) {
  if (projectsInCategory.length === 0) return '';

  const number = String(index + 1).padStart(2, '0');
  const cards = projectsInCategory.map((p) => renderPortfolioCard(p)).join('');

  return `
    <div class="portfolio-category-section" id="category-${category.key}" data-aos="fade-up">
      <div class="portfolio-category-header">
        <span class="portfolio-category-number">${number}</span>
        <h2 class="portfolio-category-title">${category.label}</h2>
        <span class="portfolio-category-count">${projectsInCategory.length} ${t('portfolio.projectsSuffix')}</span>
      </div>
      <div class="portfolio-grid">${cards}</div>
    </div>
  `;
}

export function renderPortfolioGridSection(projects, categories) {
  const realCategories = categories.filter((c) => c.key !== 'all');

  const sections = realCategories
    .map((cat, i) => {
      const projectsInCategory = projects.filter((p) => p.category === cat.key);
      return renderCategorySection(cat, i, projectsInCategory);
    })
    .join('');

  return `
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        ${renderFilterNav(categories)}
        <div id="portfolio-grid">${sections}</div>
      </div>
    </section>
  `;
}