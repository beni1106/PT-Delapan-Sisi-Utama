/**
 * company.model.js — MODEL LAYER
 * PERUBAHAN (i18n): whyChooseUs[].description, leadership[].role,
 * leadership[].bio, missionList[], companyProfile.philosophy, stats[].label
 * sekarang { id, en }. Gunakan pick() di layer View.
 */

export const companyProfile = {
  name: 'PT. Delapan Sisi Utama',
  shortName: 'DSU',
  tagline: 'Building Excellence, Delivering Trust',
  founded: 2021,
  about: {
    id: `PT Delapan Sisi Utama merupakan perusahaan yang bergerak di bidang Engineering, Construction,
Property Development, dan Project Supervision yang berkomitmen menghadirkan solusi profesional,
inovatif, dan berkelanjutan bagi setiap kebutuhan pelanggan.`,
    en: `PT Delapan Sisi Utama is an Engineering, Construction, Property Development, and Project Supervision
company committed to delivering professional, innovative, and sustainable solutions for every client's needs.`,
  },
  philosophy: {
    id: `PT Delapan Sisi Utama didirikan atas keyakinan bahwa keberhasilan sebuah proyek dibangun melalui
kualitas pekerjaan yang unggul dan kepercayaan yang berkelanjutan. Nama Delapan Sisi Utama merepresentasikan
delapan nilai inti yang menjadi landasan perusahaan dalam menjalankan setiap aktivitas bisnis dan proyek.`,
    en: `PT Delapan Sisi Utama was founded on the belief that a project's success is built through superior
workmanship and lasting trust. The name Delapan Sisi Utama (Eight Core Sides) represents eight core values
that form the foundation of the company in running every business activity and project.`,
  },
};

export const vision = {
  id: 'Menjadi perusahaan Engineering, Construction, dan Property Development yang terpercaya, profesional, dan berdaya saing nasional melalui kualitas, inovasi, dan integritas.',
  en: 'To become a trusted, professional, and nationally competitive Engineering, Construction, and Property Development company through quality, innovation, and integrity.',
};

export const missionList = [
  {
    id: 'Menyediakan layanan konstruksi dan engineering yang berkualitas tinggi.',
    en: 'Providing high-quality construction and engineering services.',
  },
  {
    id: 'Mengutamakan keselamatan kerja dalam setiap kegiatan operasional.',
    en: 'Prioritizing work safety in every operational activity.',
  },
  {
    id: 'Mengembangkan sumber daya manusia yang kompeten dan berintegritas.',
    en: 'Developing competent and high-integrity human resources.',
  },
  {
    id: 'Memberikan solusi yang efektif dan efisien bagi pelanggan.',
    en: 'Providing effective and efficient solutions for clients.',
  },
  {
    id: 'Membangun hubungan jangka panjang yang saling menguntungkan dengan seluruh pemangku kepentingan.',
    en: 'Building mutually beneficial long-term relationships with all stakeholders.',
  },
  {
    id: 'Mendukung pembangunan berkelanjutan melalui inovasi dan tata kelola yang baik.',
    en: 'Supporting sustainable development through innovation and good governance.',
  },
];

/**
 * Delapan Pilar Utama. title (EN) + subtitle (ID) SENGAJA ditampilkan
 * bersamaan secara permanen sebagai elemen desain bilingual.
 */
export const coreValues = [
  { id: 1, key: 'integrity', title: 'Integrity', subtitle: 'Integritas', icon: 'shield-check' },
  { id: 2, key: 'professionalism', title: 'Professionalism', subtitle: 'Profesionalisme', icon: 'briefcase' },
  { id: 3, key: 'quality', title: 'Quality', subtitle: 'Kualitas', icon: 'star' },
  { id: 4, key: 'safety', title: 'Safety', subtitle: 'Keselamatan', icon: 'shield' },
  { id: 5, key: 'innovation', title: 'Innovation', subtitle: 'Inovasi', icon: 'bulb' },
  { id: 6, key: 'commitment', title: 'Commitment', subtitle: 'Komitmen', icon: 'target' },
  { id: 7, key: 'collaboration', title: 'Collaboration', subtitle: 'Kolaborasi', icon: 'handshake' },
  { id: 8, key: 'sustainability', title: 'Sustainability', subtitle: 'Keberlanjutan', icon: 'leaf' },
];

export const whyChooseUs = [
  {
    title: 'Professional Team',
    description: {
      id: 'Didukung tenaga profesional dan berpengalaman di bidang engineering dan konstruksi.',
      en: 'Supported by professional and experienced personnel in engineering and construction.',
    },
    icon: 'users',
  },
  {
    title: 'Integrated Services',
    description: {
      id: 'Menyediakan layanan terintegrasi dari perencanaan hingga pelaksanaan proyek.',
      en: 'Providing integrated services from project planning to execution.',
    },
    icon: 'layers',
  },
  {
    title: 'Quality Assurance',
    description: { id: 'Mengutamakan standar mutu dalam setiap pekerjaan.', en: 'Upholding quality standards in every job.' },
    icon: 'badge-check',
  },
  {
    title: 'Safety Commitment',
    description: { id: 'Menjadikan keselamatan kerja sebagai prioritas utama.', en: 'Making work safety a top priority.' },
    icon: 'shield',
  },
  {
    title: 'Customer Satisfaction',
    description: {
      id: 'Berorientasi pada kepuasan pelanggan dan hubungan jangka panjang.',
      en: 'Focused on customer satisfaction and long-term relationships.',
    },
    icon: 'heart-handshake',
  },
];

export const leadership = [
  {
    name: 'Said Muhammad',
    role: { id: 'Komisaris', en: 'Commissioner' },
    initials: 'SM',
    bio: {
      id: 'Memberikan arahan strategis dan pengawasan terhadap seluruh operasional perusahaan dengan visi yang jelas dan komitmen tinggi.',
      en: 'Provides strategic direction and oversight of the company\u2019s overall operations with a clear vision and strong commitment.',
    },
  },
  {
    name: 'Andri Casby',
    role: { id: 'Direktur', en: 'Director' },
    initials: 'AC',
    bio: {
      id: 'Memimpin pelaksanaan proyek dengan standar profesional tertinggi, memastikan kualitas dan kepuasan klien di setiap langkah.',
      en: 'Leads project execution with the highest professional standards, ensuring quality and client satisfaction at every step.',
    },
  },
];

export const companyInfo = {
  legalName: 'PT Delapan Sisi Utama',
  address: 'Komplek Ruko Indah Gemilang Blok B No. 10 & 11, Batam Center, Batam 29463, Kepulauan Riau, Indonesia',
  phone1: '0853 8888 8159',
  phone2: '0811 7740 060',
  whatsapp: '6285388888159',
  email: 'delapansisiutama@gmail.com',
  website: 'www.delapansisiutama.com',
  mapsEmbedQuery: 'Batam Center, Batam, Kepulauan Riau',
};

export const stats = [
  { value: 50, suffix: '+', label: { id: 'Proyek Selesai', en: 'Projects Completed' } },
  { value: 5, suffix: '+', label: { id: 'Tahun Pengalaman', en: 'Years of Experience' } },
  { value: 40, suffix: '+', label: { id: 'Klien Puas', en: 'Happy Clients' } },
  { value: 8, suffix: '', label: { id: 'Nilai Inti', en: 'Core Values' } },
];