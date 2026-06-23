/**
 * blog.model.js
 * MODEL LAYER — Data artikel/blog.
 *
 * CATATAN: Konten di bawah adalah PLACEHOLDER untuk struktur halaman Blog.
 * Ganti title, excerpt, dan content dengan artikel asli nanti.
 */

export const blogPosts = [
  {
    id: 'tips-memilih-kontraktor',
    title: 'Tips Memilih Kontraktor Konstruksi yang Tepat',
    excerpt: 'Memilih kontraktor yang tepat adalah langkah krusial sebelum memulai proyek. Berikut hal-hal yang perlu diperhatikan.',
    category: 'Tips & Edukasi',
    date: '2026-05-12',
    author: 'Tim DSU',
    image: '/images/gallery-01.jpg',
    readTime: 5,
  },
  {
    id: 'tren-desain-arsitektur-2026',
    title: 'Tren Desain Arsitektur Komersial di 2026',
    excerpt: 'Dari fasad hemat energi hingga ruang fleksibel, simak tren desain yang banyak diminati klien komersial tahun ini.',
    category: 'Inspirasi Desain',
    date: '2026-04-28',
    author: 'Tim DSU',
    image: '/images/gallery-05.jpg',
    readTime: 6,
  },
  {
    id: 'pentingnya-pengawasan-proyek',
    title: 'Mengapa Pengawasan Proyek Tidak Boleh Dilewatkan',
    excerpt: 'Pengawasan yang ketat memastikan proyek selesai sesuai spesifikasi, jadwal, dan anggaran. Ini alasannya.',
    category: 'Manajemen Proyek',
    date: '2026-03-15',
    author: 'Tim DSU',
    image: '/images/gallery-09.jpg',
    readTime: 4,
  },
];

export function getPostById(id) {
  return blogPosts.find((p) => p.id === id) ?? null;
}

export function formatDateID(isoDate) {
  return new Date(isoDate).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}