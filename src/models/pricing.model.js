/**
 * pricing.model.js — MODEL LAYER
 * PERUBAHAN (i18n): name, description, features, pricingNotes sekarang { id, en }.
 */

export const pricingPlans = [
  {
    id: 'engineering-design',
    name: { id: 'Jasa Engineering & Desain', en: 'Engineering & Design Services' },
    description: {
      id: 'Perencanaan dan gambar teknis untuk bangunan baru.',
      en: 'Planning and technical drawings for new buildings.',
    },
    unit: '/ m²',
    startingPrice: 75000,
    currency: 'IDR',
    highlighted: false,
    features: [
      { id: 'Konsultasi awal & survei lokasi', en: 'Initial consultation & site survey' },
      { id: 'Desain arsitektur konseptual', en: 'Conceptual architectural design' },
      { id: 'Gambar kerja (DED)', en: 'Detailed engineering drawings (DED)' },
      { id: 'Perhitungan struktur dasar', en: 'Basic structural calculations' },
      { id: 'Revisi desain 2x', en: '2x design revisions' },
    ],
  },
  {
    id: 'construction-standard',
    name: { id: 'Konstruksi Standar', en: 'Standard Construction' },
    description: {
      id: 'Pelaksanaan pembangunan dengan material standar menengah.',
      en: 'Construction execution with mid-range standard materials.',
    },
    unit: '/ m²',
    startingPrice: 4200000,
    currency: 'IDR',
    highlighted: true,
    features: [
      { id: 'Manajemen proyek penuh', en: 'Full project management' },
      { id: 'Material standar SNI', en: 'SNI-standard materials' },
      { id: 'Tim konstruksi berpengalaman', en: 'Experienced construction team' },
      { id: 'Laporan progres berkala', en: 'Regular progress reports' },
      { id: 'Garansi struktur 1 tahun', en: '1-year structural warranty' },
    ],
  },
  {
    id: 'construction-premium',
    name: { id: 'Konstruksi Premium', en: 'Premium Construction' },
    description: {
      id: 'Pelaksanaan pembangunan dengan material kelas atas dan finishing detail.',
      en: 'Construction execution with top-grade materials and detailed finishing.',
    },
    unit: '/ m²',
    startingPrice: 6500000,
    currency: 'IDR',
    highlighted: false,
    features: [
      { id: 'Manajemen proyek penuh', en: 'Full project management' },
      { id: 'Material premium pilihan', en: 'Selected premium materials' },
      { id: 'Interior fit-out dasar', en: 'Basic interior fit-out' },
      { id: 'Laporan progres mingguan', en: 'Weekly progress reports' },
      { id: 'Garansi struktur 2 tahun', en: '2-year structural warranty' },
    ],
  },
  {
    id: 'supervision-only',
    name: { id: 'Pengawasan Proyek', en: 'Project Supervision' },
    description: {
      id: 'Quality control & supervisi untuk proyek yang dikerjakan kontraktor lain.',
      en: 'Quality control & supervision for projects executed by other contractors.',
    },
    unit: '/ bulan',
    startingPrice: 8500000,
    currency: 'IDR',
    highlighted: false,
    features: [
      { id: 'Inspeksi lokasi berkala', en: 'Regular site inspections' },
      { id: 'Quality control material & pekerjaan', en: 'Material & workmanship quality control' },
      { id: 'Laporan progres ke pemilik proyek', en: 'Progress reports to project owner' },
      { id: 'Koordinasi dengan kontraktor', en: 'Coordination with contractors' },
      { id: 'Rekomendasi perbaikan', en: 'Improvement recommendations' },
    ],
  },
];

export const pricingNotes = [
  {
    id: 'Harga di atas merupakan estimasi awal (starting price) dan dapat berubah sesuai kompleksitas, lokasi, dan spesifikasi proyek.',
    en: 'The prices above are initial estimates (starting price) and may change based on project complexity, location, and specifications.',
  },
  {
    id: 'Penawaran final akan diberikan setelah survei lokasi dan diskusi kebutuhan detail bersama tim kami.',
    en: 'The final offer will be given after a site survey and detailed needs discussion with our team.',
  },
  {
    id: 'Pembayaran dapat dilakukan secara bertahap sesuai progres pekerjaan (termin).',
    en: 'Payment can be made in installments according to work progress (terms).',
  },
];

/** Format angka ke Rupiah */
export function formatIDR(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}