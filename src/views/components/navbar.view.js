/**
 * navbar.view.js — VIEW LAYER
 * Navbar dengan dropdown multi-level, dipakai di semua halaman.
 * PERUBAHAN (i18n): getNavItems() (function, bukan const) + semua teks
 * statis memakai t() dari i18n.model.js.
 * FIX: teks toggle bahasa (ID/EN) dan ikon hamburger dipaksa selalu putih,
 * tidak lagi tergantung kondisi `lang` yang bisa tidak konsisten antar halaman.
 */

import { renderIcon } from './icon.view.js';
import { t } from '../../models/i18n.model.js';

const B = import.meta.env.BASE_URL;

function getNavItems() {
  return [
    {
      key: 'portfolio',
      label: t('navbar.portfolio'),
      href: `${B}portfolio.html`,
      children: [
        { label: t('navbar.portfolioAll'), href: `${B}portfolio.html` },
        { label: t('navbar.catKomersial'), href: `${B}portfolio.html?category=komersial-publik` },
        { label: t('navbar.catPerumahan'), href: `${B}portfolio.html?category=perumahan` },
        { label: t('navbar.catInterior'), href: `${B}portfolio.html?category=interior-rumah` },
        { label: t('navbar.catIndustri'), href: `${B}portfolio.html?category=industri-infrastruktur` },
        { label: t('navbar.catPengawasan'), href: `${B}portfolio.html?category=pengawasan-manajemen` },
        { label: t('navbar.catEngineering'), href: `${B}portfolio.html?category=engineering-supervision` },
      ],
    },
    {
      key: 'pricing',
      label: t('navbar.pricing'),
      href: `${B}pricing.html`,
      children: [
        { label: t('navbar.jasaEngineering'), href: `${B}services.html#engineering` },
        { label: t('navbar.jasaConstruction'), href: `${B}services.html#construction` },
        { label: t('navbar.jasaProperty'), href: `${B}services.html#property` },
        { label: t('navbar.jasaSupervision'), href: `${B}services.html#supervision` },
        { label: t('navbar.benefit'), href: `${B}pricing.html#benefit` },
        { label: t('navbar.testimoniClien'), href: `${B}pricing.html#testimoni` },
      ],
    },
    {
      key: 'about',
      label: t('navbar.about'),
      href: `${B}about.html`,
      children: [
        { label: t('navbar.aboutProfil'),      href: `${B}about.html#profil` },
        { label: t('navbar.aboutTim'),         href: `${B}about.html#tim` },
        { label: t('navbar.aboutVisiMisi'),    href: `${B}about.html#visi-misi` },
        { label: t('navbar.aboutPilar'),       href: `${B}about.html#pilar` },
        { label: t('navbar.aboutCompanyInfo'), href: `${B}about.html#company-info` },
      ],
    },
    {
      key: 'info',
      label: t('navbar.info'),
      href: `${B}blog.html`,
      children: [
        { label: t('navbar.faq'),     href: `${B}faq.html` },
        { label: t('navbar.istilah'), href: `${B}blog.html?cat=istilah` },
        { label: t('navbar.blog'),    href: `${B}blog.html` },
        { label: t('navbar.karir'),   href: `${B}karir.html` },
      ],
    },
    {
      key: 'contact',
      label: t('navbar.contact'),
      href: `${B}contact.html`,
      children: null,
    },
  ];
}

function renderDropdownPanel(children, key) {
  if (!children) return '';
  const items = children
    .map((child) => `<a href="${child.href}" class="nav-dropdown-link">${child.label}</a>`)
    .join('');
  return `<div class="nav-dropdown" data-dropdown="${key}">${items}</div>`;
}

function renderDesktopItem(item, activePage) {
  const activeClass = item.key === activePage ? 'nav-link nav-link--active' : 'nav-link';

  if (!item.children) {
    return `<a href="${item.href}" class="${activeClass}">${item.label}</a>`;
  }

  return `
    <div class="nav-item" data-nav-item="${item.key}">
      <a href="${item.href}" class="${activeClass} nav-link--has-dropdown" data-nav-trigger="${item.key}">
        ${item.label}
        ${renderIcon('chevron-down', 'w-3 h-3 nav-chevron')}
      </a>
      ${renderDropdownPanel(item.children, item.key)}
    </div>
  `;
}

