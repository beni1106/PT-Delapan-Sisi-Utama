/**
 * blog.model.js — MODEL LAYER
 * PERUBAHAN (i18n): title, excerpt, category sekarang { id, en }.
 * formatDateID() sekarang ikut bahasa aktif (id-ID / en-US).
 */

import { getLang } from '../utils/language.js';

export const blogPosts = [
  {
    id: 'tips-memilih-kontraktor',
    title: {
      id: 'Tips Memilih Kontraktor Konstruksi yang Tepat',
      en: 'Tips for Choosing the Right Construction Contractor',
    },
    excerpt: {
      id: 'Memilih kontraktor yang tepat adalah langkah krusial sebelum memulai proyek. Berikut hal-hal yang perlu diperhatikan.',
      en: 'Choosing the right contractor is a crucial step before starting a project. Here are the things to consider.',
    },
    category: { id: 'Tips & Edukasi', en: 'Tips & Education' },
    date: '2026-05-12',
    author: 'Tim DSU',
    image: '/images/gallery-01.jpg',
    readTime: 5,
  },
  {
    id: 'tren-desain-arsitektur-2026',
    title: {
      id: 'Tren Desain Arsitektur Komersial di 2026',
      en: 'Commercial Architectural Design Trends in 2026',
    },
    excerpt: {
      id: 'Dari fasad hemat energi hingga ruang fleksibel, simak tren desain yang banyak diminati klien komersial tahun ini.',
      en: 'From energy-efficient facades to flexible spaces, here are the design trends most favored by commercial clients this year.',
    },
    category: { id: 'Inspirasi Desain', en: 'Design Inspiration' },
    date: '2026-04-28',
    author: 'Tim DSU',
    image: '/images/gallery-05.jpg',
    readTime: 6,
  },
  {
    id: 'pentingnya-pengawasan-proyek',
    title: {
      id: 'Mengapa Pengawasan Proyek Tidak Boleh Dilewatkan',
      en: 'Why Project Supervision Should Never Be Skipped',
    },
    excerpt: {
      id: 'Pengawasan yang ketat memastikan proyek selesai sesuai spesifikasi, jadwal, dan anggaran. Ini alasannya.',
      en: 'Strict supervision ensures projects finish according to specification, schedule, and budget. Here\u2019s why.',
    },
    category: { id: 'Manajemen Proyek', en: 'Project Management' },
    date: '2026-03-15',
    author: 'Tim DSU',
    image: '/images/gallery-09.jpg',
    readTime: 4,
  },
];

export function getPostById(id) {
  return blogPosts.find((p) => p.id === id) ?? null;
}

/** Format tanggal mengikuti bahasa aktif (id-ID / en-US) */
export function formatDateID(isoDate) {
  const lang = getLang();
  const locale = lang === 'en' ? 'en-US' : 'id-ID';
  return new Date(isoDate).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}