/**
 * pricing.view.js
 * VIEW LAYER — Menyusun seluruh section halaman Pricing (Harga).
 *
 * PERUBAHAN:
 * - Semua section pakai section-dark (background hitam).
 * - Kartu harga: semua teks putih dan gold, TIDAK ADA teks hitam.
 * - renderPricingCard diinline di sini agar teks bisa dikontrol penuh
 *   tanpa bergantung pada cards.view.js yang mungkin masih pakai kelas lama.
 */

function renderPricingCard(plan, { formatIDR }) {
  const highlightClass = plan.highlighted ? 'pricing-card--highlight' : '';
  const badge = plan.highlighted
    ? `<div class="pricing-badge">Paling Populer</div>`
    : '';

  const featureList = plan.features
    .map(
      (f) => `
      <li class="flex items-start gap-3">
        <svg class="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7L5.5 10.5L12 3.5" stroke="#C9A44A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="font-poppins text-xs leading-relaxed" style="color:rgba(255,255,255,0.75);">${f}</span>
      </li>`
    )
    .join('');

  return `
    <div class="pricing-card ${highlightClass} relative">
      ${badge}

      <!-- Nama paket -->
      <div class="font-montserrat font-700 text-xs tracking-widest uppercase mb-3" style="color:var(--color-gold);">
        ${plan.name}
      </div>

      <!-- Deskripsi -->
      <p class="font-poppins text-xs leading-relaxed mb-6" style="color:rgba(255,255,255,0.55);">
        ${plan.description}
      </p>

      <!-- Harga -->
      <div class="mb-1" style="color:#ffffff;">
        <span class="font-montserrat font-900 text-2xl">${formatIDR(plan.startingPrice)}</span>
      </div>
      <div class="font-poppins text-xs mb-8" style="color:rgba(255,255,255,0.45);">
        mulai dari ${plan.unit}
      </div>

      <!-- Divider -->
      <div style="height:1px;background:rgba(201,164,74,0.2);margin-bottom:20px;"></div>

      <!-- Fitur -->
      <ul class="space-y-3 mb-8">
        ${featureList}
      </ul>

      <!-- CTA -->
      <a
        href="/contact.html?paket=${plan.id}"
        class="${plan.highlighted ? 'btn-gold' : 'btn-outline-gold'} w-full justify-center text-center"
        style="display:flex;"
      >
        Konsultasi Sekarang
      </a>
    </div>
  `;
}

export function renderPricingHero() {
  return `
    <section class="pt-32 pb-16 relative overflow-hidden section-dark" style="background:#0a0a0a;">
      <div class="absolute inset-0 opacity-5 services-hero-radial"></div>
      <div class="max-w-3xl mx-auto px-6 relative z-10 text-center" data-aos="fade-up">
        <div class="section-label mb-4">Harga &amp; Paket</div>
        <h1 class="section-title mb-6" style="color:#ffffff;">
          Investasi Untuk <span class="text-gold-gradient">Proyek Anda</span>
        </h1>
        <div class="gold-line mx-auto mb-8"></div>
        <p class="font-poppins text-sm leading-8 max-w-2xl mx-auto" style="color:rgba(255,255,255,0.7);">
          Transparansi biaya adalah bagian dari komitmen kami. Berikut estimasi paket layanan —
          penawaran final akan disesuaikan dengan kebutuhan spesifik proyek Anda.
        </p>
      </div>
    </section>
  `;
}

export function renderPricingGrid(plans, { formatIDR }) {
  const cards = plans.map((p) => renderPricingCard(p, { formatIDR })).join('');
  return `
    <section class="py-20 section-dark" style="background:#0a0a0a;">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Sub-header section -->
        <div class="text-center mb-12" data-aos="fade-up">
          <div class="section-label mb-3">Paket Layanan</div>
          <h2 class="section-title" style="color:#ffffff;">
            Pilih Paket <span class="text-gold-gradient">Yang Tepat</span>
          </h2>
          <div class="gold-line mx-auto mt-5"></div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

export function renderPricingNotes(notes) {
  const items = notes
    .map(
      (n) => `
    <li class="flex gap-3 items-start">
      <div class="dot-gold mt-2 flex-shrink-0"></div>
      <span class="font-poppins text-sm leading-7" style="color:rgba(255,255,255,0.7);">${n}</span>
    </li>`
    )
    .join('');
  return `
    <section class="py-16 section-dark" style="background:#0a0a0a;border-top:1px solid rgba(201,164,74,0.12);">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-10" data-aos="fade-up">
          <div class="section-label mb-4">Perlu Diketahui</div>
          <h2 class="section-title" style="color:#ffffff;">
            Catatan <span class="text-gold-gradient">Penting</span>
          </h2>
        </div>
        <ul class="space-y-4" data-aos="fade-up" data-aos-delay="150">${items}</ul>
      </div>
    </section>
  `;
}

export function renderPricingCta({ whatsapp }) {
  return `
    <section class="py-20 relative overflow-hidden cta-banner-bg">
      <div class="absolute inset-0 opacity-10 cta-radial"></div>
      <div class="max-w-4xl mx-auto px-6 text-center relative z-10" data-aos="fade-up">
        <div class="section-label mb-6">Konsultasi Gratis</div>
        <h2 class="section-title mb-6">
          Dapatkan <span class="text-gold-gradient">Penawaran Khusus</span> Anda
        </h2>
        <p class="font-poppins text-sm leading-8 mb-10 max-w-xl mx-auto" style="color:rgba(255,255,255,0.5);">
          Setiap proyek punya kebutuhan berbeda. Diskusikan detail proyek Anda dan dapatkan estimasi biaya yang akurat.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="https://wa.me/${whatsapp}" target="_blank" rel="noopener" class="btn-gold">Tanya Harga via WhatsApp</a>
          <a href="/contact.html" class="btn-outline-gold">Isi Formulir Konsultasi</a>
        </div>
      </div>
    </section>
  `;
}