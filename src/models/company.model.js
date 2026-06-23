/**
 * company.model.js
 * MODEL LAYER — Data murni tentang profil perusahaan.
 *
 * Aturan layer Model:
 *   - TIDAK boleh import dari views/ atau controllers/
 *   - TIDAK boleh menyentuh DOM (document, window, dst)
 *   - Hanya berisi data + fungsi getter sederhana
 *   - Ganti isi data di sini, seluruh halaman yang menampilkannya otomatis ikut berubah
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
  philosophy: `PT Delapan Sisi Utama didirikan atas keyakinan bahwa keberhasilan sebuah proyek dibangun melalui
kualitas pekerjaan yang unggul dan kepercayaan yang berkelanjutan. Nama Delapan Sisi Utama merepresentasikan
delapan nilai inti yang menjadi landasan perusahaan dalam menjalankan setiap aktivitas bisnis dan proyek.`,
};

export const vision = {
  id: 'Menjadi perusahaan Engineering, Construction, dan Property Development yang terpercaya, profesional, dan berdaya saing nasional melalui kualitas, inovasi, dan integritas.',
  en: 'To become a trusted, professional, and nationally competitive Engineering, Construction, and Property Development company through quality, innovation, and integrity.',
};

export const missionList = [
  'Menyediakan layanan konstruksi dan engineering yang berkualitas tinggi.',
  'Mengutamakan keselamatan kerja dalam setiap kegiatan operasional.',
  'Mengembangkan sumber daya manusia yang kompeten dan berintegritas.',
  'Memberikan solusi yang efektif dan efisien bagi pelanggan.',
  'Membangun hubungan jangka panjang yang saling menguntungkan dengan seluruh pemangku kepentingan.',
  'Mendukung pembangunan berkelanjutan melalui inovasi dan tata kelola yang baik.',
];

/**
 * Delapan Pilar Utama — sumber nama "Delapan Sisi Utama"
 * icon: nama icon (dipetakan ke SVG di views/components/icon.view.js)
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
    description: 'Didukung tenaga profesional dan berpengalaman di bidang engineering dan konstruksi.',
    icon: 'users',
  },
  {
    title: 'Integrated Services',
    description: 'Menyediakan layanan terintegrasi dari perencanaan hingga pelaksanaan proyek.',
    icon: 'layers',
  },
  {
    title: 'Quality Assurance',
    description: 'Mengutamakan standar mutu dalam setiap pekerjaan.',
    icon: 'badge-check',
  },
  {
    title: 'Safety Commitment',
    description: 'Menjadikan keselamatan kerja sebagai prioritas utama.',
    icon: 'shield',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Berorientasi pada kepuasan pelanggan dan hubungan jangka panjang.',
    icon: 'heart-handshake',
  },
];

export const leadership = [
  {
    name: 'Said Muhammad',
    role: 'Komisaris',
    initials: 'SM',
    bio: 'Memberikan arahan strategis dan pengawasan terhadap seluruh operasional perusahaan dengan visi yang jelas dan komitmen tinggi.',
  },
  {
    name: 'Andri Casby',
    role: 'Direktur',
    initials: 'AC',
    bio: 'Memimpin pelaksanaan proyek dengan standar profesional tertinggi, memastikan kualitas dan kepuasan klien di setiap langkah.',
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
  { value: 50, suffix: '+', label: 'Proyek Selesai' },
  { value: 5, suffix: '+', label: 'Tahun Pengalaman' },
  { value: 40, suffix: '+', label: 'Klien Puas' },
  { value: 8, suffix: '', label: 'Nilai Inti' },
];