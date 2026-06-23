/**
 * i18n.model.js
 * MODEL LAYER — kamus terjemahan ID/EN seluruh teks statis website.
 * Dikelompokkan per namespace (navbar, footer, home, about, dst) supaya
 * mudah dipetakan ke section yang sesuai di tiap *.view.js.
 */

import { getLang } from '../utils/language.js';

const dict = {
  navbar: {
    home: { id: 'Beranda', en: 'Home' },
    portfolio: { id: 'Portfolio', en: 'Portfolio' },
    portfolioAll: { id: 'Semua Portofolio', en: 'All Portfolio' },
    catKomersial: { id: 'Komersial & Publik', en: 'Commercial & Public' },
    catPerumahan: { id: 'Perumahan', en: 'Residential' },
    catInterior: { id: 'Interior Rumah', en: 'Home Interior' },
    catIndustri: { id: 'Industri & Infrastruktur', en: 'Industrial & Infrastructure' },
    catPengawasan: { id: 'Pengawasan & Manajemen Proyek', en: 'Project Supervision & Management' },
    catEngineering: { id: 'Engineering & Supervision', en: 'Engineering & Supervision' },
    vrVideo: { id: '360 VR & Video', en: '360 VR & Video' },
    vr360: { id: '360 VR', en: '360 VR' },
    video3d: { id: 'Video 3D Desain', en: '3D Design Video' },
    videoKonstruksi: { id: 'Video Hasil Konstruksi', en: 'Construction Result Video' },
    videoProgress: { id: 'Video Progress Pembangunan', en: 'Construction Progress Video' },
    pricing: { id: 'Harga & Layanan', en: 'Pricing & Services' },
    jasaEngineering: { id: 'Jasa Engineering', en: 'Engineering Services' },
    jasaConstruction: { id: 'Jasa Construction', en: 'Construction Services' },
    jasaProperty: { id: 'Jasa Property Development', en: 'Property Development Services' },
    jasaSupervision: { id: 'Jasa Project Supervision', en: 'Project Supervision Services' },
    benefit: { id: 'Apa yang Anda Dapatkan?', en: 'What You Will Get?' },
    testimoniClien: { id: 'Testimoni Klien', en: 'Client Testimonials' },
    about: { id: 'Tentang Kami', en: 'About Us' },
    aboutProfil: { id: 'Tentang Perusahaan', en: 'Company Profile' },
    aboutTim: { id: 'Tim & Kepemimpinan', en: 'Team & Leadership' },
    aboutVisiMisi: { id: 'Visi & Misi', en: 'Vision & Mission' },
    aboutPilar: { id: 'Delapan Pilar Nilai', en: 'Eight Core Values' },
    aboutGaleri: { id: 'Galeri Kegiatan', en: 'Activity Gallery' },
    info: { id: 'Informasi', en: 'Information' },
    faq: { id: 'F.A.Q.', en: 'F.A.Q.' },
    istilah: { id: 'Daftar Istilah Konstruksi', en: 'Construction Glossary' },
    blog: { id: 'Blog', en: 'Blog' },
    karir: { id: 'Lowongan Kerja', en: 'Careers' },
    contact: { id: 'Kontak', en: 'Contact' },
    login: { id: 'Login', en: 'Login' },
    search: { id: 'Cari', en: 'Search' },
    consult: { id: 'Konsultasi', en: 'Consultation' },
    consultNow: { id: 'Konsultasi Sekarang', en: 'Consult Now' },
    changeLang: { id: 'Ganti Bahasa', en: 'Change Language' },
  },

  footer: {
    tagline: { id: 'Building Excellence, Delivering Trust', en: 'Building Excellence, Delivering Trust' },
    desc: {
      id: 'Perusahaan Engineering, Construction, Property Development, dan Project Supervision yang berkomitmen menghadirkan solusi profesional dan berkelanjutan.',
      en: 'An Engineering, Construction, Property Development, and Project Supervision company committed to delivering professional and sustainable solutions.',
    },
    navHeading: { id: 'Navigasi', en: 'Navigation' },
    serviceHeading: { id: 'Layanan', en: 'Services' },
    contactHeading: { id: 'Kontak', en: 'Contact' },
    rights: { id: 'Hak Cipta Dilindungi.', en: 'All Rights Reserved.' },
  },

  home: {
    eyebrow: { id: 'Building Excellence, Delivering Trust', en: 'Building Excellence, Delivering Trust' },
    scroll: { id: 'GULIR', en: 'SCROLL' },

    aboutLabel: { id: 'Tentang Kami', en: 'About Us' },
    aboutTitleLine1: { id: 'Kami Membangun', en: 'We Build' },
    aboutTitleHighlight: { id: 'Lebih dari Sekadar', en: 'More Than Just' },
    aboutTitleLine3: { id: 'Struktur', en: 'Structures' },
    aboutP1: {
      id: 'PT. Delapan Sisi Utama adalah perusahaan yang bergerak di bidang Engineering, Construction, Property Development, dan Project Supervision yang berkomitmen menghadirkan solusi profesional, inovatif, dan berkelanjutan.',
      en: 'PT. Delapan Sisi Utama is a company engaged in Engineering, Construction, Property Development, and Project Supervision, committed to delivering professional, innovative, and sustainable solutions.',
    },
    aboutP2: {
      id: 'Didirikan atas keyakinan bahwa keberhasilan sebuah proyek dibangun melalui kualitas pekerjaan yang unggul dan kepercayaan yang berkelanjutan — kami hadir untuk mewujudkan visi Anda.',
      en: 'Founded on the belief that a project\u2019s success is built through superior workmanship and lasting trust — we are here to realize your vision.',
    },
    aboutMore: { id: 'Selengkapnya', en: 'Learn More' },

    servicesLabel: { id: 'Layanan Kami', en: 'Our Services' },
    servicesTitleLine1: { id: 'Bidang', en: 'Core' },
    servicesTitleHighlight: { id: 'Usaha Utama', en: 'Business Areas' },
    servicesDesc: {
      id: 'Solusi terintegrasi dari perencanaan hingga pelaksanaan — untuk setiap kebutuhan konstruksi dan properti Anda',
      en: 'Integrated solutions from planning to execution — for all your construction and property needs',
    },

    portfolioLabel: { id: 'Portofolio Proyek', en: 'Project Portfolio' },
    portfolioTitleLine1: { id: 'Hasil Karya', en: 'Our Best' },
    portfolioTitleHighlight: { id: 'Terbaik Kami', en: 'Work' },
    portfolioViewAll: { id: 'Lihat Semua Proyek', en: 'View All Projects' },

    pillarLabel: { id: 'Delapan Pilar Utama', en: 'Eight Core Pillars' },
    pillarTitleLine1: { id: 'Nilai-Nilai Yang Kami', en: 'Values We' },
    pillarTitleHighlight: { id: 'Junjung Tinggi', en: 'Uphold' },
    pillarDesc: {
      id: 'Delapan nilai inti yang menjadi landasan kami dalam menjalankan setiap proyek dan aktivitas bisnis.',
      en: 'Eight core values that form the foundation of how we run every project and business activity.',
    },

    whyLabel: { id: 'Why Choose Us', en: 'Why Choose Us' },
    whyTitleLine1: { id: 'Mengapa', en: 'Why' },
    whyTitleHighlight: { id: 'Memilih', en: 'Choose' },
    whyTitleSuffix: { id: 'DSU?', en: 'DSU?' },
    companyProfileBadge: { id: 'PROFIL PERUSAHAAN', en: 'COMPANY PROFILE' },

    testimonialLabel: { id: 'Testimoni Klien', en: 'Client Testimonials' },
    testimonialTitleLine1: { id: 'Apa Kata', en: 'What Our' },
    testimonialTitleHighlight: { id: 'Klien Kami', en: 'Clients Say' },

    ctaLabel: { id: 'Mulai Proyek Anda', en: 'Start Your Project' },
    ctaTitleLine1: { id: 'Siap Wujudkan', en: 'Ready to Realize Your' },
    ctaTitleHighlight: { id: 'Proyek Impian', en: 'Dream Project' },
    ctaTitleSuffix: { id: 'Anda?', en: '?' },
    ctaDesc: {
      id: 'Konsultasikan kebutuhan konstruksi dan properti Anda dengan tim profesional kami. Gratis konsultasi, tanpa biaya tersembunyi.',
      en: 'Discuss your construction and property needs with our professional team. Free consultation, no hidden fees.',
    },
    ctaWhatsapp: { id: 'WhatsApp Kami', en: 'WhatsApp Us' },
    ctaWhatsappMsg: { id: 'Halo, saya ingin konsultasi proyek', en: 'Hello, I would like to consult on a project' },
    ctaForm: { id: 'Isi Formulir Konsultasi', en: 'Fill Consultation Form' },
  },
};

/**
 * t('navbar.home') -> teks sesuai bahasa aktif saat ini.
 */
export function t(path) {
  const lang = getLang();
  const value = path.split('.').reduce((obj, key) => obj?.[key], dict);
  if (!value) {
    console.warn(`[i18n] key not found: ${path}`);
    return path;
  }
  return value[lang] ?? value.id;
}

export default dict;