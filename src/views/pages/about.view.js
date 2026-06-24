/**
 * about.view.js
 * VIEW LAYER — Menyusun seluruh section halaman About (Tentang Kami).
 * PERUBAHAN (i18n): teks statis memakai t(); field model { id, en }
 * (about, vision, missionList, whyChooseUs.description, leadership.role/bio)
 * memakai pick().
 * PERUBAHAN: tambah id anchor di tiap section agar dropdown navbar bisa
 * langsung menuju section yang dituju (#profil, #tim, #visi-misi, #pilar,
 * #company-info). Activity Gallery diganti Company Information.
 */

import { renderIcon } from '../components/icon.view.js';
import { t, pick } from '../../models/i18n.model.js';

export function renderAboutHero() {
  return `
    <section class="pt-32 pb-20 relative overflow-hidden about-hero-bg">
      <div class="absolute inset-0 opacity-5 about-hero-radial"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <div class="section-label mb-4">${t('about.heroLabel')}</div>

          <h1 class="section-title mb-6">
            <span class="block text-white">${t('about.heroTitleLine1')}</span>
            <span class="block text-gold-gradient">PT. Delapan Sisi Utama</span>
          </h1>

          <div class="gold-line mb-8 mx-auto"></div>

          <p class="text-white/60 font-poppins text-sm leading-8 max-w-2xl mx-auto">${t('about.heroDesc')}</p>
        </div>
      </div>
    </section>
  `;
}

