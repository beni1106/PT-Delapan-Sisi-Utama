/**
 * blogDetail.view.js
 * VIEW LAYER — Menyusun halaman detail satu artikel blog.
 */

export function renderBlogDetailHero(post, { formatDateID }) {
  return `
    <section class="pt-32 pb-12 relative overflow-hidden services-hero-bg">
      <div class="absolute inset-0 opacity-5 services-hero-radial"></div>
      <div class="max-w-4xl mx-auto px-6 relative z-10" data-aos="fade-up">
        <a href="/blog.html" class="back-link mb-6">&larr; Kembali ke Blog</a>
        <div class="section-label mb-4">${post.category}</div>
        <h1 class="section-title mb-6">${post.title}</h1>
        <div class="flex items-center gap-4 text-white/40 text-xs font-poppins">
          <span>${post.author}</span>
          <span>&middot;</span>
          <span>${formatDateID(post.date)}</span>
          <span>&middot;</span>
          <span>${post.readTime} menit baca</span>
        </div>
      </div>
    </section>
  `;
}

export function renderBlogDetailBody(post) {
  // CATATAN: content lengkap artikel adalah PLACEHOLDER.
  // Ganti dengan isi artikel asli di models/blog.model.js (tambahkan field `content`).
  return `
    <section class="py-12">
      <div class="max-w-4xl mx-auto px-6">
        <div class="aspect-video overflow-hidden rounded-sm border border-gold/15 mb-10" data-aos="fade-up">
          <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover" loading="lazy" />
        </div>
        <div class="prose-content" data-aos="fade-up" data-aos-delay="100">
          <p>${post.excerpt}</p>
          <p>
            Konten lengkap artikel ini akan segera ditambahkan. Untuk saat ini, halaman ini menampilkan
            struktur tampilan detail artikel — judul, gambar utama, ringkasan, dan tata letak baca yang nyaman.
          </p>
          <p>
            Hubungi tim kami melalui WhatsApp atau halaman kontak apabila Anda ingin mendiskusikan
            topik ini lebih lanjut untuk kebutuhan proyek Anda.
          </p>
        </div>
      </div>
    </section>
  `;
}

export function renderBlogNotFound() {
  return `
    <section class="pt-40 pb-20">
      <div class="max-w-2xl mx-auto px-6 text-center" data-aos="fade-up">
        <div class="section-label mb-4">404</div>
        <h1 class="section-title mb-6">Artikel Tidak <span class="text-gold-gradient">Ditemukan</span></h1>
        <p class="text-white/50 font-poppins text-sm leading-7 mb-10">
          Artikel yang Anda cari mungkin telah dipindahkan atau dihapus.
        </p>
        <a href="/blog.html" class="btn-gold">Kembali ke Blog</a>
      </div>
    </section>
  `;
}/**
 * blogDetail.view.js
 * VIEW LAYER — Menyusun halaman detail satu artikel blog.
 */

export function renderBlogDetailHero(post, { formatDateID }) {
  return `
    <section class="pt-32 pb-12 relative overflow-hidden services-hero-bg">
      <div class="absolute inset-0 opacity-5 services-hero-radial"></div>
      <div class="max-w-4xl mx-auto px-6 relative z-10" data-aos="fade-up">
        <a href="/blog.html" class="back-link mb-6">&larr; Kembali ke Blog</a>
        <div class="section-label mb-4">${post.category}</div>
        <h1 class="section-title mb-6">${post.title}</h1>
        <div class="flex items-center gap-4 text-white/40 text-xs font-poppins">
          <span>${post.author}</span>
          <span>&middot;</span>
          <span>${formatDateID(post.date)}</span>
          <span>&middot;</span>
          <span>${post.readTime} menit baca</span>
        </div>
      </div>
    </section>
  `;
}

export function renderBlogDetailBody(post) {
  // CATATAN: content lengkap artikel adalah PLACEHOLDER.
  // Ganti dengan isi artikel asli di models/blog.model.js (tambahkan field `content`).
  return `
    <section class="py-12">
      <div class="max-w-4xl mx-auto px-6">
        <div class="aspect-video overflow-hidden rounded-sm border border-gold/15 mb-10" data-aos="fade-up">
          <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover" loading="lazy" />
        </div>
        <div class="prose-content" data-aos="fade-up" data-aos-delay="100">
          <p>${post.excerpt}</p>
          <p>
            Konten lengkap artikel ini akan segera ditambahkan. Untuk saat ini, halaman ini menampilkan
            struktur tampilan detail artikel — judul, gambar utama, ringkasan, dan tata letak baca yang nyaman.
          </p>
          <p>
            Hubungi tim kami melalui WhatsApp atau halaman kontak apabila Anda ingin mendiskusikan
            topik ini lebih lanjut untuk kebutuhan proyek Anda.
          </p>
        </div>
      </div>
    </section>
  `;
}

export function renderBlogNotFound() {
  return `
    <section class="pt-40 pb-20">
      <div class="max-w-2xl mx-auto px-6 text-center" data-aos="fade-up">
        <div class="section-label mb-4">404</div>
        <h1 class="section-title mb-6">Artikel Tidak <span class="text-gold-gradient">Ditemukan</span></h1>
        <p class="text-white/50 font-poppins text-sm leading-7 mb-10">
          Artikel yang Anda cari mungkin telah dipindahkan atau dihapus.
        </p>
        <a href="/blog.html" class="btn-gold">Kembali ke Blog</a>
      </div>
    </section>
  `;
}