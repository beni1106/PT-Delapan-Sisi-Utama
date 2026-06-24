/**
 * services.view.js — VIEW LAYER
 * PERUBAHAN (i18n): teks statis memakai t(); service.summary (objek
 * {id,en}) memakai pick(). service.title/titleId dibiarkan bilingual
 * permanen seperti semula.
 */

import { t, pick } from '../../models/i18n.model.js';

const ICON_CHECK = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 7L5.5 10.5L12 3.5" stroke="#C9A44A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export function renderServicesHero() {
  return `
    <section class="svc-hero relative overflow-hidden" style="background:#0a0a0a;">
      <div class="absolute inset-0 opacity-8 services-hero-radial"></div>
      <div class="svc-hero-rule" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-44 pb-28 flex flex-col lg:flex-row lg:items-end lg:gap-20">

        <div class="flex-1" data-aos="fade-up">
          <span class="section-label mb-5 block" style="color:var(--color-gold);">${t('services.heroLabel')}</span>
          <h1 class="svc-hero-title" style="color:#ffffff;">
            <span style="color:#ffffff;">${t('services.heroTitleLine1')}</span><br/>
            <span class="text-gold-gradient">${t('services.heroTitleHighlight')}</span><br/>
            <span style="color:#ffffff;">${t('services.heroTitleLine3')}</span>
          </h1>
        </div>

        <div class="lg:w-80 mt-12 lg:mt-0" data-aos="fade-up" data-aos-delay="120">
          <div class="svc-hero-divider mb-8"></div>
          <p class="font-poppins text-sm leading-8 mb-10" style="color:rgba(255,255,255,0.6);">${t('services.heroDesc')}</p>
          <nav class="flex flex-col gap-3" aria-label="${t('services.navLabel')}">
            <a href="#engineering" class="svc-quicknav-link">
              <span class="svc-quicknav-num">01</span>
              <span style="color:rgba(255,255,255,0.6);">${t('navbar.jasaEngineering')}</span>
            </a>
            <a href="#construction" class="svc-quicknav-link">
              <span class="svc-quicknav-num">02</span>
              <span style="color:rgba(255,255,255,0.6);">${t('navbar.jasaConstruction')}</span>
            </a>
            <a href="#property" class="svc-quicknav-link">
              <span class="svc-quicknav-num">03</span>
              <span style="color:rgba(255,255,255,0.6);">${t('navbar.jasaProperty')}</span>
            </a>
            <a href="#supervision" class="svc-quicknav-link">
              <span class="svc-quicknav-num">04</span>
              <span style="color:rgba(255,255,255,0.6);">${t('navbar.jasaSupervision')}</span>
            </a>
          </nav>
        </div>
      </div>

      <div class="scroll-indicator" aria-hidden="true">
        <div class="mouse"><div class="wheel"></div></div>
      </div>
    </section>
  `;
}

export function renderServiceDetailBlock(service, index) {
  const itemsHtml = service.items
    .map(
      (item) => `
    <li class="svc-simple-item">
      <span class="svc-simple-icon" aria-hidden="true">${ICON_CHECK}</span>
      <span class="svc-simple-text">${item}</span>
    </li>
  `
    )
    .join('');

  return `
    <section id="${service.id}" class="svc-block-white" aria-labelledby="${service.id}-title">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div class="flex flex-col lg:flex-row lg:gap-20 lg:items-center">

          <div class="lg:w-80 flex-shrink-0 mb-12 lg:mb-0" data-aos="fade-up">
            <div class="svc-eyebrow mb-6">
              <span class="svc-eyebrow-num">${service.order}</span>
              <span class="svc-eyebrow-rule" aria-hidden="true"></span>
              <span style="font-family:var(--font-montserrat);font-size:0.65rem;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;color:var(--color-gold);">${t('services.eyebrowLabel')}</span>
            </div>

            <h2 class="svc-block-title-dark" id="${service.id}-title" style="color:#0a0a0a;">${service.title}</h2>
            <p class="svc-block-title-id">${service.titleId}</p>

            <div class="svc-text-divider mt-6" aria-hidden="true"></div>

            <p class="svc-summary-dark">${pick(service.summary)}</p>

            <a href="contact.html?service=${service.id}" class="svc-cta-pill mt-6" aria-label="${t('services.ctaBtn')} ${service.title}">
              ${t('services.ctaBtn')}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>

          <div class="flex-1" data-aos="fade-up" data-aos-delay="80">
            <ul class="svc-simple-list" aria-label="Cakupan layanan ${service.title}">${itemsHtml}</ul>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function renderServicesCta({ whatsapp }) {
  return `
    <section class="py-24 relative overflow-hidden cta-banner-bg">
      <div class="absolute inset-0 opacity-10 cta-radial"></div>
      <div class="max-w-4xl mx-auto px-6 text-center relative z-10" data-aos="fade-up">
        <div class="section-label mb-6">${t('services.ctaLabel')}</div>
        <h2 class="section-title mb-6">${t('services.ctaTitleLine1')} <span class="text-gold-gradient">${t('services.ctaTitleHighlight')}</span> ${t('services.ctaTitleSuffix')}</h2>
        <p class="font-poppins text-sm leading-8 mb-10 max-w-xl mx-auto" style="color:rgba(255,255,255,0.5);">${t('services.ctaDesc')}</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="https://wa.me/${whatsapp}" target="_blank" rel="noopener" class="btn-gold">${t('services.waBtn')}</a>
          <a href="contact.html" class="btn-outline-gold">${t('services.formBtn')}</a>
        </div>
      </div>
    </section>
  `;
}