export function renderProfileSection({ about, whyChooseUs }) {
  const whyCards = whyChooseUs
    .map(
      (w) => `
    <div class="flex gap-4 items-start p-4 rounded-md border border-gold/20 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div class="flex-shrink-0 w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center">
        ${renderIcon(w.icon || 'check', 'w-4 h-4 text-gold')}
      </div>
      <div>
        <div class="font-montserrat font-700 text-[#1a1a1a] text-sm mb-1">${w.title}</div>
        <div class="font-poppins text-xs text-[#555] leading-6">${pick(w.description)}</div>
      </div>
    </div>`
    )
    .join('');

  return `
    <section id="profil" class="py-20 section-light scroll-mt-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">

          <!-- Kiri: Teks Profil -->
          <div data-aos="fade-right">
            <div class="section-label mb-4">${t('about.profileLabel')}</div>
            <h2 class="section-title mb-6">${t('about.profileTitleLine1')} <span class="text-gold-gradient">${t('about.profileTitleHighlight')}</span> ${t('about.profileTitleSuffix')}</h2>
            <div class="gold-line mb-8"></div>
            <p class="text-ink-70 font-poppins text-sm leading-8">${pick(about)}</p>
          </div>

          <!-- Kanan: Why Choose Us -->
          <div data-aos="fade-left" data-aos-delay="150">
            <div class="section-label mb-4">${t('about.whyChooseUsLabel')}</div>
            <div class="space-y-6">${whyCards}</div>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function renderVisionMission({ vision, missionList }) {
  const missionItems = missionList
    .map(
      (m) => `
    <li class="flex gap-3 items-start">
      <div class="dot-gold"></div>
      <span class="text-white/70 font-poppins text-sm leading-7">${pick(m)}</span>
    </li>`
    )
    .join('');

  return `
    <section id="visi-misi" class="py-20 bg-dark-section scroll-mt-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="section-label mb-4">${t('about.visionMissionLabel')}</div>
          <h2 class="section-title">${t('about.visionMissionTitleLine1')} <span class="text-gold-gradient">${t('about.visionMissionTitleHighlight')}</span></h2>
        </div>
        <div class="grid lg:grid-cols-12 gap-6 items-stretch">
          <div class="lg:col-span-5" data-aos="fade-up">
            <div class="vision-mission-card vision-feature h-full">
              <div class="vm-icon">${renderIcon('target', 'w-6 h-6 text-gold')}</div>
              <h3 class="font-montserrat font-800 text-gold text-lg mb-4">${t('about.visiLabel')}</h3>
              <p class="text-white/70 font-poppins text-sm leading-8">${pick(vision)}</p>
            </div>
          </div>
          <div class="lg:col-span-7" data-aos="fade-up" data-aos-delay="150">
            <div class="vision-mission-card h-full">
              <div class="vm-icon">${renderIcon('clipboard-check', 'w-6 h-6 text-gold')}</div>
              <h3 class="font-montserrat font-800 text-gold text-lg mb-4">${t('about.misiLabel')}</h3>
              <ul class="space-y-3">${missionItems}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/** title/subtitle bilingual permanen (sama seperti home), tidak pakai pick() */
export function renderCoreValuesGrid(coreValues) {
  const cards = coreValues
    .map(
      (v, i) => `
    <div class="pillar-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
      <div class="pillar-card-top">
        <div class="pillar-num">${String(i + 1).padStart(2, '0')}</div>
        <div class="pillar-icon">${renderIcon(v.icon, 'w-5 h-5 text-gold')}</div>
      </div>
      <div class="pillar-accent"></div>
      <div class="pillar-title">${v.title}</div>
      <div class="pillar-subtitle">${v.subtitle}</div>
    </div>`
    )
    .join('');

  return `
    <section id="pilar" class="py-20 section-light scroll-mt-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="section-label mb-4">${t('about.coreValuesLabel')}</div>
          <h2 class="section-title">${t('about.coreValuesTitleLine1')} <span class="text-gold-gradient">${t('about.coreValuesTitleHighlight')}</span></h2>
        </div>
        <div class="pillar-grid">${cards}</div>
      </div>
    </section>
  `;
}

export function renderLeadershipSection(leadership) {
  const cards = leadership
    .map(
      (l) => `
    <div class="leader-card" data-aos="fade-up">
      <div class="leader-avatar">${l.initials}</div>
      <div class="min-w-0">
        <div class="leader-role-badge">${pick(l.role)}</div>
        <h3 class="font-montserrat font-800 text-white text-lg mb-3">${l.name}</h3>
        <p class="text-white/50 text-xs font-poppins leading-7">${pick(l.bio)}</p>
      </div>
    </div>`
    )
    .join('');

  return `
    <section id="tim" class="py-20 bg-dark-section scroll-mt-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="section-label mb-4">${t('about.leadershipLabel')}</div>
          <h2 class="section-title">${t('about.leadershipTitleLine1')} <span class="text-gold-gradient">${t('about.leadershipTitleHighlight')}</span></h2>
        </div>
        <div class="leader-grid max-w-4xl mx-auto">${cards}</div>
      </div>
    </section>
  `;
}

export function renderCompanyInfoSection({ companyInfo }) {
  const rows = [
    ['building', t('about.fieldNama'), companyInfo.legalName],
    ['layers', t('about.fieldBidang'), t('about.fieldBidangValue')],
    ['location', t('about.fieldAlamat'), companyInfo.address],
    ['phone', t('about.fieldTelepon'), `${companyInfo.phone1} / ${companyInfo.phone2}`],
    ['mail', t('about.fieldEmail'), companyInfo.email],
    ['globe', t('about.fieldWebsite'), companyInfo.website],
  ];

  const rowsHtml = rows
    .map(
      ([icon, label, value]) => `
    <div class="info-card" data-aos="fade-up">
      <div class="info-card-icon">${renderIcon(icon, 'w-5 h-5 text-gold')}</div>
      <div class="min-w-0">
        <div class="info-card-label">${label}</div>
        <div class="info-card-value">${value}</div>
      </div>
    </div>`
    )
    .join('');

  const encodedQuery = encodeURIComponent(companyInfo.mapsEmbedQuery);

  return `
    <section id="company-info" class="py-20 section-light scroll-mt-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="section-label mb-4">${t('about.companyInfoLabel')}</div>
          <h2 class="section-title">${t('about.companyInfoTitleLine1')} <span class="text-gold-gradient">${t('about.companyInfoTitleHighlight')}</span></h2>
        </div>
        <div class="grid lg:grid-cols-5 gap-8 items-stretch">
          <div class="lg:col-span-3">
            <div class="info-card-grid">${rowsHtml}</div>
          </div>

          <!-- Kanan: Map -->
          <div class="lg:col-span-2" data-aos="fade-left" data-aos-delay="150">
            <div class="rounded-md overflow-hidden border border-gold/20 h-full min-h-[320px]">
              <iframe
                class="w-full h-full min-h-[320px]"
                src="https://maps.google.com/maps?q=${encodedQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Lokasi PT. Delapan Sisi Utama"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}