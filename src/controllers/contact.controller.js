/**
 * contact.controller.js — CONTROLLER LAYER
 * PERUBAHAN (i18n): initLang() + getLang() dipass ke navbar; serviceLabels
 * di buildWhatsappMessage() memakai t() supaya pesan WA terkirim sesuai
 * bahasa aktif; listener 'dsu:langchange' me-render ulang halaman
 * (form di-reset ulang sehingga handler submit dipasang kembali).
 */

import AOS from 'aos';
import 'aos/dist/aos.css';

import { companyInfo } from '../models/company.model.js';

import { renderNavbar } from '../views/components/navbar.view.js';
import { renderFooter } from '../views/components/footer.view.js';
import { renderFloatingWhatsapp, renderProgressBar } from '../views/components/widgets.view.js';

import { renderContactHero, renderContactInfoAndForm, renderMapSection } from '../views/pages/contact.view.js';

import { initStickyNavbar, initMobileMenu, initScrollProgress, initMobileNavAccordion, initLangToggle, initDropdownHover } from '../utils/animations.js';
import { initLang, getLang } from '../utils/language.js';
import { t } from '../models/i18n.model.js';

function renderPage() {
  const app = document.querySelector('#app');
  if (!app) return;
  document.body.classList.add('home-light');

  app.innerHTML = `
    ${renderProgressBar()}
    ${renderNavbar({ activePage: 'contact', whatsapp: companyInfo.whatsapp, lang: getLang() })}
    ${renderContactHero()}
    ${renderContactInfoAndForm({ companyInfo })}
    ${renderMapSection({ mapsEmbedQuery: companyInfo.mapsEmbedQuery })}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

function buildWhatsappMessage(formData) {
  const serviceLabels = {
    engineering: t('contact.svcEngineering'),
    construction: t('contact.svcConstruction'),
    property: t('contact.svcProperty'),
    supervision: t('contact.svcSupervision'),
    other: t('contact.svcOther'),
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

function bindPageBehavior() {
  initStickyNavbar();
  initMobileMenu();
  initMobileNavAccordion();
  initLangToggle();
  initScrollProgress();
  initDropdownHover();
  initContactForm();
}

export function initContactPage() {
  initLang();
  renderPage();
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });
  bindPageBehavior();

  window.addEventListener('dsu:langchange', () => {
    renderPage();
    bindPageBehavior();
  });
}