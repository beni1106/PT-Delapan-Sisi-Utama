/**
 * portfolioDetail.view.js
 * VIEW LAYER — Menyusun halaman detail satu proyek portofolio.
 *
 * Layout mengikuti referensi desain (gaya listing properti modern):
 *   - Breadcrumb
 *   - Image carousel (badge status, counter, panah nav, label kategori foto, dots)
 *   - Sidebar kontak: agent, harga, tombol WhatsApp + telepon
 *   - Info utama: kategori, judul, harga
 *   - Specifications: grid 4 kotak (kamar tidur, kamar mandi, luas tanah, luas bangunan)
 *   - Property Description
 *   - Location: alamat teks + tombol buka di Google Maps (tanpa embed)
 *
 * DATA PLACEHOLDER:
 *   portfolio.model.js saat ini belum punya field spesifikasi (luas,
 *   kamar, harga, dst). Sesuai arahan, field yang kosong diisi data
 *   contoh yang masuk akal lewat getDisplayData() di bawah —
 *   deterministik per slug (proyek yang sama selalu dapat angka yang
 *   sama tiap reload, bukan acak tiap kali).
 *
 *   Begitu data asli tersedia, tambahkan field berikut langsung ke
 *   object project terkait di portfolio.model.js — view ini otomatis
 *   memakai data asli dan berhenti memakai placeholder:
 *     {
 *       propertyType: 'Ruko',
 *       priceLabel: 'Rp 750.000.000',
 *       bedrooms: 3,
 *       bathrooms: 2,
 *       landArea: 90,        // m²
 *       buildingArea: 120,   // m²
 *       description: 'Deskripsi proyek...',
 *       status: 'Selesai',   // badge carousel: SELESAI / RENOVASI / dst
 *       photoLabels: ['Eksterior', 'Interior', 'Denah'], // 1 per foto gallery
 *     }
 */

/** Hash sederhana dari string slug → angka, supaya placeholder konsisten per proyek */
function hashSlug(slug) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 100000;
  }
  return hash;
}

/** Generate data spesifikasi placeholder yang masuk akal, deterministik per slug */
function getDisplayData(project) {
  const h = hashSlug(project.slug);

  const bedrooms = project.bedrooms ?? (2 + (h % 4)); // 2-5
  const bathrooms = project.bathrooms ?? (1 + (h % 3)); // 1-3
  const landArea = project.landArea ?? (80 + (h % 12) * 15); // 80-245
  const buildingArea = project.buildingArea ?? (Math.round(landArea * 1.1));
  const priceBase = 450 + (h % 9) * 75; // 450-1050 (juta)
  const priceLabel = project.priceLabel ?? `Rp ${priceBase}.000.000`;
  const propertyType = project.propertyType ?? 'Bangunan Komersial';
  const status = project.status ?? 'Selesai Dikerjakan';
  const description = project.description ??
    `Proyek ${project.title} dikerjakan oleh tim PT. Delapan Sisi Utama dengan standar kualitas tinggi, mulai dari tahap perencanaan, desain, hingga pelaksanaan konstruksi. Lokasi strategis di ${project.location} dengan akses mudah ke fasilitas umum sekitar.`;

  return { bedrooms, bathrooms, landArea, buildingArea, priceLabel, propertyType, status, description };
}

function renderBreadcrumb(project) {
  return `
    <div class="detail-breadcrumb-row mb-6">
      <a href="/portfolio.html" class="back-link-pill">&larr; Kembali</a>
      <div class="detail-breadcrumb">
        <a href="/index.html">Home</a>
        <span>/</span>
        <a href="/portfolio.html">Portofolio</a>
        <span>/</span>
        <span class="detail-breadcrumb-current">${project.title}</span>
      </div>
    </div>
  `;
}

