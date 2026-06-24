/**
 * widgets.view.js — VIEW LAYER
 * Floating WhatsApp button + scroll progress bar.
 * PERUBAHAN (i18n): default message memakai t('home.ctaWhatsappMsg').
 */

import { renderIcon } from './icon.view.js';
import { t } from '../../models/i18n.model.js';

export function renderFloatingWhatsapp({ whatsapp, message } = {}) {
  const finalMessage = message ?? t('home.ctaWhatsappMsg');
  const encodedMessage = encodeURIComponent(finalMessage);
  return `
    <a href="https://wa.me/${whatsapp}?text=${encodedMessage}" target="_blank" rel="noopener" class="float-wa" aria-label="Chat WhatsApp">
      ${renderIcon('whatsapp', 'w-6 h-6 text-white', true)}
    </a>
  `;
}

export function renderProgressBar() {
  return `<div id="progress-bar"></div>`;
}