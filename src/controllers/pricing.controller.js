/**
 * pricing.controller.js
 * CONTROLLER LAYER — Orkestrasi halaman Pricing (Harga).
 *
 * PERUBAHAN:
 * - Tambah document.body.classList.add('home-light') supaya pola
 *   background selang-seling putih/hitam aktif (section-dark = hitam,
 *   section biasa = putih).
 */
import AOS from 'aos';
import 'aos/dist/aos.css';

import { companyInfo } from '../models/company.model.js';
import { pricingPlans, pricingNotes, formatIDR } from '../models/pricing.model.js';

import { renderNavbar } from '../views/components/navbar.view.js';
import { renderFooter } from '../views/components/footer.view.js';
import { renderFloatingWhatsapp, renderProgressBar } from '../views/components/widgets.view.js';

import { renderPricingHero, renderPricingGrid, renderPricingNotes, renderPricingCta } from '../views/pages/pricing.view.js';

import { initStickyNavbar, initMobileMenu, initScrollProgress, initMobileNavAccordion, initLangToggle } from '../utils/animations.js';

function renderPage() {
  const app = document.querySelector('#app');
  if (!app) return;
  document.body.classList.add('home-light');

  app.innerHTML = `
    ${renderProgressBar()}
    ${renderNavbar({ activePage: 'pricing', whatsapp: companyInfo.whatsapp })}
    ${renderPricingHero()}
    ${renderPricingGrid(pricingPlans, { formatIDR })}
    ${renderPricingNotes(pricingNotes)}
    ${renderPricingCta({ whatsapp: companyInfo.whatsapp })}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

export function initPricingPage() {
  renderPage();
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });
  initStickyNavbar();
  initMobileMenu();
  initMobileNavAccordion();
  initLangToggle();
  initScrollProgress();
}