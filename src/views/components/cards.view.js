/**
 * cards.view.js — VIEW LAYER
 * Kartu-kartu yang dipakai berulang di berbagai halaman.
 * PERUBAHAN (i18n): teks statis memakai t(); field data model yang
 * berbentuk { id, en } (service.summary, testimonial.quote/role,
 * plan.name/description/features, post.title/excerpt/category)
 * memakai pick().
 */

import { renderIcon } from './icon.view.js';
import { t, pick } from '../../models/i18n.model.js';

/** Kartu layanan (dipakai di Home & Services) */
export function renderServiceCard(service, { compact = false } = {}) {
  if (compact) {
    return `
      <div class="service-card p-6" data-aos="fade-up">
        <div class="icon-wrap mb-5">${renderIcon(service.icon, 'w-6 h-6 text-gold')}</div>
        <h3 class="font-montserrat font-700 text-white text-base mb-3">${service.title}</h3>
        <p class="text-white/50 text-xs font-poppins leading-6 mb-5">${pick(service.summary)}</p>
        <a href="/services.html#${service.id}" class="card-link">
          ${t('cards.serviceMore')} ${renderIcon('arrow-right', 'w-3 h-3')}
        </a>
      </div>
    `;
  }

  return `
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div data-aos="fade-right">
        <div class="w-14 h-14 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center mb-6">
          ${renderIcon(service.icon, 'w-7 h-7 text-gold')}
        </div>
        <div class="section-label mb-3">${service.order}</div>
        <h2 class="section-title mb-4">${service.title}</h2>
        <div class="gold-line mb-6"></div>
        <p class="text-white/60 font-poppins text-sm leading-8 mb-8">${pick(service.summary)}</p>
        <div class="grid grid-cols-2 gap-3">
          ${service.items.map((item) => `<div class="sub-item">${item}</div>`).join('')}
        </div>
      </div>
      <div class="aspect-video overflow-hidden rounded-sm border border-gold/15" data-aos="fade-left" data-aos-delay="200">
        <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover" loading="lazy" />
      </div>
    </div>
  `;
}

/** Kartu proyek portofolio — clickable menuju halaman detail proyek */
export function renderPortfolioCard(project) {
  const hasImage = Boolean(project.coverImage);

  const media = hasImage
    ? `<img src="${project.coverImage}" alt="${project.title}" loading="lazy" />`
    : `
      <div class="portfolio-card-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" class="portfolio-card-placeholder-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 7l9-4 9 4v10l-9 4-9-4V7z"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 7l9 4 9-4M12 11v10"/>
        </svg>
        <span class="portfolio-card-placeholder-text">${t('cards.photoSoon')}</span>
      </div>
    `;

  return `
    <a href="/portfolio-detail.html?slug=${project.slug}" class="portfolio-card ${hasImage ? '' : 'portfolio-card--empty'}" data-category="${project.category}" data-aos="fade-up">
      ${media}
      <div class="overlay"></div>
      <div class="card-info">
        <div class="text-white font-montserrat font-700 text-sm">${project.title}</div>
        <div class="text-white/85 text-xs mt-1">${project.location}</div>
      </div>
    </a>
  `;
}

/** Kartu nilai inti (8 pilar) — title/subtitle bilingual permanen, tidak pakai pick() */
export function renderValueCard(value) {
  return `
    <div class="text-center" data-aos="zoom-in">
      <div class="value-hex">${renderIcon(value.icon, 'w-7 h-7 text-gold')}</div>
      <div class="font-montserrat font-700 text-white text-sm mb-1">${value.title}</div>
      <div class="text-white/40 text-xs font-poppins">${value.subtitle}</div>
    </div>
  `;
}

/** Kartu testimoni */
export function renderTestimonialCard(testimonial) {
  const stars = '★'.repeat(testimonial.rating);
  return `
    <div class="swiper-slide">
      <div class="testimonial-card">
        <div class="stars mb-4">${stars}</div>
        <p class="text-white/70 font-poppins text-sm leading-8 mb-6 italic">"${pick(testimonial.quote)}"</p>
        <div class="flex items-center gap-4">
          <div class="avatar-circle">${testimonial.name.charAt(0)}</div>
          <div>
            <div class="font-montserrat font-600 text-white text-sm">${testimonial.name}</div>
            <div class="text-white/40 text-xs font-poppins">${pick(testimonial.role)}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/** Kartu paket harga (versi generik — pricing.view.js punya versi inline sendiri) */
export function renderPricingCard(plan, { formatIDR }) {
  const highlightClass = plan.highlighted ? 'pricing-card pricing-card--highlight' : 'pricing-card';
  const badge = plan.highlighted ? `<div class="pricing-badge">${t('cards.pricingBadge')}</div>` : '';

  return `
    <div class="${highlightClass}" data-aos="fade-up">
      ${badge}
      <h3 class="font-montserrat font-700 text-sm mb-2" style="color:#0a0a0a;">${pick(plan.name)}</h3>
      <p class="text-xs font-poppins leading-6 mb-6" style="color:rgba(10,10,10,0.65);">${pick(plan.description)}</p>
      <div class="mb-6">
        <span class="font-montserrat font-900 text-2xl" style="color:#0a0a0a;">${formatIDR(plan.startingPrice)}</span>
        <span class="text-xs font-poppins" style="color:rgba(10,10,10,0.55);">${plan.unit}</span>
      </div>
      <ul class="space-y-3 mb-8">
        ${plan.features
          .map(
            (f) => `
          <li class="flex gap-2 items-start text-xs font-poppins" style="color:rgba(10,10,10,0.75);">
            <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="#0a0a0a" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            <span>${pick(f)}</span>
          </li>`
          )
          .join('')}
      </ul>
      <a href="/contact.html" class="btn-dark w-full justify-center">${t('cards.pricingCta')}</a>
    </div>
  `;
}

/** Kartu artikel blog */
export function renderBlogCard(post, { formatDateID }) {
  return `
    <a href="/blog-detail.html?id=${post.id}" class="blog-card" data-aos="fade-up" rel="bookmark">
      <div class="blog-card-image">
        <img src="${post.image}" alt="${pick(post.title)}" loading="lazy" />
        <div class="blog-card-category">${pick(post.category)}</div>
      </div>
      <div class="blog-card-body">
        <div class="text-white/40 text-xs font-poppins mb-3">${formatDateID(post.date)} · ${post.readTime} ${t('cards.blogReadTime')}</div>
        <h3 class="font-montserrat font-700 text-white text-base mb-3 leading-snug">${pick(post.title)}</h3>
        <p class="text-white/50 text-xs font-poppins leading-6 mb-4">${pick(post.excerpt)}</p>
        <span class="card-link">${t('cards.blogReadMore')} ${renderIcon('arrow-right', 'w-3 h-3')}</span>
      </div>
    </a>
  `;
}