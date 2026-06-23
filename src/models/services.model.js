/**
 * services.model.js
 * MODEL LAYER — Data bidang usaha / layanan perusahaan.
 *
 * Path gambar mengacu ke /project/images/layanan/
 * sesuai nama file yang sudah ada di folder public/project/images/layanan/.
 */

export const services = [
  {
    id: 'engineering',
    order: '01',
    title: 'Engineering Services',
    titleId: 'Layanan Engineering',
    summary: 'Layanan rekayasa teknis komprehensif yang mencakup desain arsitektural, sipil, mekanikal, dan elektrikal — dari konsep awal hingga gambar kerja final yang siap pelaksanaan.',
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
    summary: 'Pelaksanaan konstruksi bangunan dengan standar kualitas tinggi — dari gedung komersial, hunian, industri, hingga renovasi dan interior fit-out dengan presisi dan ketepatan waktu.',
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
    summary: 'Pengembangan properti residensial, komersial, dan mixed-use yang berorientasi pada nilai investasi jangka panjang dan kepuasan penghuni di setiap tahap pengerjaan.',
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
    summary: 'Pengawasan dan manajemen proyek yang ketat untuk memastikan setiap tahap pelaksanaan berjalan sesuai spesifikasi teknis, jadwal yang disepakati, dan standar keselamatan kerja.',
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