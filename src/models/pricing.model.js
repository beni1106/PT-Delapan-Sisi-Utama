/**
 * pricing.model.js
 * MODEL LAYER — Data paket harga.
 *
 * CATATAN: Angka di bawah adalah PLACEHOLDER agar struktur halaman Pricing
 * bisa langsung dipakai. Ganti `pricePerM2`, `startingPrice`, dan `notes`
 * sesuai kebijakan harga PT. Delapan Sisi Utama yang sebenarnya.
 */

export const pricingPlans = [
  {
    id: 'engineering-design',
    name: 'Jasa Engineering & Desain',
    description: 'Perencanaan dan gambar teknis untuk bangunan baru.',
    unit: '/ m²',
    startingPrice: 75000,
    currency: 'IDR',
    highlighted: false,
    features: [
      'Konsultasi awal & survei lokasi',
      'Desain arsitektur konseptual',
      'Gambar kerja (DED)',
      'Perhitungan struktur dasar',
      'Revisi desain 2x',
    ],
  },
  {
    id: 'construction-standard',
    name: 'Konstruksi Standar',
    description: 'Pelaksanaan pembangunan dengan material standar menengah.',
    unit: '/ m²',
    startingPrice: 4200000,
    currency: 'IDR',
    highlighted: true,
    features: [
      'Manajemen proyek penuh',
      'Material standar SNI',
      'Tim konstruksi berpengalaman',
      'Laporan progres berkala',
      'Garansi struktur 1 tahun',
    ],
  },
  {
    id: 'construction-premium',
    name: 'Konstruksi Premium',
    description: 'Pelaksanaan pembangunan dengan material kelas atas dan finishing detail.',
    unit: '/ m²',
    startingPrice: 6500000,
    currency: 'IDR',
    highlighted: false,
    features: [
      'Manajemen proyek penuh',
      'Material premium pilihan',
      'Interior fit-out dasar',
      'Laporan progres mingguan',
      'Garansi struktur 2 tahun',
    ],
  },
  {
    id: 'supervision-only',
    name: 'Pengawasan Proyek',
    description: 'Quality control & supervisi untuk proyek yang dikerjakan kontraktor lain.',
    unit: '/ bulan',
    startingPrice: 8500000,
    currency: 'IDR',
    highlighted: false,
    features: [
      'Inspeksi lokasi berkala',
      'Quality control material & pekerjaan',
      'Laporan progres ke pemilik proyek',
      'Koordinasi dengan kontraktor',
      'Rekomendasi perbaikan',
    ],
  },
];

export const pricingNotes = [
  'Harga di atas merupakan estimasi awal (starting price) dan dapat berubah sesuai kompleksitas, lokasi, dan spesifikasi proyek.',
  'Penawaran final akan diberikan setelah survei lokasi dan diskusi kebutuhan detail bersama tim kami.',
  'Pembayaran dapat dilakukan secara bertahap sesuai progres pekerjaan (termin).',
];

/** Format angka ke Rupiah */
export function formatIDR(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}