/** Carousel gambar: badge status, counter, panah nav, label foto, dots */
function renderCarousel(project, display) {
  const hasPhotos = (project.gallery && project.gallery.length > 0) || project.coverImage;

  if (!hasPhotos) {
    return `
      <div class="detail-carousel detail-carousel--empty" id="detail-carousel" data-total="0">
        <div class="detail-carousel-badge">${display.status}</div>
        <div class="detail-carousel-empty-content">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" class="detail-carousel-empty-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 7l9-4 9 4v10l-9 4-9-4V7z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 7l9 4 9-4M12 11v10"/>
          </svg>
          <span>Dokumentasi Foto Segera Hadir</span>
        </div>
      </div>
    `;
  }

  const photos = project.gallery && project.gallery.length > 0 ? project.gallery : [project.coverImage];
  const labels = project.photoLabels && project.photoLabels.length === photos.length
    ? project.photoLabels
    : photos.map((_, i) => (i === 0 ? 'Tampak Depan' : `Foto ${i + 1}`));

  const slides = photos
    .map(
      (src, i) => `
    <div class="detail-carousel-slide ${i === 0 ? 'detail-carousel-slide--active' : ''}" data-slide-index="${i}">
      <img src="${src}" alt="${project.title} — ${labels[i]}" loading="${i === 0 ? 'eager' : 'lazy'}" />
    </div>`
    )
    .join('');

  const dots = photos
    .map(
      (_, i) => `<button type="button" class="detail-carousel-dot ${i === 0 ? 'detail-carousel-dot--active' : ''}" data-dot-index="${i}" aria-label="Foto ${i + 1}"></button>`
    )
    .join('');

  return `
    <div class="detail-carousel" id="detail-carousel" data-total="${photos.length}">
      <div class="detail-carousel-badge">${display.status}</div>
      <div class="detail-carousel-counter"><span id="carousel-current">1</span>/${photos.length}</div>

      <div class="detail-carousel-track">${slides}</div>

      ${photos.length > 1 ? `
      <button type="button" class="detail-carousel-arrow detail-carousel-arrow--prev" id="carousel-prev" aria-label="Foto sebelumnya">&#8249;</button>
      <button type="button" class="detail-carousel-arrow detail-carousel-arrow--next" id="carousel-next" aria-label="Foto berikutnya">&#8250;</button>
      ` : ''}

      <div class="detail-carousel-label" id="carousel-label">${labels[0]}</div>

      ${photos.length > 1 ? `<div class="detail-carousel-dots">${dots}</div>` : ''}
    </div>
  `;
}

/** Sidebar: agent, harga, tombol WhatsApp + telepon */
function renderContactSidebar(project, display, { companyInfo }) {
  const waMessage = encodeURIComponent(`Halo, saya tertarik dengan proyek ${project.title}`);

  return `
    <div class="detail-sidebar" data-aos="fade-left">
      <div class="agent-card">
        <div class="agent-card-top">
          <div class="agent-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-5 h-5">
              <circle cx="12" cy="8" r="4"/><path stroke-linecap="round" stroke-linejoin="round" d="M4 20c0-4 3.5-7 8-7s8 3 8 7"/>
            </svg>
          </div>
          <div>
            <div class="agent-name">Tim ${project.title.split(' ')[0]}</div>
            <div class="agent-role">PT. Delapan Sisi Utama</div>
          </div>
        </div>

        <div class="agent-price-block">
          <div class="agent-price-label">Estimasi Nilai Proyek</div>
          <div class="agent-price-value">${display.priceLabel}</div>
        </div>

        <a href="https://wa.me/${companyInfo.whatsapp}?text=${waMessage}" target="_blank" rel="noopener" class="btn-wa-solid">
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0012.05 0z"/>
          </svg>
          Chat WhatsApp
        </a>

        <a href="tel:+${companyInfo.whatsapp}" class="btn-phone-outline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          ${companyInfo.phone1}
        </a>

        <div class="agent-note">Konsultasi gratis, tanpa komitmen</div>

        <a href="/portfolio.html" class="agent-other-link">Lihat Proyek Lainnya</a>
      </div>
    </div>
  `;
}

