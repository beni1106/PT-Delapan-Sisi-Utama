/**
 * about.view.js
 * VIEW LAYER — Menyusun seluruh section halaman About (Tentang Kami).
 *
 * REDESIGN:
 * - renderProfileSection: teks di-center, gambar jadi banner full-width
 *   di bawah (bukan side-by-side), background section putih (.section-light).
 * - renderVisionMission: grid diubah asimetris (5 / 7 kolom) dan kartu
 *   Visi kontennya di-center vertikal mengikuti tinggi kartu Misi,
 *   supaya tidak terlihat "kosong" karena kontennya sedikit.
 * - renderCoreValuesGrid: redesign total memakai pillar-card bernomor
 *   (01–08) dengan accent line, background putih (.section-light).
 * - renderLeadershipSection: redesign jadi card horizontal (avatar +
 *   badge jabatan + bio), background gelap.
 * - renderCompanyInfoSection: redesign jadi info-card per item (ikon +
 *   label + value) dalam grid, background putih (.section-light).
 * - Seluruh section sekarang berselang-seling: gelap → putih → gelap →
 *   putih → gelap → putih, memakai class `.section-light` / default gelap.
 */

import { renderIcon } from '../components/icon.view.js';

export function renderAboutHero() {
  return `
    <section class="pt-32 pb-20 relative overflow-hidden about-hero-bg">
      <div class="absolute inset-0 opacity-5 about-hero-radial"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center" data-aos="fade-up">
  <div class="section-label mb-4">Tentang Perusahaan</div>

 <h1 class="section-title mb-6">
  <span class="block text-white">Mengenal</span>
  <span class="block text-gold-gradient">PT. Delapan Sisi Utama</span>
</h1>

  <div class="gold-line mb-8 mx-auto"></div>

  <p class="text-white/60 font-poppins text-sm leading-8 max-w-2xl mx-auto">
    Kami adalah perusahaan konstruksi dan engineering yang berkomitmen membangun lebih dari sekadar
    struktur — kami membangun kepercayaan, nilai, dan warisan yang akan berdiri kokoh melampaui waktu.
  </p>
</div>
      </div>
    </section>
  `;
}

export function renderProfileSection({ about }) {
  return `
    <section class="py-20 section-light">
      <div class="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
        <div class="section-label mb-4">Profil Perusahaan</div>
        <h2 class="section-title mb-6">Kami Adalah <span class="text-gold-gradient">Mitra Terpercaya</span> Anda</h2>
        <div class="gold-line mb-8 mx-auto"></div>
        <p class="text-ink-70 font-poppins text-sm leading-8 mb-5">${about.id}</p>
        <p class="text-ink-70 font-poppins text-sm leading-8">${about.en}</p>
      </div>

      <div class="max-w-5xl mx-auto px-6 mt-14" data-aos="fade-up" data-aos-delay="150">
        <div class="relative">
          <div class="aspect-[16/7] overflow-hidden rounded-md border border-gold/20">
            <img src="/images/office.jpg" alt="Kantor PT. Delapan Sisi Utama" class="w-full h-full object-cover" loading="lazy" />
          </div>
          <div class="profile-badge profile-badge--center">
            <div class="font-montserrat font-900 text-3xl">5+</div>
            <div class="font-poppins text-xs font-600 mt-1">Tahun Pengalaman</div>
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
      <span class="text-white/70 font-poppins text-sm leading-7">${m}</span>
    </li>`
    )
    .join('');

  return `
    <section class="py-20 bg-dark-section">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="section-label mb-4">Filosofi Perusahaan</div>
          <h2 class="section-title">Visi & <span class="text-gold-gradient">Misi</span></h2>
        </div>
        <div class="grid lg:grid-cols-12 gap-6 items-stretch">
          <div class="lg:col-span-5" data-aos="fade-up">
            <div class="vision-mission-card vision-feature h-full">
              <div class="vm-icon">${renderIcon('target', 'w-6 h-6 text-gold')}</div>
              <h3 class="font-montserrat font-800 text-gold text-lg mb-4">VISI</h3>
              <p class="text-white/70 font-poppins text-sm leading-8">${vision.id}</p>
            </div>
          </div>
          <div class="lg:col-span-7" data-aos="fade-up" data-aos-delay="150">
            <div class="vision-mission-card h-full">
              <div class="vm-icon">${renderIcon('clipboard-check', 'w-6 h-6 text-gold')}</div>
              <h3 class="font-montserrat font-800 text-gold text-lg mb-4">MISI</h3>
              <ul class="space-y-3">${missionItems}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

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
    <section class="py-20 section-light">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="section-label mb-4">Delapan Pilar Utama</div>
          <h2 class="section-title">Nilai-Nilai Yang Kami <span class="text-gold-gradient">Pegang Teguh</span></h2>
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
        <div class="leader-role-badge">${l.role}</div>
        <h3 class="font-montserrat font-800 text-white text-lg mb-3">${l.name}</h3>
        <p class="text-white/50 text-xs font-poppins leading-7">${l.bio}</p>
      </div>
    </div>`
    )
    .join('');

  return `
    <section class="py-20 bg-dark-section">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="section-label mb-4">Kepemimpinan</div>
          <h2 class="section-title">Tim <span class="text-gold-gradient">Pemimpin Kami</span></h2>
        </div>
        <div class="leader-grid max-w-4xl mx-auto">${cards}</div>
      </div>
    </section>
  `;
}

export function renderCompanyInfoSection({ companyInfo }) {
  const rows = [
    ['building', 'Nama Perusahaan', companyInfo.legalName],
    ['layers', 'Bidang Usaha', 'Engineering, Construction, Property Development, Project Supervision'],
    ['location', 'Alamat', companyInfo.address],
    ['phone', 'Telepon', `${companyInfo.phone1} / ${companyInfo.phone2}`],
    ['mail', 'Email', companyInfo.email],
    ['globe', 'Website', companyInfo.website],
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

  return `
    <section class="py-20 section-light">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="section-label mb-4">Informasi Perusahaan</div>
          <h2 class="section-title">Data <span class="text-gold-gradient">Perusahaan</span></h2>
        </div>
        <div class="grid lg:grid-cols-5 gap-8 items-stretch">
          <div class="lg:col-span-3">
            <div class="info-card-grid">${rowsHtml}</div>
          </div>
          <div class="lg:col-span-2" data-aos="fade-left" data-aos-delay="150">
            <div class="info-banner h-full">
              <img src="/images/about-01.jpg" alt="PT. Delapan Sisi Utama" class="w-full h-full object-cover" loading="lazy" />
              <div class="info-banner-overlay"></div>
              <div class="info-banner-text">
                <div class="font-montserrat font-800 text-white text-base mb-1">Building Excellence,</div>
                <div class="font-montserrat font-800 text-gold text-base">Delivering Trust.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}