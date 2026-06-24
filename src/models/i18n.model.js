/**
 * i18n.model.js — MODEL LAYER
 * Kamus terjemahan ID/EN seluruh teks statis website, dikelompokkan per
 * namespace (navbar, footer, home, about, services, portfolio, dst).
 *
 * Gunakan t('namespace.key') untuk teks yang asalnya dari kamus ini.
 * Gunakan pick({id,en}) untuk teks yang asalnya dari data model lain
 * (company.model.js, testimonials.model.js, blog.model.js, dst) yang
 * field-nya sudah disimpan sebagai objek { id, en }.
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
    services: { id: 'Layanan', en: 'Services' },
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
    aboutCompanyInfo: { id: 'Informasi Perusahaan', en: 'Company Information' },
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

  about: {
    heroLabel: { id: 'Tentang Perusahaan', en: 'Company Profile' },
    heroTitleLine1: { id: 'Mengenal', en: 'Getting to Know' },
    heroDesc: {
      id: 'Kami adalah perusahaan konstruksi dan engineering yang berkomitmen membangun lebih dari sekadar struktur — kami membangun kepercayaan, nilai, dan warisan yang akan berdiri kokoh melampaui waktu.',
      en: 'We are a construction and engineering company committed to building more than just structures — we build trust, value, and a legacy that will stand strong beyond time.',
    },
    profileLabel: { id: 'Profil Perusahaan', en: 'Company Profile' },
    profileTitleLine1: { id: 'Kami Adalah', en: 'We Are Your' },
    profileTitleHighlight: { id: 'Mitra Terpercaya', en: 'Trusted Partner' },
    profileTitleSuffix: { id: 'Anda', en: '' },
    profileStatLabel: { id: 'Tahun Pengalaman', en: 'Years of Experience' },
    whyChooseUsLabel: { id: 'Mengapa Memilih Kami', en: 'Why Choose Us' },
    visionMissionLabel: { id: 'Filosofi Perusahaan', en: 'Company Philosophy' },
    visionMissionTitleLine1: { id: 'Visi &', en: 'Vision &' },
    visionMissionTitleHighlight: { id: 'Misi', en: 'Mission' },
    visiLabel: { id: 'VISI', en: 'VISION' },
    misiLabel: { id: 'MISI', en: 'MISSION' },
    coreValuesLabel: { id: 'Delapan Pilar Utama', en: 'Eight Core Pillars' },
    coreValuesTitleLine1: { id: 'Nilai-Nilai Yang Kami', en: 'Values We' },
    coreValuesTitleHighlight: { id: 'Pegang Teguh', en: 'Hold Firmly' },
    leadershipLabel: { id: 'Kepemimpinan', en: 'Leadership' },
    leadershipTitleLine1: { id: 'Tim', en: 'Our' },
    leadershipTitleHighlight: { id: 'Pemimpin Kami', en: 'Leadership Team' },
    companyInfoLabel: { id: 'Informasi Perusahaan', en: 'Company Information' },
    companyInfoTitleLine1: { id: 'Data', en: 'Company' },
    companyInfoTitleHighlight: { id: 'Perusahaan', en: 'Data' },
    fieldNama: { id: 'Nama Perusahaan', en: 'Company Name' },
    fieldBidang: { id: 'Bidang Usaha', en: 'Business Field' },
    fieldBidangValue: {
      id: 'Engineering, Construction, Property Development, Project Supervision',
      en: 'Engineering, Construction, Property Development, Project Supervision',
    },
    fieldAlamat: { id: 'Alamat', en: 'Address' },
    fieldTelepon: { id: 'Telepon', en: 'Phone' },
    fieldEmail: { id: 'Email', en: 'Email' },
    fieldWebsite: { id: 'Website', en: 'Website' },
    bannerLine1: { id: 'Building Excellence,', en: 'Building Excellence,' },
    bannerLine2: { id: 'Delivering Trust.', en: 'Delivering Trust.' },
  },

  blog: {
    heroLabel: { id: 'Blog & Artikel', en: 'Blog & Articles' },
    heroTitleLine1: { id: 'Wawasan &', en: 'Insights &' },
    heroTitleHighlight: { id: 'Inspirasi', en: 'Inspiration' },
    heroDesc: {
      id: 'Tips, edukasi, dan inspirasi seputar dunia konstruksi, arsitektur, dan manajemen proyek dari tim PT. Delapan Sisi Utama.',
      en: 'Tips, education, and inspiration about construction, architecture, and project management from the PT. Delapan Sisi Utama team.',
    },
    readTime: { id: 'menit baca', en: 'min read' },
    readMore: { id: 'Baca Selengkapnya', en: 'Read More' },
  },

  blogDetail: {
    backLink: { id: '\u2190 Kembali ke Blog', en: '\u2190 Back to Blog' },
    placeholderP1: {
      id: 'Konten lengkap artikel ini akan segera ditambahkan. Untuk saat ini, halaman ini menampilkan struktur tampilan detail artikel — judul, gambar utama, ringkasan, dan tata letak baca yang nyaman.',
      en: 'The full content of this article will be added soon. For now, this page shows the detail article layout — title, main image, summary, and a comfortable reading layout.',
    },
    placeholderP2: {
      id: 'Hubungi tim kami melalui WhatsApp atau halaman kontak apabila Anda ingin mendiskusikan topik ini lebih lanjut untuk kebutuhan proyek Anda.',
      en: 'Contact our team via WhatsApp or the contact page if you would like to discuss this topic further for your project needs.',
    },
    notFoundLabel: { id: '404', en: '404' },
    notFoundTitleLine1: { id: 'Artikel Tidak', en: 'Article Not' },
    notFoundTitleHighlight: { id: 'Ditemukan', en: 'Found' },
    notFoundDesc: {
      id: 'Artikel yang Anda cari mungkin telah dipindahkan atau dihapus.',
      en: 'The article you are looking for may have been moved or deleted.',
    },
    backBtn: { id: 'Kembali ke Blog', en: 'Back to Blog' },
  },

  contact: {
    heroLabel: { id: 'Hubungi Kami', en: 'Contact Us' },
    heroTitleLine1: { id: 'Mari', en: 'Let\u2019s' },
    heroTitleHighlight: { id: 'Berdiskusi', en: 'Talk' },
    heroDesc: {
      id: 'Punya proyek yang ingin diwujudkan? Tim kami siap membantu, mulai dari konsultasi awal hingga pelaksanaan penuh.',
      en: 'Have a project you want to bring to life? Our team is ready to help, from initial consultation to full execution.',
    },
    addressLabel: { id: 'Alamat Kantor', en: 'Office Address' },
    phoneLabel: { id: 'Telepon', en: 'Phone' },
    emailLabel: { id: 'Email', en: 'Email' },
    hoursLabel: { id: 'Jam Operasional', en: 'Operating Hours' },
    hoursValue: {
      id: 'Senin \u2013 Jumat: 08.00 \u2013 17.00 WIB<br />Sabtu: 08.00 \u2013 13.00 WIB',
      en: 'Monday \u2013 Friday: 08:00 \u2013 17:00 WIB<br />Saturday: 08:00 \u2013 13:00 WIB',
    },
    waBtn: { id: 'Chat via WhatsApp', en: 'Chat via WhatsApp' },
    formNameLabel: { id: 'Nama Lengkap *', en: 'Full Name *' },
    formNamePlaceholder: { id: 'Nama Anda', en: 'Your Name' },
    formPhoneLabel: { id: 'No. WhatsApp *', en: 'WhatsApp Number *' },
    formPhonePlaceholder: { id: '08xx-xxxx-xxxx', en: '08xx-xxxx-xxxx' },
    formEmailLabel: { id: 'Email', en: 'Email' },
    formEmailPlaceholder: { id: 'email@contoh.com', en: 'email@example.com' },
    formServiceLabel: { id: 'Layanan yang Dibutuhkan *', en: 'Service Needed *' },
    formServicePlaceholder: { id: 'Pilih layanan', en: 'Select a service' },
    svcEngineering: { id: 'Engineering Services', en: 'Engineering Services' },
    svcConstruction: { id: 'Construction Services', en: 'Construction Services' },
    svcProperty: { id: 'Property Development', en: 'Property Development' },
    svcSupervision: { id: 'Project Supervision', en: 'Project Supervision' },
    svcOther: { id: 'Lainnya', en: 'Other' },
    formMessageLabel: { id: 'Detail Kebutuhan *', en: 'Project Details *' },
    formMessagePlaceholder: { id: 'Ceritakan tentang proyek Anda...', en: 'Tell us about your project...' },
    formSubmitBtn: { id: 'Kirim Pesan', en: 'Send Message' },
    formSuccess: { id: 'Pesan terkirim! Tim kami akan segera menghubungi Anda.', en: 'Message sent! Our team will contact you shortly.' },
    mapLabel: { id: 'Lokasi Kami', en: 'Our Location' },
    mapTitleLine1: { id: 'Temukan', en: 'Find' },
    mapTitleHighlight: { id: 'Kantor Kami', en: 'Our Office' },
  },

  portfolio: {
    heroLabel: { id: 'Portofolio Proyek', en: 'Project Portfolio' },
    heroTitleLine1: { id: 'Hasil Karya', en: 'Our' },
    heroTitleHighlight: { id: 'Kami', en: 'Work' },
    heroDesc: {
      id: 'Kumpulan proyek konstruksi, properti, dan engineering yang telah kami selesaikan dengan komitmen tinggi terhadap kualitas, keselamatan, dan ketepatan waktu.',
      en: 'A collection of construction, property, and engineering projects we have completed with a strong commitment to quality, safety, and timeliness.',
    },
    projectsSuffix: { id: 'Proyek', en: 'Projects' },
    notFoundLabel: { id: '404', en: '404' },
    notFoundTitleLine1: { id: 'Proyek Tidak', en: 'Project Not' },
    notFoundTitleHighlight: { id: 'Ditemukan', en: 'Found' },
    notFoundDesc: {
      id: 'Proyek yang Anda cari mungkin telah dipindahkan atau belum tersedia.',
      en: 'The project you are looking for may have been moved or is not yet available.',
    },
    backBtn: { id: 'Kembali ke Portofolio', en: 'Back to Portfolio' },
  },

  portfolioDetail: {
    backLink: { id: '\u2190 Kembali', en: '\u2190 Back' },
    breadcrumbHome: { id: 'Home', en: 'Home' },
    breadcrumbPortfolio: { id: 'Portofolio', en: 'Portfolio' },
    photoSoonText: { id: 'Dokumentasi Foto Segera Hadir', en: 'Photo Documentation Coming Soon' },
    photoLabelFront: { id: 'Tampak Depan', en: 'Front View' },
    photoLabelOther: { id: 'Foto', en: 'Photo' },
    specsLabel: { id: 'Spesifikasi', en: 'Specifications' },
    specBedrooms: { id: 'Kamar Tidur', en: 'Bedrooms' },
    specBathrooms: { id: 'Kamar Mandi', en: 'Bathrooms' },
    specLandArea: { id: 'Luas Tanah', en: 'Land Area' },
    specBuildingArea: { id: 'Luas Bangunan', en: 'Building Area' },
    descLabel: { id: 'Deskripsi Proyek', en: 'Project Description' },
    locationLabel: { id: 'Lokasi', en: 'Location' },
    mapsLink: { id: 'Buka di Google Maps \u2192', en: 'Open in Google Maps \u2192' },
    agentTeamPrefix: { id: 'Tim', en: 'Team' },
    agentRole: { id: 'PT. Delapan Sisi Utama', en: 'PT. Delapan Sisi Utama' },
    priceLabel: { id: 'Estimasi Nilai Proyek', en: 'Estimated Project Value' },
    chatBtn: { id: 'Chat WhatsApp', en: 'Chat WhatsApp' },
    note: { id: 'Konsultasi gratis, tanpa komitmen', en: 'Free consultation, no commitment' },
    otherLink: { id: 'Lihat Proyek Lainnya', en: 'View Other Projects' },
    waMessage: { id: 'Halo, saya tertarik dengan proyek', en: 'Hello, I am interested in the project' },
  },

  pricing: {
    heroLabel: { id: 'Harga & Paket', en: 'Pricing & Packages' },
    heroTitleLine1: { id: 'Investasi Untuk', en: 'Investment For' },
    heroTitleHighlight: { id: 'Proyek Anda', en: 'Your Project' },
    heroDesc: {
      id: 'Transparansi biaya adalah bagian dari komitmen kami. Berikut estimasi paket layanan \u2014 penawaran final akan disesuaikan dengan kebutuhan spesifik proyek Anda.',
      en: 'Cost transparency is part of our commitment. Below are estimated service packages \u2014 the final offer will be tailored to your project\u2019s specific needs.',
    },
    gridLabel: { id: 'Paket Layanan', en: 'Service Packages' },
    gridTitleLine1: { id: 'Pilih Paket', en: 'Choose The Right' },
    gridTitleHighlight: { id: 'Yang Tepat', en: 'Package' },
    badgePopular: { id: 'Paling Populer', en: 'Most Popular' },
    startingFrom: { id: 'mulai dari', en: 'starting from' },
    ctaBtnCard: { id: 'Konsultasi Sekarang', en: 'Consult Now' },
    notesLabel: { id: 'Perlu Diketahui', en: 'Good to Know' },
    notesTitleLine1: { id: 'Catatan', en: 'Important' },
    notesTitleHighlight: { id: 'Penting', en: 'Notes' },
    ctaLabel: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaTitleLine1: { id: 'Dapatkan', en: 'Get Your' },
    ctaTitleHighlight: { id: 'Penawaran Khusus', en: 'Special Offer' },
    ctaTitleSuffix: { id: 'Anda', en: '' },
    ctaDesc: {
      id: 'Setiap proyek punya kebutuhan berbeda. Diskusikan detail proyek Anda dan dapatkan estimasi biaya yang akurat.',
      en: 'Every project has different needs. Discuss your project details and get an accurate cost estimate.',
    },
    waBtn: { id: 'Tanya Harga via WhatsApp', en: 'Ask Pricing via WhatsApp' },
    formBtn: { id: 'Isi Formulir Konsultasi', en: 'Fill Consultation Form' },
  },

  services: {
    heroLabel: { id: 'Bidang Usaha', en: 'Business Field' },
    heroTitleLine1: { id: 'Layanan', en: 'Professional' },
    heroTitleHighlight: { id: 'Profesional', en: 'Services' },
    heroTitleLine3: { id: 'Kami', en: 'We Offer' },
    heroDesc: {
      id: 'Solusi konstruksi dan engineering terintegrasi dari perencanaan hingga penyelesaian \u2014 dengan komitmen pada kualitas, keselamatan, dan ketepatan waktu.',
      en: 'Integrated construction and engineering solutions from planning to completion \u2014 with a commitment to quality, safety, and timeliness.',
    },
    navLabel: { id: 'Navigasi layanan', en: 'Services navigation' },
    eyebrowLabel: { id: 'Layanan', en: 'Service' },
    ctaBtn: { id: 'Konsultasi Sekarang', en: 'Consult Now' },
    ctaLabel: { id: 'Hubungi Kami', en: 'Contact Us' },
    ctaTitleLine1: { id: 'Butuh', en: 'Need Our' },
    ctaTitleHighlight: { id: 'Layanan', en: 'Services' },
    ctaTitleSuffix: { id: 'Kami?', en: '?' },
    ctaDesc: {
      id: 'Konsultasikan kebutuhan proyek Anda dengan tim ahli kami. Gratis konsultasi, respon cepat.',
      en: 'Discuss your project needs with our expert team. Free consultation, fast response.',
    },
    waBtn: { id: 'WhatsApp Sekarang', en: 'WhatsApp Now' },
    formBtn: { id: 'Isi Formulir', en: 'Fill The Form' },
  },

  cards: {
    serviceMore: { id: 'Selengkapnya', en: 'Learn More' },
    photoSoon: { id: 'Foto Segera Hadir', en: 'Photo Coming Soon' },
    pricingBadge: { id: 'Paling Diminati', en: 'Most Popular' },
    pricingCta: { id: 'Konsultasi Paket Ini', en: 'Consult This Package' },
    blogReadTime: { id: 'menit baca', en: 'min read' },
    blogReadMore: { id: 'Baca Selengkapnya', en: 'Read More' },
  },
};

/**
 * t('navbar.home') -> teks sesuai bahasa aktif dari kamus dict di atas.
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

/**
 * pick({ id, en }) -> ambil teks sesuai bahasa aktif dari OBJEK DATA MODEL
 * (company.model.js, testimonials.model.js, blog.model.js, dst), bukan
 * dari kamus dict di atas.
 */
export function pick(value) {
  if (!value || typeof value !== 'object') return value;
  const lang = getLang();
  return value[lang] ?? value.id ?? value.en ?? '';
}

export default dict;