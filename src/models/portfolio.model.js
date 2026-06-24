/**
 * portfolio.model.js
 * MODEL LAYER — Data portofolio proyek.
 *
 * STRUKTUR KATEGORI (per 2 poster referensi resmi PT DSU):
 *   1. Komersial & Publik        — resto, bank, kantor, ruko, gudang, dll
 *   2. Perumahan                 — rumah tinggal, cluster, kawasan
 *   3. Interior Rumah            — sub dari Perumahan, filter tersendiri
 *   4. Industri & Infrastruktur  — pabrik, struktur baja, sipil, MEP, dll
 *   5. Pengawasan & Manajemen Proyek — supervisi, manajemen, QC
 *   6. Engineering & Supervision — perencanaan struktur + supervisi/QC
 *
 * Proyek lama (9 item) yang sudah punya foto asli tetap dipertahankan,
 * dipetakan ke kategori barunya masing-masing. Item baru dari poster
 * yang BELUM punya foto asli diberi `coverImage: null` dan
 * `gallery: []` — UI grid/detail akan menampilkan placeholder abu-abu,
 * bukan gambar rusak. Tinggal isi path foto saat sudah tersedia.
 */

export const portfolioCategories = [
  { key: 'all', label: 'Semua' },
  { key: 'komersial-publik', label: 'Komersial & Publik' },
  { key: 'perumahan', label: 'Perumahan' },
  { key: 'interior-rumah', label: 'Interior Rumah' },
  { key: 'industri-infrastruktur', label: 'Industri & Infrastruktur' },
  { key: 'pengawasan-manajemen', label: 'Pengawasan & Manajemen Proyek' },
  { key: 'engineering-supervision', label: 'Engineering & Supervision' },
];

