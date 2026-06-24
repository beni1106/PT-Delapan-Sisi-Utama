/**
 * home.controller.js — CONTROLLER LAYER
 * PERUBAHAN (i18n): initLang() + getLang() dipass ke navbar; listener
 * 'dsu:langchange' me-render ulang seluruh halaman saat bahasa diganti.
 */

import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { companyInfo, coreValues, leadership, whyChooseUs } from '../models/company.model.js';
import { services } from '../models/services.model.js';
import { getFeaturedProjects, portfolioCategories, portfolioProjects } from '../models/portfolio.model.js';
import { testimonials } from '../models/testimonials.model.js';

import { renderNavbar } from '../views/components/navbar.view.js';
import { renderFooter } from '../views/components/footer.view.js';
import { renderFloatingWhatsapp, renderProgressBar } from '../views/components/widgets.view.js';

import {
  renderHeroSection,
  renderAboutBrief,
  renderServicesSection,
  renderPortfolioPreview,
  renderCoreValuesSection,
  renderWhyChooseUsSection,
  renderTestimonialSection,
  renderCtaBanner,
  renderGalleryStrip,
} from '../views/pages/home.view.js';

import {
  initStickyNavbar,
  initMobileMenu,
  initScrollProgress,
  initMobileNavAccordion,
  initLangToggle,
  initDropdownHover,
} from '../utils/animations.js';

import { initLang, getLang } from '../utils/language.js';

gsap.registerPlugin(ScrollTrigger);

function renderPage() {
  const app = document.querySelector('#app');
  if (!app) return;
  document.body.classList.add('home-light');

  const featuredProjects = getFeaturedProjects().length >= 4
    ? getFeaturedProjects()
    : portfolioProjects.slice(0, 7);

  app.innerHTML = `
    ${renderProgressBar()}
    ${renderNavbar({ activePage: 'home', whatsapp: companyInfo.whatsapp, lang: getLang() })}
    ${renderHeroSection()}
    ${renderAboutBrief({ leadership })}
    ${renderServicesSection(services)}
    ${renderPortfolioPreview(featuredProjects, portfolioCategories)}
    ${renderCoreValuesSection(coreValues)}
    ${renderWhyChooseUsSection(whyChooseUs)}
    ${renderTestimonialSection(testimonials)}
    ${renderCtaBanner({ whatsapp: companyInfo.whatsapp })}
    ${renderGalleryStrip([
      '/project/images/roast-chic-cafe/exterior-corner-01.webp',
      '/project/images/roast-chic-cafe/interior-seating-01.webp',
      '/project/images/the-savero/house-type-yellow-01.webp',
      '/project/images/the-savero/building-mesh-facade-01.webp',
      '/project/images/private-villas/villa-tile-roof-front.webp',
      '/project/images/private-villas/house-white-modern.webp',
      '/project/images/buana-duta-bandara/house-type-duplex-01.webp',
      '/project/images/buana-duta-bandara/ruko-3lt-facade-01.webp',
      '/project/images/candenia-bakery-coworking/coworking-exterior.webp',
      '/project/images/ruko-red-facade/front-view.webp',
      '/project/images/outdoor-pavilion/stage-view-01.webp',
      '/project/images/aster-hills/kantor-pemasaran.webp',
    ])}
    ${renderFooter({ companyInfo })}
    ${renderFloatingWhatsapp({ whatsapp: companyInfo.whatsapp })}
  `;
}

function initHeroAnimation() {
  const tl = gsap.timeline({ delay: 0.3 });
  tl.to('#hero-eyebrow', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' })
    .set('#hero-brand-lockup', { opacity: 1 })
    .fromTo(
      '.hero-brand-logo',
      { opacity: 0, scale: 0.7, rotate: -8 },
      { opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: 'back.out(1.6)' },
      '-=0.2'
    )
    .fromTo(
      '.hero-brand-title',
      { opacity: 0, x: -24 },
      { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.5'
    );

  gsap.to('.hero-image-bg', {
    yPercent: 12,
    ease: 'none',
    scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: true },
  });
}

function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('#portfolio-grid > .portfolio-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');

      const filter = btn.dataset.filter;
      items.forEach((item) => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.style.display = show ? '' : 'none';
        if (show) {
          gsap.fromTo(item, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
        }
      });
    });
  });
}

function initTestimonialSwiper() {
  new Swiper('.testimonial-swiper', {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    speed: 700,
    autoplay: { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
  });
}

function bindPageBehavior() {
  initStickyNavbar();
  initMobileMenu();
  initMobileNavAccordion();
  initLangToggle();
  initScrollProgress();
  initHeroAnimation();
  initPortfolioFilter();
  initDropdownHover();
  initTestimonialSwiper();
}

export function initHomePage() {
  initLang();
  renderPage();

  AOS.init({ duration: 700, once: true, easing: 'ease-out-quad', offset: 80 });

  bindPageBehavior();

  window.addEventListener('dsu:langchange', () => {
    renderPage();
    bindPageBehavior();
  });
}