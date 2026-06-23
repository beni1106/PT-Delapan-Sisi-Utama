/**
 * services.controller.js
 * CONTROLLER LAYER — Orkestrasi halaman Services (Layanan).
 *
 * PERUBAHAN:
 * - Tambah document.body.classList.add('home-light') supaya pola
 *   background selang-seling putih/hitam aktif konsisten dengan
 *   halaman lain (Contact, Portfolio, Pricing).
 */
import AOS from 'aos';
import 'aos/dist/aos.css';

import { companyInfo } from '../models/company.model.js';
import { services } from '../models/services.model.js';

import { renderNavbar } from '../views/components/navbar.view.js';
import { renderFooter } from '../views/components/footer.view.js';
import { renderFloatingWhatsapp, renderProgressBar } from '../views/components/widgets.view.js';

import { renderServicesHero, renderServiceDetailBlock, renderServicesCta } from '../views/pages/services.view.js';

import { initStickyNavbar, initMobileMenu, initScrollProgress, initMobileNavAccordion, initLangToggle } from '../utils/animations.js';

function renderPage() {
  const app = document.querySelector('#app');
  if (!app) return;
  document.body.classList.add('home-light');

  const serviceBlocks = services.map((s, i) => renderServiceDetailBlock(s, i)).join('');

  app.innerHTML = `
    ${renderProgressBar()}
    ${renderNavbar({ activePage: 'services', whatsapp: companyInfo.whatsapp })}
    ${renderServicesHero()}
    ${serviceBlocks}
    ${renderServicesCta({ whatsapp: companyInfo.whatsapp })}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

/** Jika URL punya hash (mis. /services.html#construction), scroll ke section itu setelah render */
function scrollToHashIfPresent() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (target) {
    setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 100);
  }
}

export function initServicesPage() {
  renderPage();
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });
  initStickyNavbar();
  initMobileMenu();
  initMobileNavAccordion();
  initLangToggle();
  initScrollProgress();
  scrollToHashIfPresent();
}