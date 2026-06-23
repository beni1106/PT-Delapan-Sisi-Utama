/**
 * home.view.js
 * VIEW LAYER — Menyusun seluruh section halaman Home.
 * Menerima semua data yang dibutuhkan sebagai parameter dari Controller.
 *
 * PERUBAHAN (i18n): semua teks statis (judul, label, deskripsi, tombol)
 * sekarang memakai t() dari i18n.model.js, sehingga otomatis berganti
 * bahasa setiap kali halaman di-render ulang oleh controller.
 */

import { renderIcon } from '../components/icon.view.js';
import { renderServiceCard, renderPortfolioCard, renderTestimonialCard } from '../components/cards.view.js';
import { t } from '../../models/i18n.model.js';

export function renderHeroSection() {
  return `
    <section class="hero-section">
      <img
        class="hero-image-bg"
        src="/project/images/banner.png"
        alt="PT. Delapan Sisi Utama — Engineering, Construction, Property Development"
        loading="eager"
      />
      <div class="hero-overlay"></div>

      <div class="hero-content h-full flex items-center justify-center">
        <div class="max-w-7xl mx-auto px-6 w-full">
          <div class="hero-eyebrow hero-eyebrow--center" id="hero-eyebrow">
            <span class="w-8 h-px bg-gold"></span>
            ${t('home.eyebrow')}
            <span class="w-8 h-px bg-gold"></span>
          </div>

          <div class="hero-brand-lockup" id="hero-brand-lockup">
            <img
              src="/project/images/logo-dsu.png"
              alt="Logo PT. Delapan Sisi Utama"
              class="hero-brand-logo"
              loading="eager"
            />
            <h1 class="hero-brand-title">
              PT. DELAPAN<br class="hero-brand-break" />
              SISI UTAMA
            </h1>
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        <div class="mouse"><div class="wheel"></div></div>
        <p class="text-center text-xs text-white/70 mt-3 font-poppins tracking-widest">${t('home.scroll')}</p>
      </div>
    </section>
  `;
}

/**
 * @deprecated Stat Bar tidak lagi dipanggil di home.controller.js sesuai
 * permintaan terbaru. Fungsi dipertahankan agar tidak memutus import lama,
 * dan bisa dipakai ulang di halaman lain bila dibutuhkan.
 */
export function renderStatBar(stats) {
  const items = stats
    .map(
      (s) => `
    <div class="text-center px-4">
      <div class="counter-val text-gold text-3xl font-montserrat font-900" data-target="${s.value}" data-suffix="${s.suffix}">0</div>
      <div class="text-white/50 text-xs font-poppins mt-1 tracking-wider uppercase">${s.label}</div>
    </div>`
    )
    .join('');

  return `
    <div class="stat-bar py-6">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gold/10">
          ${items}
        </div>
      </div>
    </div>
  `;
}

export function renderAboutBrief({ leadership }) {
  const leaderCards = leadership
    .map(
      (l) => `
    <div class="gold-border rounded p-4">
      <div class="text-gold font-montserrat font-800 text-xl mb-1">${l.name}</div>
      <div class="text-white/50 text-xs font-poppins">${l.role}</div>
    </div>`
    )
    .join('');

  return `
    <section class="py-24 bg-dark-alt">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center" data-aos="fade-up">
          <div class="section-label mb-4">${t('home.aboutLabel')}</div>
          <h2 class="section-title mb-6">
            ${t('home.aboutTitleLine1')}
            <span class="text-gold-gradient">${t('home.aboutTitleHighlight')}</span>
            ${t('home.aboutTitleLine3')}
          </h2>
          <div class="gold-line mx-auto mb-8"></div>
          <p class="text-white/60 font-poppins text-sm leading-8 mb-6 max-w-2xl mx-auto">
            ${t('home.aboutP1')}
          </p>
          <p class="text-white/60 font-poppins text-sm leading-8 mb-10 max-w-2xl mx-auto">
            ${t('home.aboutP2')}
          </p>
          <div class="grid grid-cols-2 gap-4 mb-10 max-w-md mx-auto">${leaderCards}</div>
          <a href="/about.html" class="btn-outline-gold">${t('home.aboutMore')} ${renderIcon('arrow-right', 'w-4 h-4')}</a>
        </div>
      </div>
    </section>
  `;
}

export function renderServicesSection(services) {
  const cards = services.map((s) => renderServiceCard(s, { compact: true })).join('');
  return `
    <section class="py-24 bg-dark-section section-dark">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="section-label mb-4">${t('home.servicesLabel')}</div>
          <h2 class="section-title mb-4">${t('home.servicesTitleLine1')} <span class="text-gold-gradient">${t('home.servicesTitleHighlight')}</span></h2>
          <p class="text-white/50 font-poppins text-sm max-w-xl mx-auto leading-7">
            ${t('home.servicesDesc')}
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">${cards}</div>
      </div>
    </section>
  `;
}

export function renderPortfolioPreview(projects, categories) {
  const filterButtons = categories
    .map(
      (c, i) => `
    <button class="filter-btn ${i === 0 ? 'filter-btn--active' : ''}" data-filter="${c.key}">${c.label}</button>`
    )
    .join('');

  const cards = projects.map((p) => renderPortfolioCard(p)).join('');

  return `
    <section class="py-24 bg-dark-alt">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-wrap items-end justify-between gap-6 mb-12" data-aos="fade-up">
          <div>
            <div class="section-label mb-4">${t('home.portfolioLabel')}</div>
            <h2 class="section-title">${t('home.portfolioTitleLine1')} <span class="text-gold-gradient">${t('home.portfolioTitleHighlight')}</span></h2>
          </div>
          <a href="/portfolio.html" class="btn-outline-gold">${t('home.portfolioViewAll')}</a>
        </div>

        <div class="flex flex-wrap gap-3 mb-10" data-aos="fade-up" data-aos-delay="100">${filterButtons}</div>

        <div class="portfolio-grid" id="portfolio-grid">${cards}</div>
      </div>
    </section>
  `;
}

