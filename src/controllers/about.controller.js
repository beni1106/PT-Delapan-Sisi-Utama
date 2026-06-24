/**
 * about.controller.js
 * CONTROLLER LAYER — Orkestrasi halaman About (Tentang Kami).
 * PERUBAHAN (i18n): initLang() + getLang() dipass ke navbar; listener
 * 'dsu:langchange' me-render ulang seluruh halaman saat bahasa diganti.
 */

import AOS from 'aos';
import 'aos/dist/aos.css';

import { companyProfile, vision, missionList, coreValues, leadership, companyInfo, whyChooseUs } from '../models/company.model.js';

import { renderNavbar } from '../views/components/navbar.view.js';
import { renderFooter } from '../views/components/footer.view.js';
import { renderFloatingWhatsapp, renderProgressBar } from '../views/components/widgets.view.js';

import {
  renderAboutHero,
  renderProfileSection,
  renderVisionMission,
  renderCoreValuesGrid,
  renderLeadershipSection,
  renderCompanyInfoSection,
} from '../views/pages/about.view.js';

import { initStickyNavbar, initMobileMenu, initScrollProgress, initMobileNavAccordion, initLangToggle, initDropdownHover } from '../utils/animations.js';
import { initLang, getLang } from '../utils/language.js';

function renderPage() {
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    ${renderProgressBar()}
    ${renderNavbar({ activePage: 'about', whatsapp: companyInfo.whatsapp, lang: getLang() })}
    ${renderAboutHero()}
    ${renderProfileSection({ about: companyProfile.about, whyChooseUs })}
    ${renderVisionMission({ vision, missionList })}
    ${renderCoreValuesGrid(coreValues)}
    ${renderLeadershipSection(leadership)}
    ${renderCompanyInfoSection({ companyInfo })}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

function bindPageBehavior() {
  initStickyNavbar();
  initMobileMenu();
  initMobileNavAccordion();
  initLangToggle();
  initScrollProgress();
  initDropdownHover();
}

export function initAboutPage() {
  initLang();
  renderPage();
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });
  bindPageBehavior();

  window.addEventListener('dsu:langchange', () => {
    renderPage();
    bindPageBehavior();
  });
}