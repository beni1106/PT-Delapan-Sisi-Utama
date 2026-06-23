/**
 * portfolio.view.js
 * VIEW LAYER — Menyusun seluruh section halaman Portfolio.
 *
 * PERUBAHAN TERBARU:
 * - Galeri tidak lagi satu grid flat dengan filter show/hide. Sekarang
 *   proyek DIKELOMPOKKAN PER KATEGORI dengan judul section bernomor
 *   (mengikuti gaya poster portofolio resmi: "1. Komersial & Publik",
 *   "2. Perumahan", dst), masing-masing dengan grid foto sendiri.
 * - Tombol filter di bagian atas sekarang berfungsi sebagai ANCHOR —
 *   klik tombol kategori akan smooth-scroll ke section kategori
 *   tersebut (bukan show/hide kartu seperti sebelumnya). Logic scroll
 *   & highlight aktif ada di portfolio.controller.js.
 * - Tombol "Semua" tetap discroll ke section paling atas (section
 *   kategori pertama dalam urutan portfolioCategories).
 */

import { renderPortfolioCard } from '../components/cards.view.js';

export function renderPortfolioHero() {
  return `
    <section class="pt-32 pb-16 relative overflow-hidden services-hero-bg section-dark">
      <div class="absolute inset-0 opacity-5 services-hero-radial"></div>
      <div class="max-w-3xl mx-auto px-6 relative z-10 text-center" data-aos="fade-up">
        <div class="section-label mb-4">Portofolio Proyek</div>
        <h1 class="section-title mb-6">Hasil Karya <span class="text-gold-gradient">Kami</span></h1>
        <div class="gold-line mx-auto mb-8"></div>
        <p class="text-white/60 font-poppins text-sm leading-8 max-w-2xl mx-auto">
          Kumpulan proyek konstruksi, properti, dan engineering yang telah kami selesaikan
          dengan komitmen tinggi terhadap kualitas, keselamatan, dan ketepatan waktu.
        </p>
      </div>
    </section>
  `;
}

/** Tombol filter sebagai anchor — scroll ke section kategori terkait */
function renderFilterNav(categories) {
  const buttons = categories
    .map((c, i) => `<button class="filter-btn ${i === 0 ? 'filter-btn--active' : ''}" data-filter="${c.key}">${c.label}</button>`)
    .join('');

  return `
    <div class="flex flex-wrap justify-center gap-3 mb-14 sticky-filter-nav" data-aos="fade-up">${buttons}</div>
  `;
}

/** Satu section kategori: judul bernomor + grid foto proyek di kategori itu */
function renderCategorySection(category, index, projectsInCategory) {
  if (projectsInCategory.length === 0) return '';

  const number = String(index + 1).padStart(2, '0');
  const cards = projectsInCategory.map((p) => renderPortfolioCard(p)).join('');

  return `
    <div class="portfolio-category-section" id="category-${category.key}" data-aos="fade-up">
      <div class="portfolio-category-header">
        <span class="portfolio-category-number">${number}</span>
        <h2 class="portfolio-category-title">${category.label}</h2>
        <span class="portfolio-category-count">${projectsInCategory.length} Proyek</span>
      </div>
      <div class="portfolio-grid">${cards}</div>
    </div>
  `;
}

export function renderPortfolioGridSection(projects, categories) {
  // categories[0] = 'all', sisanya kategori asli — dipakai untuk urutan section
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