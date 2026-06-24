/**
 * blogDetail.view.js — VIEW LAYER
 * PERUBAHAN (i18n): teks statis memakai t(); field model { id, en }
 * (post.category, post.title, post.excerpt) memakai pick().
 */

import { t, pick } from '../../models/i18n.model.js';

export function renderBlogDetailHero(post, { formatDateID }) {
  return `
    <section class="pt-32 pb-12 relative overflow-hidden services-hero-bg">
      <div class="absolute inset-0 opacity-5 services-hero-radial"></div>
      <div class="max-w-4xl mx-auto px-6 relative z-10" data-aos="fade-up">
        <a href="blog.html" class="back-link mb-6">${t('blogDetail.backLink')}</a>
        <div class="section-label mb-4">${pick(post.category)}</div>
        <h1 class="section-title mb-6">${pick(post.title)}</h1>
        <div class="flex items-center gap-4 text-white/40 text-xs font-poppins">
          <span>${post.author}</span>
          <span>&middot;</span>
          <span>${formatDateID(post.date)}</span>
          <span>&middot;</span>
          <span>${post.readTime} ${t('blog.readTime')}</span>
        </div>
      </div>
    </section>
  `;
}

export function renderBlogDetailBody(post) {
  return `
    <section class="py-12">
      <div class="max-w-4xl mx-auto px-6">
        <div class="aspect-video overflow-hidden rounded-sm border border-gold/15 mb-10" data-aos="fade-up">
          <img src="${post.image}" alt="${pick(post.title)}" class="w-full h-full object-cover" loading="lazy" />
        </div>
        <div class="prose-content" data-aos="fade-up" data-aos-delay="100">
          <p>${pick(post.excerpt)}</p>
          <p>${t('blogDetail.placeholderP1')}</p>
          <p>${t('blogDetail.placeholderP2')}</p>
        </div>
      </div>
    </section>
  `;
}

export function renderBlogNotFound() {
  return `
    <section class="pt-40 pb-20">
      <div class="max-w-2xl mx-auto px-6 text-center" data-aos="fade-up">
        <div class="section-label mb-4">${t('blogDetail.notFoundLabel')}</div>
        <h1 class="section-title mb-6">${t('blogDetail.notFoundTitleLine1')} <span class="text-gold-gradient">${t('blogDetail.notFoundTitleHighlight')}</span></h1>
        <p class="text-white/50 font-poppins text-sm leading-7 mb-10">${t('blogDetail.notFoundDesc')}</p>
        <a href="blog.html" class="btn-gold">${t('blogDetail.backBtn')}</a>
      </div>
    </section>
  `;
}