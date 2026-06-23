/**
 * footer.view.js
 * VIEW LAYER — Footer, dipakai di semua halaman.
 *
 * PERUBAHAN (i18n): semua teks statis memakai t() dari i18n.model.js.
 */

import { renderIcon } from './icon.view.js';
import { t } from '../../models/i18n.model.js';

/**
 * @param {Object} opts
 * @param {Object} opts.companyInfo - dari models/company.model.js
 */
export function renderFooter({ companyInfo }) {
  return `
    <footer class="bg-dark-card border-t border-gold/10">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          <div class="lg:col-span-1">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center font-montserrat font-900 text-gold text-lg">DSU</div>
              <div>
                <div class="font-montserrat font-700 text-white text-sm leading-tight">PT. DELAPAN SISI UTAMA</div>
                <div class="text-gold/60 text-xs font-poppins">${t('footer.tagline')}</div>
              </div>
            </div>
            <p class="text-white/40 text-xs font-poppins leading-7 mb-6">${t('footer.desc')}</p>
            <div class="flex gap-3">
              <a href="https://wa.me/${companyInfo.whatsapp}" target="_blank" rel="noopener" class="social-icon">
                ${renderIcon('whatsapp', 'w-4 h-4', true)}
              </a>
            </div>
          </div>

          <div>
            <h4 class="footer-heading">${t('footer.navHeading')}</h4>
            <ul class="space-y-3">
              <li><a href="/index.html" class="footer-link">${t('navbar.home')}</a></li>
              <li><a href="/about.html" class="footer-link">${t('navbar.about')}</a></li>
              <li><a href="/services.html" class="footer-link">${t('navbar.pricing')}</a></li>
              <li><a href="/portfolio.html" class="footer-link">${t('navbar.portfolio')}</a></li>
              <li><a href="/pricing.html" class="footer-link">${t('navbar.pricing')}</a></li>
              <li><a href="/blog.html" class="footer-link">${t('navbar.blog')}</a></li>
              <li><a href="/contact.html" class="footer-link">${t('navbar.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-heading">${t('footer.serviceHeading')}</h4>
            <ul class="space-y-3">
              <li><a href="/services.html#engineering" class="footer-link">${t('navbar.jasaEngineering')}</a></li>
              <li><a href="/services.html#construction" class="footer-link">${t('navbar.jasaConstruction')}</a></li>
              <li><a href="/services.html#property" class="footer-link">${t('navbar.jasaProperty')}</a></li>
              <li><a href="/services.html#supervision" class="footer-link">${t('navbar.jasaSupervision')}</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-heading">${t('footer.contactHeading')}</h4>
            <ul class="space-y-4">
              <li class="flex gap-3 items-start">
                ${renderIcon('location', 'w-4 h-4 text-gold flex-shrink-0 mt-0.5')}
                <span class="text-white/40 text-xs font-poppins leading-6">${companyInfo.address}</span>
              </li>
              <li class="flex gap-3 items-center">
                ${renderIcon('phone', 'w-4 h-4 text-gold flex-shrink-0')}
                <a href="tel:${companyInfo.phone1.replace(/\s/g, '')}" class="footer-link">${companyInfo.phone1}</a>
              </li>
              <li class="flex gap-3 items-center">
                ${renderIcon('mail', 'w-4 h-4 text-gold flex-shrink-0')}
                <a href="mailto:${companyInfo.email}" class="footer-link">${companyInfo.email}</a>
              </li>
              <li class="flex gap-3 items-center">
                ${renderIcon('globe', 'w-4 h-4 text-gold flex-shrink-0')}
                <a href="https://${companyInfo.website}" class="footer-link">${companyInfo.website}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-white/5 py-6">
        <div class="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <p class="text-white/30 text-xs font-poppins">&copy; ${new Date().getFullYear()} PT. Delapan Sisi Utama. ${t('footer.rights')}</p>
          <p class="text-white/20 text-xs font-poppins">${t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  `;
}