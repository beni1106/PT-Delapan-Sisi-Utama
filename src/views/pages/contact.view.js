/**
 * contact.view.js — VIEW LAYER
 * PERUBAHAN (i18n): seluruh teks statis (hero, info, form, map) memakai t().
 */

import { renderIcon } from '../components/icon.view.js';
import { t } from '../../models/i18n.model.js';

export function renderContactHero() {
  return `
    <section class="pt-32 pb-16 relative overflow-hidden services-hero-bg section-dark">
      <div class="absolute inset-0 opacity-5 services-hero-radial"></div>
      <div class="max-w-3xl mx-auto px-6 relative z-10 text-center" data-aos="fade-up">
        <div class="section-label mb-4">${t('contact.heroLabel')}</div>
        <h1 class="section-title text-white mb-6">${t('contact.heroTitleLine1')} <span class="text-gold-gradient">${t('contact.heroTitleHighlight')}</span></h1>
        <div class="gold-line mx-auto mb-8"></div>
        <p class="font-poppins text-sm leading-8 max-w-2xl mx-auto" style="color: rgba(255,255,255,0.7);">${t('contact.heroDesc')}</p>
      </div>
    </section>
  `;
}

export function renderContactInfoAndForm({ companyInfo }) {
  return `
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-5 gap-10">

          <div class="lg:col-span-2 space-y-4" data-aos="fade-right">
            <div class="contact-info-card">
              ${renderIcon('location', 'w-5 h-5 text-gold flex-shrink-0 mt-1')}
              <div>
                <div class="contact-info-label">${t('contact.addressLabel')}</div>
                <div class="contact-info-value">${companyInfo.address}</div>
              </div>
            </div>
            <div class="contact-info-card">
              ${renderIcon('phone', 'w-5 h-5 text-gold flex-shrink-0 mt-1')}
              <div>
                <div class="contact-info-label">${t('contact.phoneLabel')}</div>
                <div class="contact-info-value">
                  <a href="tel:${companyInfo.phone1.replace(/\s/g, '')}" class="hover:text-gold transition-colors">${companyInfo.phone1}</a>
                  <br />
                  <a href="tel:${companyInfo.phone2.replace(/\s/g, '')}" class="hover:text-gold transition-colors">${companyInfo.phone2}</a>
                </div>
              </div>
            </div>
            <div class="contact-info-card">
              ${renderIcon('mail', 'w-5 h-5 text-gold flex-shrink-0 mt-1')}
              <div>
                <div class="contact-info-label">${t('contact.emailLabel')}</div>
                <div class="contact-info-value">
                  <a href="mailto:${companyInfo.email}" class="hover:text-gold transition-colors">${companyInfo.email}</a>
                </div>
              </div>
            </div>
            <div class="contact-info-card">
              ${renderIcon('clock', 'w-5 h-5 text-gold flex-shrink-0 mt-1')}
              <div>
                <div class="contact-info-label">${t('contact.hoursLabel')}</div>
                <div class="contact-info-value">${t('contact.hoursValue')}</div>
              </div>
            </div>

            <a href="https://wa.me/${companyInfo.whatsapp}" target="_blank" rel="noopener" class="btn-gold w-full justify-center mt-6">
              ${renderIcon('whatsapp', 'w-5 h-5', true)} ${t('contact.waBtn')}
            </a>
          </div>

          <div class="lg:col-span-3" data-aos="fade-left" data-aos-delay="150">
            <form id="contact-form" class="contact-form">
              <div class="grid sm:grid-cols-2 gap-5">
                <div class="form-group">
                  <label for="name" class="form-label">${t('contact.formNameLabel')}</label>
                  <input type="text" id="name" name="name" required class="form-input" placeholder="${t('contact.formNamePlaceholder')}" />
                </div>
                <div class="form-group">
                  <label for="phone" class="form-label">${t('contact.formPhoneLabel')}</label>
                  <input type="tel" id="phone" name="phone" required class="form-input" placeholder="${t('contact.formPhonePlaceholder')}" />
                </div>
              </div>

              <div class="form-group">
                <label for="email" class="form-label">${t('contact.formEmailLabel')}</label>
                <input type="email" id="email" name="email" class="form-input" placeholder="${t('contact.formEmailPlaceholder')}" />
              </div>

              <div class="form-group">
                <label for="service" class="form-label">${t('contact.formServiceLabel')}</label>
                <select id="service" name="service" required class="form-input">
                  <option value="" disabled selected>${t('contact.formServicePlaceholder')}</option>
                  <option value="engineering">${t('contact.svcEngineering')}</option>
                  <option value="construction">${t('contact.svcConstruction')}</option>
                  <option value="property">${t('contact.svcProperty')}</option>
                  <option value="supervision">${t('contact.svcSupervision')}</option>
                  <option value="other">${t('contact.svcOther')}</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message" class="form-label">${t('contact.formMessageLabel')}</label>
                <textarea id="message" name="message" required rows="5" class="form-input" placeholder="${t('contact.formMessagePlaceholder')}"></textarea>
              </div>

              <button type="submit" class="btn-gold w-full justify-center">
                ${t('contact.formSubmitBtn')} ${renderIcon('arrow-right', 'w-4 h-4')}
              </button>

              <p id="form-success" class="form-success" style="display:none;">
                ${renderIcon('check', 'w-4 h-4 text-gold')} ${t('contact.formSuccess')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderMapSection({ mapsEmbedQuery }) {
  const encodedQuery = encodeURIComponent(mapsEmbedQuery);
  return `
    <section class="py-16 bg-dark-section">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-10" data-aos="fade-up">
          <div class="section-label mb-4">${t('contact.mapLabel')}</div>
          <h2 class="section-title">${t('contact.mapTitleLine1')} <span class="text-gold-gradient">${t('contact.mapTitleHighlight')}</span></h2>
        </div>
        <div class="map-frame-wrap" data-aos="fade-up" data-aos-delay="150">
          <iframe
            class="map-frame"
            src="https://maps.google.com/maps?q=${encodedQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Lokasi PT. Delapan Sisi Utama"
          ></iframe>
        </div>
      </div>
    </section>
  `;
}