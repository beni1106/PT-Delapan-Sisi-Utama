/**
 * View: adminLogin.view.js
 * Bertanggung jawab hanya pada rendering markup & update UI state.
 * Tidak boleh mengandung logika bisnis atau akses data.
 */

export const AdminLoginView = {
  /**
   * Render kerangka halaman login ke dalam container.
   * @param {HTMLElement} container
   */
  render(container) {
    container.innerHTML = `
      <div class="dsu-login-page">

        <!-- Left panel: branding -->
        <aside class="dsu-login-brand">
          <div class="dsu-login-brand__inner">
            <a href="/" class="dsu-login-brand__logo">
              <span class="dsu-login-brand__logo-icon">
                <!-- Octagon icon (8 sisi) -->
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <polygon
                    points="14,2 30,2 42,14 42,30 30,42 14,42 2,30 2,14"
                    fill="none" stroke="#F59E0B" stroke-width="2.5"
                  />
                  <polygon
                    points="17,8 27,8 36,17 36,27 27,36 17,36 8,27 8,17"
                    fill="#F59E0B" opacity="0.15"
                  />
                  <text x="22" y="27" text-anchor="middle" font-family="Montserrat,sans-serif"
                    font-weight="800" font-size="13" fill="#F59E0B">8</text>
                </svg>
              </span>
              <span class="dsu-login-brand__name">
                PT. Delapan Sisi Utama
              </span>
            </a>

            <div class="dsu-login-brand__tagline">
              <h1>Portal Admin</h1>
              <p>Kelola konten, proyek, dan data perusahaan dari satu tempat.</p>
            </div>

            <ul class="dsu-login-brand__features">
              <li>
                <span class="dsu-feature-dot"></span>
                Manajemen Portofolio Proyek
              </li>
              <li>
                <span class="dsu-feature-dot"></span>
                Pengelolaan Artikel & Blog
              </li>
              <li>
                <span class="dsu-feature-dot"></span>
                Monitoring Pesan Masuk
              </li>
              <li>
                <span class="dsu-feature-dot"></span>
                Pengaturan Layanan & Harga
              </li>
            </ul>
          </div>

          <p class="dsu-login-brand__footer">
            © ${new Date().getFullYear()} PT. Delapan Sisi Utama. All rights reserved.
          </p>
        </aside>

        <!-- Right panel: form -->
        <main class="dsu-login-form-panel">
          <div class="dsu-login-form-wrap">

            <div class="dsu-login-form-header">
              <h2>Selamat Datang</h2>
              <p>Masuk ke akun administrator Anda</p>
            </div>

            <div id="dsu-login-alert" class="dsu-login-alert" role="alert" aria-live="polite" hidden></div>

            <form id="dsu-login-form" class="dsu-login-form" novalidate>

              <div class="dsu-form-group" id="dsu-group-username">
                <label for="dsu-username">Username</label>
                <div class="dsu-input-wrap">
                  <span class="dsu-input-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="dsu-username"
                    name="username"
                    placeholder="Masukkan username"
                    autocomplete="username"
                    required
                    minlength="3"
                  />
                </div>
                <span class="dsu-field-error" id="dsu-err-username" aria-live="polite"></span>
              </div>

              <div class="dsu-form-group" id="dsu-group-password">
                <label for="dsu-password">Password</label>
                <div class="dsu-input-wrap">
                  <span class="dsu-input-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </span>
                  <input
                    type="password"
                    id="dsu-password"
                    name="password"
                    placeholder="Masukkan password"
                    autocomplete="current-password"
                    required
                    minlength="6"
                  />
                  <button type="button" id="dsu-toggle-password" class="dsu-toggle-pwd" aria-label="Tampilkan password">
                    <svg id="dsu-eye-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                </div>
                <span class="dsu-field-error" id="dsu-err-password" aria-live="polite"></span>
              </div>

              <div class="dsu-form-options">
                <label class="dsu-checkbox-label">
                  <input type="checkbox" id="dsu-remember" name="remember" />
                  <span>Ingat saya</span>
                </label>
                <a href="#" class="dsu-forgot-link">Lupa password?</a>
              </div>

              <button type="submit" id="dsu-login-btn" class="dsu-login-btn">
                <span class="dsu-btn-text">Masuk</span>
                <span class="dsu-btn-spinner" hidden aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                </span>
              </button>

            </form>

            <p class="dsu-login-back">
              <a href="/" class="dsu-back-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Kembali ke beranda
              </a>
            </p>

          </div>
        </main>

      </div>
    `;
  },

  /**
   * Tampilkan pesan alert (error / sukses) di atas form.
   * @param {'error'|'success'} type
   * @param {string} message
   */
  showAlert(type, message) {
    const el = document.getElementById('dsu-login-alert');
    if (!el) return;
    el.textContent = message;
    el.className = `dsu-login-alert dsu-login-alert--${type}`;
    el.hidden = false;
  },

  /** Sembunyikan alert. */
  hideAlert() {
    const el = document.getElementById('dsu-login-alert');
    if (el) el.hidden = true;
  },

  /**
   * Set state loading pada tombol submit.
   * @param {boolean} loading
   */
  setLoading(loading) {
    const btn    = document.getElementById('dsu-login-btn');
    const text   = btn?.querySelector('.dsu-btn-text');
    const spinner = btn?.querySelector('.dsu-btn-spinner');
    if (!btn) return;

    btn.disabled = loading;
    btn.classList.toggle('dsu-login-btn--loading', loading);
    if (text)   text.textContent = loading ? 'Memproses...' : 'Masuk';
    if (spinner) spinner.hidden = !loading;
  },

  /**
   * Tampilkan error pada field tertentu.
   * @param {'username'|'password'} field
   * @param {string} message
   */
  showFieldError(field, message) {
    const group = document.getElementById(`dsu-group-${field}`);
    const errEl = document.getElementById(`dsu-err-${field}`);
    group?.classList.add('dsu-form-group--error');
    if (errEl) errEl.textContent = message;
  },

  /** Bersihkan semua error field. */
  clearFieldErrors() {
    ['username', 'password'].forEach((field) => {
      const group = document.getElementById(`dsu-group-${field}`);
      const errEl = document.getElementById(`dsu-err-${field}`);
      group?.classList.remove('dsu-form-group--error');
      if (errEl) errEl.textContent = '';
    });
  },

  /**
   * Toggle visibilitas password.
   */
  togglePasswordVisibility() {
    const input = document.getElementById('dsu-password');
    const icon  = document.getElementById('dsu-eye-icon');
    if (!input) return;

    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';

    if (icon) {
      icon.innerHTML = isHidden
        ? `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
           <line x1="1" y1="1" x2="23" y2="23"/>`
        : `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
    }
  },

  /** Inject semua CSS halaman login ke dalam <head>. */
  injectStyles() {
    if (document.getElementById('dsu-login-styles')) return;
    const style = document.createElement('style');
    style.id = 'dsu-login-styles';
    style.textContent = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      :root {
        --dsu-gold:       #F59E0B;
        --dsu-gold-dark:  #D97706;
        --dsu-gold-light: #FEF3C7;
        --dsu-navy:       #0F172A;
        --dsu-navy-mid:   #1E293B;
        --dsu-navy-soft:  #334155;
        --dsu-slate:      #64748B;
        --dsu-muted:      #94A3B8;
        --dsu-border:     #E2E8F0;
        --dsu-bg:         #F8FAFC;
        --dsu-white:      #FFFFFF;
        --dsu-error:      #EF4444;
        --dsu-error-bg:   #FEF2F2;
        --dsu-success:    #10B981;
        --dsu-success-bg: #ECFDF5;
        --dsu-radius:     12px;
        --dsu-shadow:     0 4px 24px rgba(15,23,42,.10);
        --dsu-transition: 200ms cubic-bezier(0.4,0,0.2,1);
        font-family: 'Poppins', sans-serif;
      }

      body { background: var(--dsu-bg); min-height: 100vh; }

      /* ── Layout ────────────────────────────────────── */
      .dsu-login-page {
        display: flex;
        min-height: 100vh;
      }

      /* ── Left Brand Panel ──────────────────────────── */
      .dsu-login-brand {
        flex: 0 0 42%;
        background: var(--dsu-navy);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 3rem 3.5rem;
        position: relative;
        overflow: hidden;
      }
      .dsu-login-brand::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 60% 50% at 20% 80%, rgba(245,158,11,.12) 0%, transparent 70%),
          radial-gradient(ellipse 50% 60% at 80% 20%, rgba(245,158,11,.07) 0%, transparent 70%);
        pointer-events: none;
      }
      /* Decorative octagon watermark */
      .dsu-login-brand::after {
        content: '';
        position: absolute;
        bottom: -120px;
        right: -120px;
        width: 380px;
        height: 380px;
        background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='59,2 141,2 198,59 198,141 141,198 59,198 2,141 2,59' fill='none' stroke='%23F59E0B' stroke-width='1.5' stroke-opacity='0.12'/%3E%3Cpolygon points='72,18 128,18 182,72 182,128 128,182 72,182 18,128 18,72' fill='none' stroke='%23F59E0B' stroke-width='1' stroke-opacity='0.08'/%3E%3C/svg%3E") center/contain no-repeat;
        pointer-events: none;
      }

      .dsu-login-brand__inner { position: relative; z-index: 1; }

      .dsu-login-brand__logo {
        display: flex;
        align-items: center;
        gap: .75rem;
        text-decoration: none;
        margin-bottom: 3.5rem;
      }
      .dsu-login-brand__logo-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 52px;
        height: 52px;
        background: rgba(245,158,11,.1);
        border: 1.5px solid rgba(245,158,11,.3);
        border-radius: 14px;
        flex-shrink: 0;
      }
      .dsu-login-brand__name {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: .875rem;
        color: var(--dsu-white);
        line-height: 1.3;
        letter-spacing: .01em;
      }

      .dsu-login-brand__tagline h1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 2.25rem;
        color: var(--dsu-white);
        line-height: 1.2;
        margin-bottom: .75rem;
        letter-spacing: -.02em;
      }
      .dsu-login-brand__tagline p {
        font-size: .9375rem;
        color: var(--dsu-muted);
        line-height: 1.6;
        max-width: 28ch;
      }

      .dsu-login-brand__features {
        list-style: none;
        margin-top: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .dsu-login-brand__features li {
        display: flex;
        align-items: center;
        gap: .75rem;
        font-size: .875rem;
        color: #CBD5E1;
      }
      .dsu-feature-dot {
        width: 8px;
        height: 8px;
        background: var(--dsu-gold);
        border-radius: 50%;
        flex-shrink: 0;
        box-shadow: 0 0 8px rgba(245,158,11,.6);
      }

      .dsu-login-brand__footer {
        position: relative;
        z-index: 1;
        font-size: .75rem;
        color: var(--dsu-navy-soft);
      }

      /* ── Right Form Panel ──────────────────────────── */
      .dsu-login-form-panel {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 1.5rem;
        background: var(--dsu-bg);
      }

      .dsu-login-form-wrap {
        width: 100%;
        max-width: 420px;
      }

      .dsu-login-form-header {
        margin-bottom: 2rem;
      }
      .dsu-login-form-header h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 1.875rem;
        color: var(--dsu-navy);
        letter-spacing: -.025em;
        margin-bottom: .375rem;
      }
      .dsu-login-form-header p {
        font-size: .9375rem;
        color: var(--dsu-slate);
      }

      /* ── Alert ─────────────────────────────────────── */
      .dsu-login-alert {
        border-radius: var(--dsu-radius);
        padding: .875rem 1.125rem;
        font-size: .875rem;
        font-weight: 500;
        margin-bottom: 1.25rem;
        display: flex;
        align-items: flex-start;
        gap: .5rem;
      }
      .dsu-login-alert[hidden] { display: none; }
      .dsu-login-alert--error   { background: var(--dsu-error-bg);   color: var(--dsu-error);   border: 1px solid #FECACA; }
      .dsu-login-alert--success { background: var(--dsu-success-bg); color: var(--dsu-success); border: 1px solid #A7F3D0; }

      /* ── Form Groups ───────────────────────────────── */
      .dsu-login-form { display: flex; flex-direction: column; gap: 1.25rem; }

      .dsu-form-group { display: flex; flex-direction: column; gap: .375rem; }

      .dsu-form-group label {
        font-size: .8125rem;
        font-weight: 600;
        color: var(--dsu-navy-mid);
        letter-spacing: .02em;
        text-transform: uppercase;
      }

      .dsu-input-wrap {
        position: relative;
        display: flex;
        align-items: center;
      }
      .dsu-input-icon {
        position: absolute;
        left: .9375rem;
        color: var(--dsu-muted);
        display: flex;
        align-items: center;
        pointer-events: none;
        transition: color var(--dsu-transition);
      }
      .dsu-input-wrap:focus-within .dsu-input-icon { color: var(--dsu-gold); }

      .dsu-input-wrap input {
        width: 100%;
        padding: .875rem 3rem .875rem 2.875rem;
        border: 1.5px solid var(--dsu-border);
        border-radius: var(--dsu-radius);
        font-family: 'Poppins', sans-serif;
        font-size: .9375rem;
        color: var(--dsu-navy);
        background: var(--dsu-white);
        outline: none;
        transition: border-color var(--dsu-transition), box-shadow var(--dsu-transition);
      }
      .dsu-input-wrap input::placeholder { color: var(--dsu-muted); }
      .dsu-input-wrap input:focus {
        border-color: var(--dsu-gold);
        box-shadow: 0 0 0 3px rgba(245,158,11,.15);
      }

      .dsu-form-group--error .dsu-input-wrap input {
        border-color: var(--dsu-error);
        box-shadow: 0 0 0 3px rgba(239,68,68,.1);
      }
      .dsu-field-error {
        font-size: .8rem;
        color: var(--dsu-error);
        min-height: 1em;
      }

      .dsu-toggle-pwd {
        position: absolute;
        right: .9375rem;
        background: none;
        border: none;
        color: var(--dsu-muted);
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: .25rem;
        border-radius: 6px;
        transition: color var(--dsu-transition);
      }
      .dsu-toggle-pwd:hover { color: var(--dsu-navy); }

      /* ── Form Options ──────────────────────────────── */
      .dsu-form-options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: -.25rem;
      }
      .dsu-checkbox-label {
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: .875rem;
        color: var(--dsu-slate);
        cursor: pointer;
      }
      .dsu-checkbox-label input[type="checkbox"] {
        width: 16px;
        height: 16px;
        accent-color: var(--dsu-gold);
        cursor: pointer;
      }
      .dsu-forgot-link {
        font-size: .875rem;
        color: var(--dsu-gold-dark);
        text-decoration: none;
        font-weight: 500;
        transition: color var(--dsu-transition);
      }
      .dsu-forgot-link:hover { color: var(--dsu-gold); text-decoration: underline; }

      /* ── Submit Button ─────────────────────────────── */
      .dsu-login-btn {
        width: 100%;
        padding: .9375rem;
        background: var(--dsu-gold);
        border: none;
        border-radius: var(--dsu-radius);
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        color: var(--dsu-navy);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .625rem;
        letter-spacing: .02em;
        transition: background var(--dsu-transition), transform var(--dsu-transition), box-shadow var(--dsu-transition);
        margin-top: .25rem;
      }
      .dsu-login-btn:hover:not(:disabled) {
        background: var(--dsu-gold-dark);
        box-shadow: 0 4px 16px rgba(245,158,11,.35);
        transform: translateY(-1px);
      }
      .dsu-login-btn:active:not(:disabled) { transform: translateY(0); }
      .dsu-login-btn:disabled {
        opacity: .7;
        cursor: not-allowed;
      }
      .dsu-login-btn--loading .dsu-btn-spinner svg {
        animation: dsu-spin .8s linear infinite;
      }
      @keyframes dsu-spin { to { transform: rotate(360deg); } }

      /* ── Back Link ─────────────────────────────────── */
      .dsu-login-back {
        margin-top: 1.75rem;
        text-align: center;
      }
      .dsu-back-link {
        display: inline-flex;
        align-items: center;
        gap: .375rem;
        font-size: .875rem;
        color: var(--dsu-slate);
        text-decoration: none;
        transition: color var(--dsu-transition);
      }
      .dsu-back-link:hover { color: var(--dsu-navy); }

      /* ── Responsive ────────────────────────────────── */
      @media (max-width: 768px) {
        .dsu-login-page { flex-direction: column; }

        .dsu-login-brand {
          flex: none;
          padding: 2rem 1.5rem 1.5rem;
        }
        .dsu-login-brand__tagline h1 { font-size: 1.5rem; }
        .dsu-login-brand__features   { display: none; }
        .dsu-login-brand::after       { display: none; }
        .dsu-login-brand__footer      { display: none; }

        .dsu-login-form-panel { padding: 2rem 1.25rem; align-items: flex-start; }
      }

      @media (prefers-reduced-motion: reduce) {
        .dsu-login-btn--loading .dsu-btn-spinner svg { animation: none; }
      }
    `;
    document.head.appendChild(style);
  },
};