export const portfolioProjects = [
  // ═══════════════════════════════════════════════════════
  // 1. KOMERSIAL & PUBLIK
  // ═══════════════════════════════════════════════════════
  {
    slug: 'bebek-slamet-resto',
    title: 'Bebek Slamet Resto',
    category: 'komersial-publik',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'bank-bsi',
    title: 'Bank BSI — Kantor Cabang',
    category: 'komersial-publik',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'interior-bank-bsi',
    title: 'Interior Bank BSI',
    category: 'komersial-publik',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'gedung-perkantoran',
    title: 'Gedung Perkantoran',
    category: 'komersial-publik',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'roast-chic-cafe',
    title: 'Roast Chic Cafe',
    category: 'komersial-publik',
    location: 'Batam, Kepulauan Riau',
    year: null,
    coverImage: 'project/images/roast-chic-cafe/exterior-corner-01.webp',
    gallery: [
      'project/images/roast-chic-cafe/exterior-corner-01.webp',
      'project/images/roast-chic-cafe/exterior-corner-02.webp',
      'project/images/roast-chic-cafe/interior-counter-01.webp',
      'project/images/roast-chic-cafe/interior-entrance-01.webp',
      'project/images/roast-chic-cafe/interior-seating-01.webp',
      'project/images/roast-chic-cafe/interior-seating-02.webp',
    ],
  },
  {
    slug: 'candenia-bakery-coworking',
    title: 'Candenia Bakery & Coworking',
    category: 'komersial-publik',
    location: 'Batam, Kepulauan Riau',
    year: null,
    coverImage: 'project/images/candenia-bakery-coworking/coworking-exterior.webp',
    gallery: [
      'project/images/candenia-bakery-coworking/coworking-exterior.webp',
      'project/images/candenia-bakery-coworking/bakery-exterior.webp',
    ],
  },
  {
    slug: 'ruko-red-facade',
    title: 'Ruko 3 Lantai',
    category: 'komersial-publik',
    location: 'Batam, Kepulauan Riau',
    year: 2022,
    coverImage: 'project/images/ruko-red-facade/front-view.webp',
    gallery: [
      'project/images/ruko-red-facade/front-view.webp',
      'project/images/ruko-red-facade/side-view.webp',
    ],
  },
  {
    slug: 'ruko-komersial',
    title: 'Ruko Komersial',
    category: 'komersial-publik',
    location: 'Batam, Kepulauan Riau',
    year: 2022,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'kompleks-komersial',
    title: 'Kompleks Komersial',
    category: 'komersial-publik',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'gudang-logistik',
    title: 'Gudang & Logistik',
    category: 'komersial-publik',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'outdoor-pavilion',
    title: 'Outdoor Pavilion',
    category: 'komersial-publik',
    location: 'Batam, Kepulauan Riau',
    year: null,
    coverImage: '/project/images/outdoor-pavilion/stage-view-01.webp',
    gallery: [
      'project/images/outdoor-pavilion/stage-view-01.webp',
      'project/images/outdoor-pavilion/stage-view-02.webp',
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 2. PERUMAHAN
  // ═══════════════════════════════════════════════════════
  {
    slug: 'rumah-1-lantai-type-36',
    title: 'Rumah 1 Lantai Type 36',
    category: 'perumahan',
    location: 'Batam, Kepulauan Riau',
    year: 2022,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'rumah-1-lantai-type-45',
    title: 'Rumah 1 Lantai Type 45',
    category: 'perumahan',
    location: 'Batam, Kepulauan Riau',
    year: 2022,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'rumah-2-lantai',
    title: 'Rumah 2 Lantai',
    category: 'perumahan',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'cluster-perumahan',
    title: 'Cluster Perumahan',
    category: 'perumahan',
    location: 'Batam, Kepulauan Riau',
    year: 2022,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'pengembangan-kawasan',
    title: 'Pengembangan Kawasan',
    category: 'perumahan',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'buana-duta-bandara',
    title: 'Buana Duta Bandara',
    category: 'perumahan',
    location: 'Batam, Kepulauan Riau',
    year: null,
    coverImage: 'project/images/buana-duta-bandara/house-type-duplex-01.webp',
    gallery: [
      'project/images/buana-duta-bandara/gate-signage.webp',
      'project/images/buana-duta-bandara/house-type-row-01.webp',
      'project/images/buana-duta-bandara/house-type-duplex-01.webp',
      'project/images/buana-duta-bandara/house-type-duplex-02.webp',
      'project/images/buana-duta-bandara/house-type-aerial.webp',
      'project/images/buana-duta-bandara/ruko-3lt-facade-01.webp',
      'project/images/buana-duta-bandara/ruko-3lt-facade-02.webp',
    ],
  },
  {
    slug: 'buana-duta-siteplan',
    title: 'Buana Duta Bandara — Siteplan Kawasan',
    category: 'perumahan',
    location: 'Batam, Kepulauan Riau',
    year: null,
    coverImage: '/project/images/buana-duta-bandara/siteplan-aerial-01.webp',
    gallery: [
      'project/images/buana-duta-bandara/siteplan-aerial-01.webp',
      'project/images/buana-duta-bandara/siteplan-aerial-02.webp',
    ],
  },
  {
    slug: 'the-savero',
    title: 'The Savero',
    category: 'perumahan',
    location: 'Batam, Kepulauan Riau',
    year: null,
    coverImage: 'project/images/the-savero/house-type-yellow-01.webp',
    gallery: [
      'project/images/the-savero/building-mesh-facade-01.webp',
      'project/images/the-savero/building-mesh-facade-02.webp',
      'project/images/the-savero/ruko-balcony-row.webp',
      'project/images/the-savero/house-type-yellow-01.webp',
      'project/images/the-savero/house-type-yellow-02.webp',
    ],
  },
  {
    slug: 'the-savero-siteplan',
    title: 'The Savero — Siteplan Kawasan',
    category: 'perumahan',
    location: 'Batam, Kepulauan Riau',
    year: null,
    coverImage: '/project/images/the-savero/siteplan-aerial.webp',
    gallery: [
      'project/images/the-savero/siteplan-signage.webp',
      'project/images/the-savero/siteplan-aerial.webp',
    ],
  },
  {
    slug: 'private-villas',
    title: 'Private Villas',
    category: 'perumahan',
    location: 'Batam, Kepulauan Riau',
    year: null,
    coverImage: 'project/images/private-villas/villa-tile-roof-front.webp',
    gallery: [
      'project/images/private-villas/villa-tile-roof-front.webp',
      'project/images/private-villas/villa-tile-roof-side.webp',
      'project/images/private-villas/house-white-modern.webp',
      'project/images/private-villas/house-red-accent.webp',
      'project/images/private-villas/house-rooftop-garden.webp',
    ],
  },
  {
    slug: 'staff-housing',
    title: 'Staff Housing',
    category: 'perumahan',
    location: 'Batam, Kepulauan Riau',
    year: null,
    coverImage: 'project/images/staff-housing/barracks-facade.webp',
    gallery: [
      'project/images/staff-housing/barracks-facade.webp',
    ],
  },
  {
    slug: 'aster-hills',
    title: 'Aster Hills — Kantor Pemasaran',
    category: 'perumahan',
    location: 'Jl. Trans Barelang, Batam, Kepulauan Riau',
    year: null,
    coverImage: 'project/images/aster-hills/kantor-pemasaran.webp',
    gallery: [
      'project/images/aster-hills/kantor-pemasaran.webp',
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 3. INTERIOR RUMAH (sub-kategori dari Perumahan)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'interior-ruang-tamu',
    title: 'Interior Ruang Tamu',
    category: 'interior-rumah',
    location: 'Batam, Kepulauan Riau',
    year: null,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'interior-dapur',
    title: 'Interior Dapur',
    category: 'interior-rumah',
    location: 'Batam, Kepulauan Riau',
    year: null,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'interior-kamar-tidur',
    title: 'Interior Kamar Tidur',
    category: 'interior-rumah',
    location: 'Batam, Kepulauan Riau',
    year: null,
    coverImage: null,
    gallery: [],
  },

  // ═══════════════════════════════════════════════════════
  // 4. INDUSTRI & INFRASTRUKTUR
  // ═══════════════════════════════════════════════════════
  {
    slug: 'pabrik-industri',
    title: 'Pabrik Industri',
    category: 'industri-infrastruktur',
    location: 'Batam, Kepulauan Riau',
    year: 2022,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'struktur-baja',
    title: 'Struktur Baja',
    category: 'industri-infrastruktur',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'pekerjaan-sipil',
    title: 'Pekerjaan Sipil',
    category: 'industri-infrastruktur',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'drainase-saluran',
    title: 'Drainase & Saluran',
    category: 'industri-infrastruktur',
    location: 'Batam, Kepulauan Riau',
    year: 2022,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'mechanical-electrical',
    title: 'Mechanical & Electrical',
    category: 'industri-infrastruktur',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'renovasi-gedung',
    title: 'Renovasi Gedung',
    category: 'industri-infrastruktur',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'kawasan-industri',
    title: 'Kawasan Industri',
    category: 'industri-infrastruktur',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },

  // ═══════════════════════════════════════════════════════
  // 5. PENGAWASAN & MANAJEMEN PROYEK
  // ═══════════════════════════════════════════════════════
  {
    slug: 'supervisi-konstruksi',
    title: 'Supervisi Konstruksi',
    category: 'pengawasan-manajemen',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'manajemen-proyek',
    title: 'Manajemen Proyek',
    category: 'pengawasan-manajemen',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'quality-control',
    title: 'Quality Control',
    category: 'pengawasan-manajemen',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },

  // ═══════════════════════════════════════════════════════
  // 6. ENGINEERING & SUPERVISION
  // ═══════════════════════════════════════════════════════
  {
    slug: 'perencanaan-struktur',
    title: 'Perencanaan Struktur',
    category: 'engineering-supervision',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'supervisi-konstruksi-eng',
    title: 'Supervisi Konstruksi',
    category: 'engineering-supervision',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'manajemen-proyek-eng',
    title: 'Manajemen Proyek',
    category: 'engineering-supervision',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
  {
    slug: 'quality-control-eng',
    title: 'Quality Control',
    category: 'engineering-supervision',
    location: 'Batam, Kepulauan Riau',
    year: 2023,
    coverImage: null,
    gallery: [],
  },
];

/** Ambil proyek berdasarkan kategori. category='all' mengembalikan semua. */
export function getProjectsByCategory(category = 'all') {
  if (category === 'all') return portfolioProjects;
  return portfolioProjects.filter((p) => p.category === category);
}

/** Ambil proyek unggulan untuk preview di Home — hanya proyek yang sudah punya foto asli */
export function getFeaturedProjects() {
  const featuredSlugs = [
    'roast-chic-cafe',
    'the-savero',
    'private-villas',
    'buana-duta-bandara',
    'candenia-bakery-coworking',
    'outdoor-pavilion',
    'ruko-red-facade',
  ];
  return portfolioProjects.filter((p) => featuredSlugs.includes(p.slug));
}

/** Cari satu proyek lewat slug — dipakai oleh halaman detail proyek */
export function getProjectBySlug(slug) {
  return portfolioProjects.find((p) => p.slug === slug) ?? null;
}