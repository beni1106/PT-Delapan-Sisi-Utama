/**
 * animations.js
 * UTILS — Helper DOM & animasi yang dipakai berulang oleh banyak Controller.
 *
 * PERUBAHAN (i18n):
 * - initLangToggle() tidak lagi memanipulasi DOM tombol secara manual.
 *   Sekarang cuma memanggil toggleLang() dari utils/language.js, yang akan
 *   update localStorage + <html lang> + dispatch event 'dsu:langchange'.
 *   Controller yang mendengarkan event itu akan render ulang navbar dengan
 *   label & data-lang yang sudah benar otomatis.
 */

import { gsap } from 'gsap';
import { toggleLang } from './language.js';

/** Navbar berubah background saat discroll melewati threshold */
export function initStickyNavbar(threshold = 60) {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > threshold);
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
}

/** Toggle menu mobile (hamburger) */
export function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu--active');
  });
}

/** Progress bar tipis di top viewport mengikuti posisi scroll halaman */
export function initScrollProgress() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  const onScroll = () => {
    const scrollable = document.body.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.width = `${progress}%`;
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
}

/**
 * Animasi counter naik dari 0 ke target, dipicu saat elemen masuk viewport.
 */
export function initCounters(selector = '.counter-val') {
  const counters = document.querySelectorAll(selector);
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10) || 0;
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const increment = target / 50;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current) + suffix;
        }, 30);

        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => observer.observe(c));
}

/** Fade-up generik dengan GSAP */
export function fadeUp(selector, vars = {}) {
  gsap.from(selector, {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: 'power2.out',
    ...vars,
  });
}

/** Accordion submenu di mobile menu */
export function initMobileNavAccordion() {
  const toggles = document.querySelectorAll('[data-mobile-toggle]');

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const key = toggle.dataset.mobileToggle;
      const submenu = document.querySelector(`[data-mobile-submenu="${key}"]`);
      if (!submenu) return;

      const isOpen = submenu.classList.contains('mobile-nav-submenu--open');

      document.querySelectorAll('.mobile-nav-submenu--open').forEach((el) => {
        el.classList.remove('mobile-nav-submenu--open');
      });
      document.querySelectorAll('.mobile-nav-toggle--open').forEach((el) => {
        el.classList.remove('mobile-nav-toggle--open');
      });

      if (!isOpen) {
        submenu.classList.add('mobile-nav-submenu--open');
        toggle.classList.add('mobile-nav-toggle--open');
      }
    });
  });
}

/**
 * Dropdown desktop dengan hover delay — MENGGANTIKAN pure CSS :hover.
 *
 * Cara kerja:
 * - Saat mouseenter ke .nav-item → buka dropdown langsung (openDelay: 0)
 * - Saat mouseleave dari .nav-item → tunggu closeDelay ms sebelum tutup
 *   Jika dalam waktu itu cursor masuk ke panel dropdown, timer dibatalkan.
 * - Ini mencegah dropdown langsung tutup saat cursor bergerak diagonal
 *   dari link trigger ke panel dropdown di bawahnya.
 *
 * CSS .nav-item:hover .nav-dropdown HARUS dihapus / tidak dipakai lagi
 * karena kita kontrol sepenuhnya lewat JS + class .nav-dropdown--open.
 */
export function initDropdownHover(closeDelay = 150) {
  const navItems = document.querySelectorAll('[data-nav-item]');

  navItems.forEach((item) => {
    const dropdown = item.querySelector('[data-dropdown]');
    const trigger = item.querySelector('[data-nav-trigger]');
    if (!dropdown) return;

    let closeTimer = null;

    const open = () => {
      // Tutup semua dropdown lain
      document.querySelectorAll('.nav-dropdown--open').forEach((el) => {
        if (el !== dropdown) el.classList.remove('nav-dropdown--open');
      });
      document.querySelectorAll('[data-nav-item]').forEach((el) => {
        if (el !== item) el.querySelector('.nav-chevron')?.classList.remove('nav-chevron--open');
      });

      clearTimeout(closeTimer);
      dropdown.classList.add('nav-dropdown--open');
      trigger?.querySelector('.nav-chevron')?.classList.add('nav-chevron--open');
    };

    const scheduleClose = () => {
      closeTimer = setTimeout(() => {
        dropdown.classList.remove('nav-dropdown--open');
        trigger?.querySelector('.nav-chevron')?.classList.remove('nav-chevron--open');
      }, closeDelay);
    };

    const cancelClose = () => {
      clearTimeout(closeTimer);
    };

    // Hover pada .nav-item (trigger area)
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', scheduleClose);

    // Hover pada panel dropdown itu sendiri — batalkan timer tutup
    dropdown.addEventListener('mouseenter', cancelClose);
    dropdown.addEventListener('mouseleave', scheduleClose);
  });

  // Klik di luar navbar → tutup semua dropdown
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#desktop-nav')) {
      document.querySelectorAll('.nav-dropdown--open').forEach((el) => {
        el.classList.remove('nav-dropdown--open');
      });
      document.querySelectorAll('.nav-chevron--open').forEach((el) => {
        el.classList.remove('nav-chevron--open');
      });
    }
  });
}

/**
 * Toggle bahasa ID/EN — delegasi penuh ke utils/language.js.
 * toggleLang() akan update localStorage, atribut <html lang>, dan
 * dispatch event 'dsu:langchange' yang didengarkan oleh setiap Controller
 * untuk me-render ulang halaman dengan teks bahasa baru.
 */
export function initLangToggle() {
  document.querySelectorAll('.nav-lang-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      toggleLang();
    });
  });
}