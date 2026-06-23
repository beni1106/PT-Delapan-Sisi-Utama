/**
 * about.controller.js
 * CONTROLLER LAYER — Orkestrasi halaman About (Tentang Kami).
 */

import AOS from 'aos';
import 'aos/dist/aos.css';

import { companyProfile, vision, missionList, coreValues, leadership, companyInfo } from '../models/company.model.js';

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

import { initStickyNavbar, initMobileMenu, initScrollProgress, initMobileNavAccordion, initLangToggle } from '../utils/animations.js';

function renderPage() {
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    ${renderProgressBar()}
    ${renderNavbar({ activePage: 'about', whatsapp: companyInfo.whatsapp })}
    ${renderAboutHero()}
    ${renderProfileSection({ about: companyProfile.about })}
    ${renderVisionMission({ vision, missionList })}
    ${renderCoreValuesGrid(coreValues)}
    ${renderLeadershipSection(leadership)}
    ${renderCompanyInfoSection({ companyInfo })}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

export function initAboutPage() {
  renderPage();
  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });
  initStickyNavbar();
  initMobileMenu();
  initMobileNavAccordion();
  initLangToggle();
  initScrollProgress();
}