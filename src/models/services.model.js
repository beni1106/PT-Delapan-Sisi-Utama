/**
 * services.model.js — MODEL LAYER
 * PERUBAHAN (i18n): summary sekarang { id, en }.
 * title (EN) + titleId (ID) DIBIARKAN seperti semula — bilingual permanen
 * (sama seperti coreValues), bukan target toggle.
 * items[] dibiarkan apa adanya (istilah teknis, sama di kedua bahasa).
 */

export const services = [
  {
    id: 'engineering',
    order: '01',
    title: 'Engineering Services',
    titleId: 'Layanan Engineering',
    summary: {
      id: 'Layanan rekayasa teknis komprehensif yang mencakup desain arsitektural, sipil, mekanikal, dan elektrikal — dari konsep awal hingga gambar kerja final yang siap pelaksanaan.',
      en: 'Comprehensive technical engineering services covering architectural, civil, mechanical, and electrical design — from initial concept to final, execution-ready working drawings.',
    },
    icon: 'drafting-compass',
    image: '/project/images/layanan/engineeringservices.webp',
    items: [
      'Architectural Design',
      'Civil Engineering',
      'Mechanical Engineering',
      'Electrical Engineering',
      'Design & Planning',
      'Shop Drawing',
      'As Built Drawing',
      'Structural Design',
    ],
  },
  {
    id: 'construction',
    order: '02',
    title: 'Construction Services',
    titleId: 'Layanan Konstruksi',
    summary: {
      id: 'Pelaksanaan konstruksi bangunan dengan standar kualitas tinggi — dari gedung komersial, hunian, industri, hingga renovasi dan interior fit-out dengan presisi dan ketepatan waktu.',
      en: 'High-quality building construction execution — from commercial, residential, and industrial buildings to renovation and interior fit-out, with precision and timeliness.',
    },
    icon: 'building',
    image: '/project/images/layanan/ConstructionServices.webp',
    items: [
      'Building Construction',
      'Commercial Buildings',
      'Industrial Buildings',
      'Renovation & Upgrading',
      'Infrastructure Development',
      'Interior Fit-Out',
      'Steel Structure',
      'MEP Works',
    ],
  },
  {
    id: 'property',
    order: '03',
    title: 'Property Development',
    titleId: 'Pengembangan Properti',
    summary: {
      id: 'Pengembangan properti residensial, komersial, dan mixed-use yang berorientasi pada nilai investasi jangka panjang dan kepuasan penghuni di setiap tahap pengerjaan.',
      en: 'Residential, commercial, and mixed-use property development focused on long-term investment value and occupant satisfaction at every stage.',
    },
    icon: 'home-modern',
    image: '/project/images/layanan/PropertyDevelopment.webp',
    items: [
      'Residential Development',
      'Commercial Development',
      'Mixed Use Development',
      'Land Development',
      'Housing Cluster',
      'Industrial Estate',
      'Commercial Complex',
      'Property Consulting',
    ],
  },
  {
    id: 'supervision',
    order: '04',
    title: 'Project Supervision',
    titleId: 'Pengawasan Proyek',
    summary: {
      id: 'Pengawasan dan manajemen proyek yang ketat untuk memastikan setiap tahap pelaksanaan berjalan sesuai spesifikasi teknis, jadwal yang disepakati, dan standar keselamatan kerja.',
      en: 'Strict project supervision and management to ensure every execution stage meets technical specifications, agreed schedules, and work safety standards.',
    },
    icon: 'clipboard-check',
    image: '/project/images/layanan/ProjectSupervision.webp',
    items: [
      'Construction Supervision',
      'Project Management',
      'Quality Control',
      'Site Inspection',
      'Progress Monitoring',
      'Building Management',
      'Cost Control',
      'Safety Inspection',
    ],
  },
];

/** Cari satu service berdasarkan id (dipakai controller bila perlu) */
export function getServiceById(id) {
  return services.find((s) => s.id === id) ?? null;
}