/**
 * Delapan Pilar Utama — layout kartu bernomor (01-08) dengan accent line
 * kiri, judul + subtitle, dan hover lift.
 */
export function renderCoreValuesSection(coreValues) {
  const cards = coreValues
    .map((v, i) => {
      const num = String(i + 1).padStart(2, '0');
      return `
    <div class="pillar-card" data-aos="fade-up" data-aos-delay="${i * 60}">
      <div class="pillar-card-top">
        <span class="pillar-num">${num}</span>
        <div class="pillar-icon">${renderIcon(v.icon, 'w-5 h-5 text-gold')}</div>
      </div>
      <div class="pillar-accent"></div>
      <div class="pillar-title">${v.title}</div>
      <div class="pillar-subtitle">${v.subtitle}</div>
    </div>`;
    })
    .join('');

  return `
    <section class="py-24 core-values-bg section-dark">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="section-label mb-4">${t('home.pillarLabel')}</div>
          <h2 class="section-title">${t('home.pillarTitleLine1')} <span class="text-gold-gradient">${t('home.pillarTitleHighlight')}</span></h2>
          <p class="text-white/50 font-poppins text-sm max-w-xl mx-auto leading-7 mt-4">
            ${t('home.pillarDesc')}
          </p>
        </div>
        <div class="pillar-grid">${cards}</div>
      </div>
    </section>
  `;
}

/**
 * Why Choose Us — grid kartu (icon+judul+desc) center, video perusahaan
 * full-width di bawah sebagai penutup section.
 */
export function renderWhyChooseUsSection(whyChooseUs) {
  const cards = whyChooseUs
    .map(
      (w) => `
    <div class="why-card" data-aos="fade-up">
      <div class="why-icon-lg">${renderIcon(w.icon || 'check', 'w-6 h-6 text-gold')}</div>
      <div class="why-card-title">${w.title}</div>
      <div class="why-card-desc">${w.description}</div>
    </div>`
    )
    .join('');

  return `
    <section class="py-24 bg-dark-alt relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="section-label mb-4">${t('home.whyLabel')}</div>
          <h2 class="section-title mb-6">${t('home.whyTitleLine1')} <span class="text-gold-gradient">${t('home.whyTitleHighlight')}</span> ${t('home.whyTitleSuffix')}</h2>
          <div class="gold-line mx-auto"></div>
        </div>

        <div class="why-grid mb-16">${cards}</div>

        <div class="relative rounded-sm overflow-hidden gold-border max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <video class="w-full aspect-video object-cover" controls poster="/project/images/aster-hills/kantor-pemasaran.webp">
             <source src="/project/videos/projects/aster-hills-drone.mp4" type="video/mp4" />
          </video>
          <div class="video-badge">${t('home.companyProfileBadge')}</div>
        </div>
      </div>
    </section>
  `;
}

export function renderTestimonialSection(testimonials) {
  const slides = testimonials.map((item) => renderTestimonialCard(item)).join('');
  return `
    <section class="py-24 bg-dark-section section-dark">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="section-label mb-4">${t('home.testimonialLabel')}</div>
          <h2 class="section-title">${t('home.testimonialTitleLine1')} <span class="text-gold-gradient">${t('home.testimonialTitleHighlight')}</span></h2>
        </div>
        <div class="swiper testimonial-swiper" data-aos="fade-up" data-aos-delay="200">
          <div class="swiper-wrapper pb-10">${slides}</div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  `;
}

export function renderCtaBanner({ whatsapp }) {
  return `
    <section class="py-20 relative overflow-hidden cta-banner-bg">
      <div class="absolute inset-0 opacity-10 cta-radial"></div>
      <div class="max-w-4xl mx-auto px-6 text-center relative z-10" data-aos="fade-up">
        <div class="section-label mb-6">${t('home.ctaLabel')}</div>
        <h2 class="section-title mb-6">${t('home.ctaTitleLine1')} <span class="text-gold-gradient">${t('home.ctaTitleHighlight')}</span> ${t('home.ctaTitleSuffix')}</h2>
        <p class="text-white/50 font-poppins text-sm leading-8 mb-10 max-w-xl mx-auto">
          ${t('home.ctaDesc')}
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="https://wa.me/${whatsapp}?text=${encodeURIComponent(t('home.ctaWhatsappMsg'))}" target="_blank" rel="noopener" class="btn-gold">
            ${renderIcon('whatsapp', 'w-5 h-5', true)} ${t('home.ctaWhatsapp')}
          </a>
          <a href="/contact.html" class="btn-outline-gold">${t('home.ctaForm')}</a>
        </div>
      </div>
    </section>
  `;
}

export function renderGalleryStrip(images) {
  const allImages = [...images, ...images]; // duplikasi untuk efek infinite marquee
  const imgTags = allImages
    .map((src) => `<img src="${src}" class="marquee-img" alt="" loading="lazy" />`)
    .join('');

  return `
    <section class="py-4 bg-dark-alt overflow-hidden">
      <div class="marquee-container overflow-hidden">
        <div class="marquee-track">${imgTags}</div>
      </div>
    </section>
  `;
}