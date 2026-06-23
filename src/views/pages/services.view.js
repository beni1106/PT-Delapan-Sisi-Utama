/**
 * services.view.js
 * VIEW LAYER — Halaman Services.
 *
 * PERBAIKAN:
 * - Hero: semua teks pakai style inline → tidak bisa di-override .home-light
 * - Nomor dekoratif besar dihapus
 * - Item list: style simple tanpa card/kotak — hanya ikon + teks dengan
 *   garis bawah tipis sebagai pemisah, lebih clean dan editorial
 */

const ICON_CHECK = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 7L5.5 10.5L12 3.5" stroke="#C9A44A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export function renderServicesHero() {
  return `
    <section class="svc-hero relative overflow-hidden" style="background:#0a0a0a;">
      <div class="absolute inset-0 opacity-8 services-hero-radial"></div>
      <div class="svc-hero-rule" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-44 pb-28 flex flex-col lg:flex-row lg:items-end lg:gap-20">

        <!-- Kiri: heading — semua warna pakai style inline agar tidak di-override -->
        <div class="flex-1" data-aos="fade-up">
          <span class="section-label mb-5 block" style="color:var(--color-gold);">Bidang Usaha</span>
          <h1 class="svc-hero-title" style="color:#ffffff;">
            <span style="color:#ffffff;">Layanan</span><br/>
            <span class="text-gold-gradient">Profesional</span><br/>
            <span style="color:#ffffff;">Kami</span>
          </h1>
        </div>

        <!-- Kanan: deskripsi + quick-nav -->
        <div class="lg:w-80 mt-12 lg:mt-0" data-aos="fade-up" data-aos-delay="120">
          <div class="svc-hero-divider mb-8"></div>
          <p class="font-poppins text-sm leading-8 mb-10" style="color:rgba(255,255,255,0.6);">
            Solusi konstruksi dan engineering terintegrasi dari perencanaan hingga penyelesaian —
            dengan komitmen pada kualitas, keselamatan, dan ketepatan waktu.
          </p>
          <nav class="flex flex-col gap-3" aria-label="Navigasi layanan">
            <a href="#engineering" class="svc-quicknav-link">
              <span class="svc-quicknav-num">01</span>
              <span style="color:rgba(255,255,255,0.6);">Engineering Services</span>
            </a>
            <a href="#construction" class="svc-quicknav-link">
              <span class="svc-quicknav-num">02</span>
              <span style="color:rgba(255,255,255,0.6);">Construction Services</span>
            </a>
            <a href="#property" class="svc-quicknav-link">
              <span class="svc-quicknav-num">03</span>
              <span style="color:rgba(255,255,255,0.6);">Property Development</span>
            </a>
            <a href="#supervision" class="svc-quicknav-link">
              <span class="svc-quicknav-num">04</span>
              <span style="color:rgba(255,255,255,0.6);">Project Supervision</span>
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

/**
 * Satu blok per layanan — background putih, tanpa foto, tanpa nomor dekoratif.
 * Item list: style simple — garis bawah tipis, tidak pakai card/kotak.
 */
export function renderServiceDetailBlock(service, index) {
  const itemsHtml = service.items.map((item) => `
    <li class="svc-simple-item">
      <span class="svc-simple-icon" aria-hidden="true">${ICON_CHECK}</span>
      <span class="svc-simple-text">${item}</span>
    </li>
  `).join('');

  return `
    <section
      id="${service.id}"
      class="svc-block-white"
      aria-labelledby="${service.id}-title"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div class="flex flex-col lg:flex-row lg:gap-20 lg:items-center">

          <!-- Kolom kiri: eyebrow + judul + summary + CTA -->
          <div class="lg:w-80 flex-shrink-0 mb-12 lg:mb-0" data-aos="fade-up">
            <div class="svc-eyebrow mb-6">
              <span class="svc-eyebrow-num">${service.order}</span>
              <span class="svc-eyebrow-rule" aria-hidden="true"></span>
              <span style="font-family:var(--font-montserrat);font-size:0.65rem;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;color:var(--color-gold);">Layanan</span>
            </div>

            <h2 class="svc-block-title-dark" id="${service.id}-title" style="color:#0a0a0a;">${service.title}</h2>
            <p class="svc-block-title-id">${service.titleId}</p>

            <div class="svc-text-divider mt-6" aria-hidden="true"></div>

            <p class="svc-summary-dark">${service.summary}</p>

            <a href="/contact.html?service=${service.id}"
               class="svc-cta-pill mt-6"
               aria-label="Konsultasi ${service.title}">
              Konsultasi Sekarang
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>

          <!-- Kolom kanan: list simple tanpa card -->
          <div class="flex-1" data-aos="fade-up" data-aos-delay="80">
            <ul class="svc-simple-list" aria-label="Cakupan layanan ${service.title}">
              ${itemsHtml}
            </ul>
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
        <div class="section-label mb-6">Hubungi Kami</div>
        <h2 class="section-title mb-6">Butuh <span class="text-gold-gradient">Layanan</span> Kami?</h2>
        <p class="font-poppins text-sm leading-8 mb-10 max-w-xl mx-auto" style="color:rgba(255,255,255,0.5);">
          Konsultasikan kebutuhan proyek Anda dengan tim ahli kami. Gratis konsultasi, respon cepat.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="https://wa.me/${whatsapp}" target="_blank" rel="noopener" class="btn-gold">WhatsApp Sekarang</a>
          <a href="/contact.html" class="btn-outline-gold">Isi Formulir</a>
        </div>
      </div>
    </section>
  `;
}