function renderMobileItem(item, activePage) {
  const activeClass = item.key === activePage ? 'nav-link nav-link--active' : 'nav-link';

  if (!item.children) {
    return `<a href="${item.href}" class="${activeClass} mobile-nav-link">${item.label}</a>`;
  }

  const childLinks = item.children
    .map((child) => `<a href="${child.href}" class="mobile-nav-sublink">${child.label}</a>`)
    .join('');

  return `
    <div class="mobile-nav-group">
      <button type="button" class="${activeClass} mobile-nav-link mobile-nav-toggle" data-mobile-toggle="${item.key}">
        ${item.label}
        ${renderIcon('chevron-down', 'w-4 h-4 mobile-nav-chevron')}
      </button>
      <div class="mobile-nav-submenu" data-mobile-submenu="${item.key}">
        ${childLinks}
      </div>
    </div>
  `;
}

export function renderNavbar({ activePage = 'home', whatsapp = '', lang = 'id' } = {}) {
  const NAV_ITEMS = getNavItems();
  const desktopItems = NAV_ITEMS.map((item) => renderDesktopItem(item, activePage)).join('');
  const mobileItems = NAV_ITEMS.map((item) => renderMobileItem(item, activePage)).join('');

  return `
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 navbar">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center justify-between h-20">

          <a href="${B}index.html" class="flex items-center flex-shrink-0">
            <img
              src="${B}project/images/logo-dsu.png"
              alt="PT. Delapan Sisi Utama"
              class="h-14 w-auto object-contain"
              loading="eager"
            />
          </a>

          <div class="hidden lg:flex items-center gap-1" id="desktop-nav">
            <a href="${B}index.html" class="nav-home-icon" aria-label="${t('navbar.home')}">
              ${renderIcon('home', 'w-4 h-4')}
            </a>
            ${desktopItems}
          </div>

          <div class="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a href="${B}admin-login.html" class="nav-icon-btn" aria-label="${t('navbar.login')}">
              ${renderIcon('user', 'w-4 h-4')}
            </a>
            <button type="button" class="nav-lang-toggle flex items-center gap-0 rounded border border-white/20 hover:border-gold/40 overflow-hidden transition-colors" data-lang="${lang}" aria-label="${t('navbar.changeLang')}">
              <span class="nav-lang-option flex items-center gap-1.5 px-2.5 py-1.5 text-white">
                <img src="${B}project/images/flag/indo.png" alt="ID" class="w-5 h-3.5 object-cover rounded-sm" />
                <span class="text-xs font-montserrat font-600 tracking-wide">ID</span>
              </span>
              <span class="w-px h-4 bg-white/20 flex-shrink-0"></span>
              <span class="nav-lang-option flex items-center gap-1.5 px-2.5 py-1.5 text-white">
                <img src="${B}project/images/flag/united-kingdom.png" alt="EN" class="w-5 h-3.5 object-cover rounded-sm" />
                <span class="text-xs font-montserrat font-600 tracking-wide">EN</span>
              </span>
            </button>
            <a href="https://wa.me/${whatsapp}" target="_blank" rel="noopener" class="btn-gold text-xs py-3 px-6 ml-2">
              ${t('navbar.consult')}
            </a>
          </div>

          <button id="hamburger" type="button" class="hamburger-btn lg:hidden text-white p-2" aria-label="Buka menu">
            ${renderIcon('menu', 'w-6 h-6')}
          </button>
        </div>
      </div>

      <div id="mobile-menu" class="mobile-menu">
        <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
          <a href="${B}index.html" class="nav-link mobile-nav-link">
            ${renderIcon('home', 'w-4 h-4')} ${t('navbar.home')}
          </a>
          ${mobileItems}

          <div class="mobile-nav-utility">
            <a href="${B}admin-login.html" class="nav-utility-link">${t('navbar.login')}</a>
            <button type="button" class="nav-utility-link nav-lang-toggle flex items-center gap-2" data-lang="${lang}">
              ${lang === 'id'
                ? `<img src="${B}project/images/flag/united-kingdom.png" alt="EN" class="w-6 h-4 object-cover rounded-sm" /> Switch to English`
                : `<img src="${B}project/images/flag/indo.png" alt="ID" class="w-6 h-4 object-cover rounded-sm" /> Ganti ke Indonesia`
              }
            </button>
          </div>

          <a href="https://wa.me/${whatsapp}" target="_blank" rel="noopener" class="btn-gold w-full justify-center mt-3">
            ${t('navbar.consultNow')}
          </a>
        </div>
      </div>
    </nav>
  `;
}