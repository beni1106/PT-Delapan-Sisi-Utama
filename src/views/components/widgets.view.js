/**
 * widgets.view.js
 * VIEW LAYER — Komponen kecil yang dipakai berulang di semua halaman:
 *   - Floating WhatsApp button
 *   - Scroll progress bar (elemen kosong, animasinya di controller/utils)
 */

import { renderIcon } from './icon.view.js';

export function renderFloatingWhatsapp({ whatsapp, message = 'Halo, saya ingin konsultasi proyek' }) {
  const encodedMessage = encodeURIComponent(message);
  return `
    <a href="https://wa.me/${whatsapp}?text=${encodedMessage}" target="_blank" rel="noopener" class="float-wa" aria-label="Chat WhatsApp">
      ${renderIcon('whatsapp', 'w-6 h-6 text-white', true)}
    </a>
  `;
}

export function renderProgressBar() {
  return `<div id="progress-bar"></div>`;
}