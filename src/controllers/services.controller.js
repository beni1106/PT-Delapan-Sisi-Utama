/**
 * services.controller.js — CONTROLLER LAYER
 * PERUBAHAN (i18n): initLang() + getLang() dipass ke navbar; listener
 * 'dsu:langchange' me-render ulang halaman saat bahasa diganti.
 */

import AOS from 'aos';
import 'aos/dist/aos.css';

import { companyInfo } from '../models/company.model.js';
import { services } from '../models/services.model.js';

import { renderNavbar } from '../views/components/navbar.view.js';
import { renderFooter } from '../views/components/footer.view.js';
import { renderFloatingWhatsapp, renderProgressBar } from '../views/components/widgets.view.js';

import { renderServicesHero, renderServiceDetailBlock, renderServicesCta } from '../views/pages/services.view.js';

import { initStickyNavbar, initMobileMenu, initScrollProgress, initMobileNavAccordion, initLangToggle, initDropdownHover } from '../utils/animations.js';
import { initLang, getLang } from '../utils/language.js';

function renderPage() {
  const app = document.querySelector('#app');
  if (!app) return;
  document.body.classList.add('home-light');

  const serviceBlocks = services.map((s, i) => renderServiceDetailBlock(s, i)).join('');

  app.innerHTML = `
    ${renderProgressBar()}
    ${renderNavbar({ activePage: 'services', whatsapp: companyInfo.whatsapp, lang: getLang() })}
    ${renderServicesHero()}
    ${serviceBlocks}
    ${renderServicesCta({ whatsapp: companyInfo.whatsapp })}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

function scrollToHashIfPresent() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (target) {
    setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 100);
  }
}

function bindPageBehavior() {
  initStickyNavbar();
  initMobileMenu();
  initMobileNavAccordion();
  initLangToggle();
  initScrollProgress();
  initDropdownHover();
}

export function initServicesPage() {
  initLang();
  renderPage();
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });
  bindPageBehavior();
  scrollToHashIfPresent();

  window.addEventListener('dsu:langchange', () => {
    renderPage();
    bindPageBehavior();
  });
}