/** Grid spesifikasi: 4 kotak icon (bedrooms, bathrooms, land area, building area) */
function renderSpecGrid(display) {
  const items = [
    { icon: 'bed', value: `${display.bedrooms} BR`, label: 'Bedrooms' },
    { icon: 'bath', value: `${display.bathrooms} BA`, label: 'Bathrooms' },
    { icon: 'land', value: `${display.landArea} m²`, label: 'Land Area' },
    { icon: 'building', value: `${display.buildingArea} m²`, label: 'Building Area' },
  ];

  const iconSvg = {
    bed: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 18v-7a2 2 0 012-2h14a2 2 0 012 2v7M3 18h18M3 18v2m18-2v2M5 11V8a2 2 0 012-2h2a2 2 0 012 2v3"/>',
    bath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16M6 12V6a2 2 0 012-2h1a2 2 0 012 2M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6"/>',
    land: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9l2-2 2 2M3 9v10a1 1 0 001 1h4M21 9l-2-2-2 2m4 0v10a1 1 0 01-1 1h-4m-6-6h6"/>',
    building: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
  };

  const cards = items
    .map(
      (item) => `
    <div class="spec-box">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="spec-box-icon">${iconSvg[item.icon]}</svg>
      <div class="spec-box-value">${item.value}</div>
      <div class="spec-box-label">${item.label}</div>
    </div>`
    )
    .join('');

  return `
    <div class="detail-section-label">Specifications</div>
    <div class="spec-grid">${cards}</div>
  `;
}

function renderDescription(display) {
  return `
    <div class="detail-section-label">Property Description</div>
    <p class="detail-description">${display.description}</p>
  `;
}

/** Lokasi: alamat teks + tombol buka Google Maps (tanpa embed peta) */
function renderLocationSection(project, { companyInfo }) {
  const mapsQuery = encodeURIComponent(project.location || companyInfo.mapsEmbedQuery);

  return `
    <div class="detail-section-label">Location</div>
    <div class="location-box">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="location-box-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
      <div class="location-box-text">${project.location}</div>
      <a href="https://www.google.com/maps/search/?api=1&query=${mapsQuery}" target="_blank" rel="noopener" class="location-box-link">
        Buka di Google Maps &rarr;
      </a>
    </div>
  `;
}

export function renderPortfolioDetailHero(project) {
  const display = getDisplayData(project);

  return `
    <section class="py-12 pt-28">
      <div class="max-w-6xl mx-auto px-6" data-aos="fade-up">
        ${renderBreadcrumb(project)}
        <div class="detail-hero-grid">
          ${renderCarousel(project, display)}
        </div>
      </div>
    </section>
  `;
}

export function renderPortfolioDetailBody(project, { whatsapp, companyInfo }) {
  const display = getDisplayData(project);

  return `
    <section class="pb-20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="detail-layout">
          <div class="detail-main">
            <div class="detail-category-label">${display.propertyType.toUpperCase()} &middot; ${project.location.toUpperCase()}</div>
            <div class="detail-title-row">
              <h1 class="detail-title">${project.title}</h1>
              <div class="detail-title-price">${display.priceLabel}</div>
            </div>

            <div class="detail-divider"></div>

            ${renderSpecGrid(display)}

            <div class="detail-divider"></div>

            ${renderDescription(display)}

            <div class="detail-divider"></div>

            ${renderLocationSection(project, { companyInfo })}
          </div>

          ${renderContactSidebar(project, display, { companyInfo })}
        </div>
      </div>
    </section>
  `;
}

export function renderPortfolioNotFound() {
  return `
    <section class="pt-40 pb-20">
      <div class="max-w-2xl mx-auto px-6 text-center" data-aos="fade-up">
        <div class="section-label mb-4">404</div>
        <h1 class="section-title mb-6">Proyek Tidak <span class="text-gold-gradient">Ditemukan</span></h1>
        <p class="text-white/50 font-poppins text-sm leading-7 mb-10">
          Proyek yang Anda cari mungkin telah dipindahkan atau belum tersedia.
        </p>
        <a href="/portfolio.html" class="btn-gold">Kembali ke Portofolio</a>
      </div>
    </section>
  `;
}