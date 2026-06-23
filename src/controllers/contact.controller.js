/**
 * contact.controller.js
 * CONTROLLER LAYER — Orkestrasi halaman Contact, termasuk handle submit form.
 *
 * CATATAN INTEGRASI BACKEND:
 * Saat ini `handleFormSubmit` hanya mensimulasikan pengiriman (langsung redirect ke WhatsApp
 * dengan pesan terisi otomatis dari form). Untuk integrasi backend/API sungguhan nanti,
 * cukup ganti isi fungsi `handleFormSubmit` di bawah — struktur Model/View di atasnya
 * tidak perlu diubah.
 *
 * PERUBAHAN:
 * - Tambah document.body.classList.add('home-light') di renderPage() supaya
 *   skema warna terang + navbar hitam solid konsisten dengan seluruh halaman lain.
 */

import AOS from 'aos';
import 'aos/dist/aos.css';

import { companyInfo } from '../models/company.model.js';

import { renderNavbar } from '../views/components/navbar.view.js';
import { renderFooter } from '../views/components/footer.view.js';
import { renderFloatingWhatsapp, renderProgressBar } from '../views/components/widgets.view.js';

import { renderContactHero, renderContactInfoAndForm, renderMapSection } from '../views/pages/contact.view.js';

import { initStickyNavbar, initMobileMenu, initScrollProgress, initMobileNavAccordion, initLangToggle } from '../utils/animations.js';

function renderPage() {
  const app = document.querySelector('#app');
  if (!app) return;
  document.body.classList.add('home-light');

  app.innerHTML = `
    ${renderProgressBar()}
    ${renderNavbar({ activePage: 'contact', whatsapp: companyInfo.whatsapp })}
    ${renderContactHero()}
    ${renderContactInfoAndForm({ companyInfo })}
    ${renderMapSection({ mapsEmbedQuery: companyInfo.mapsEmbedQuery })}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

/** Susun pesan WhatsApp terstruktur dari isi form */
function buildWhatsappMessage(formData) {
  const serviceLabels = {
    engineering: 'Engineering Services',
    construction: 'Construction Services',
    property: 'Property Development',
    supervision: 'Project Supervision',
    other: 'Lainnya',
  };

  const lines = [
    `Halo, saya ${formData.get('name')} ingin konsultasi proyek.`,
    `No. WhatsApp: ${formData.get('phone')}`,
    formData.get('email') ? `Email: ${formData.get('email')}` : null,
    `Layanan: ${serviceLabels[formData.get('service')] ?? formData.get('service')}`,
    `Detail: ${formData.get('message')}`,
  ].filter(Boolean);

  return lines.join('\n');
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  if (!formData.get('name') || !formData.get('phone') || !formData.get('message')) {
    return;
  }

  const message = buildWhatsappMessage(formData);
  const successEl = document.getElementById('form-success');
  if (successEl) successEl.style.display = 'flex';

  window.open(`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');

  form.reset();
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', handleFormSubmit);
}

export function initContactPage() {
  renderPage();
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });
  initStickyNavbar();
  initMobileMenu();
  initMobileNavAccordion();
  initLangToggle();
  initScrollProgress();
  initContactForm();
}