/**
 * blog.view.js
 * VIEW LAYER — Menyusun seluruh section halaman Blog.
 */

import { renderBlogCard } from '../components/cards.view.js';

export function renderBlogHero() {
  return `
    <section class="pt-32 pb-16 relative overflow-hidden services-hero-bg">
      <div class="absolute inset-0 opacity-5 services-hero-radial"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10" data-aos="fade-up">
        <div class="section-label mb-4">Blog & Artikel</div>
        <h1 class="section-title mb-6">Wawasan & <span class="text-gold-gradient">Inspirasi</span></h1>
        <div class="gold-line mb-8"></div>
        <p class="text-white/60 font-poppins text-sm leading-8 max-w-2xl">
          Tips, edukasi, dan inspirasi seputar dunia konstruksi, arsitektur, dan manajemen proyek
          dari tim PT. Delapan Sisi Utama.
        </p>
      </div>
    </section>
  `;
}

export function renderBlogGrid(posts, { formatDateID }) {
  const cards = posts.map((p) => renderBlogCard(p, { formatDateID })).join('');
  return `
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${cards}</div>
      </div>
    </section>
  `;
}