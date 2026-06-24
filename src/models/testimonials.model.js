/**
 * testimonials.model.js — MODEL LAYER
 * PERUBAHAN (i18n): quote dan role sekarang { id, en }.
 */

export const testimonials = [
  {
    id: 1,
    name: 'Ahmad Fauzi',
    role: { id: 'Owner, PT. Maju Jaya Batam', en: 'Owner, PT. Maju Jaya Batam' },
    rating: 5,
    quote: {
      id: 'PT. Delapan Sisi Utama menyelesaikan proyek konstruksi gedung kami tepat waktu dan sesuai spesifikasi. Tim mereka sangat profesional dan komunikatif.',
      en: 'PT. Delapan Sisi Utama completed our building construction project on time and according to specifications. Their team was very professional and communicative.',
    },
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    role: { id: 'Direktur, Bank BSI Cabang Batam', en: 'Director, BSI Bank Batam Branch' },
    rating: 5,
    quote: {
      id: 'Hasil kerja DSU sangat memuaskan. Mereka memahami kebutuhan kami dengan baik dan memberikan solusi yang tepat untuk interior kantor.',
      en: 'DSU\u2019s work was very satisfying. They understood our needs well and provided the right solution for our office interior.',
    },
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: { id: 'Developer, Perumahan Batam Indah', en: 'Developer, Batam Indah Housing' },
    rating: 5,
    quote: {
      id: 'Pengawasan proyek yang ketat dan manajemen yang rapi membuat proyek perumahan kami berjalan lancar dari awal hingga akhir.',
      en: 'Strict project supervision and well-organized management kept our housing project running smoothly from start to finish.',
    },
  },
  {
    id: 4,
    name: 'Rudi Hartono',
    role: { id: 'GM, Kawasan Industri Batamindo', en: 'GM, Batamindo Industrial Park' },
    rating: 5,
    quote: {
      id: 'Proyek pabrik industri kami selesai tepat waktu dengan kualitas yang melebihi ekspektasi. Tim DSU selalu update progres kepada kami.',
      en: 'Our industrial factory project was completed on time with quality that exceeded expectations. The DSU team always kept us updated on progress.',
    },
  },
];