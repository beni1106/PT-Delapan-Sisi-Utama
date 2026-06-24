/**
 * animations.js — UTILS
 * Helper DOM & animasi yang dipakai berulang oleh banyak Controller.
 * PERUBAHAN (i18n): initLangToggle() delegasi penuh ke toggleLang().
 */

import { gsap } from 'gsap';
import { toggleLang } from './language.js';

export function initStickyNavbar(threshold = 60) {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > threshold);
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
}

export function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu--active');
  });
}

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

export function fadeUp(selector, vars = {}) {
  gsap.from(selector, {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: 'power2.out',
    ...vars,
  });
}

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

export function initDropdownHover(closeDelay = 150) {
  const navItems = document.querySelectorAll('[data-nav-item]');

  navItems.forEach((item) => {
    const dropdown = item.querySelector('[data-dropdown]');
    const trigger = item.querySelector('[data-nav-trigger]');
    if (!dropdown) return;

    let closeTimer = null;

    const open = () => {
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

    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', scheduleClose);

    dropdown.addEventListener('mouseenter', cancelClose);
    dropdown.addEventListener('mouseleave', scheduleClose);
  });

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
 * toggleLang() update localStorage, <html lang>, dan dispatch event
 * 'dsu:langchange' yang didengarkan tiap Controller untuk render ulang.
 */
export function initLangToggle() {
  document.querySelectorAll('.nav-lang-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      toggleLang();
    });
  });
}