/**
 * Controller: adminLogin.controller.js
 * Mengorkestrasi Model dan View: menangani event DOM, memanggil Model,
 * lalu memerintahkan View untuk update UI.
 */

import { AdminAuthModel } from '../models/adminAuth.model.js';
import { AdminLoginView } from '../views/pages/adminLogin.view.js';
//                                        ✅ tambahkan /pages/

export const AdminLoginController = {
  /** Entry point: inisialisasi halaman. */
  init() {
    const container = document.getElementById('app');
    if (!container) return;

    // Jika sudah login, langsung redirect ke dashboard
    if (AdminAuthModel.isAuthenticated()) {
      window.location.href = '/admin/dashboard.html';
      return;
    }

    AdminLoginView.injectStyles();
    AdminLoginView.render(container);
    this._bindEvents();
  },

  /** Pasang semua event listener. */
  _bindEvents() {
    const form          = document.getElementById('dsu-login-form');
    const togglePwdBtn  = document.getElementById('dsu-toggle-password');
    const usernameInput = document.getElementById('dsu-username');
    const passwordInput = document.getElementById('dsu-password');

    // Submit form
    form?.addEventListener('submit', (e) => this._handleSubmit(e));

    // Toggle show/hide password
    togglePwdBtn?.addEventListener('click', () => {
      AdminLoginView.togglePasswordVisibility();
    });

    // Bersihkan error saat user mengetik ulang
    usernameInput?.addEventListener('input', () => {
      AdminLoginView.clearFieldErrors();
      AdminLoginView.hideAlert();
    });
    passwordInput?.addEventListener('input', () => {
      AdminLoginView.clearFieldErrors();
      AdminLoginView.hideAlert();
    });
  },

  /** Tangani submit form login. */
  async _handleSubmit(e) {
    e.preventDefault();

    const form     = e.target;
    const username = form.username.value.trim();
    const password = form.password.value;

    // Bersihkan state UI lama
    AdminLoginView.clearFieldErrors();
    AdminLoginView.hideAlert();

    // 1. Validasi (Model)
    const { valid, errors } = AdminAuthModel.validate(username, password);
    if (!valid) {
      errors.forEach((msg) => {
        if (msg.toLowerCase().includes('username')) {
          AdminLoginView.showFieldError('username', msg);
        } else {
          AdminLoginView.showFieldError('password', msg);
        }
      });
      return;
    }

    // 2. Loading state (View)
    AdminLoginView.setLoading(true);

    // 3. Proses login (Model)
    const result = await AdminAuthModel.login(username, password);

    // 4. Update UI berdasar hasil (View)
    AdminLoginView.setLoading(false);

    if (result.success) {
      AdminLoginView.showAlert('success', 'Login berhasil! Mengarahkan ke dashboard...');
      // Redirect ke halaman admin dashboard setelah 1 detik
      setTimeout(() => {
        window.location.href = '/admin/dashboard.html';
      }, 1000);
    } else {
      AdminLoginView.showAlert('error', result.message);
      // Guncang form sedikit untuk feedback visual
      const wrap = document.querySelector('.dsu-login-form-wrap');
      if (wrap) {
        wrap.animate(
          [
            { transform: 'translateX(0)' },
            { transform: 'translateX(-6px)' },
            { transform: 'translateX(6px)' },
            { transform: 'translateX(-4px)' },
            { transform: 'translateX(4px)' },
            { transform: 'translateX(0)' },
          ],
          { duration: 400, easing: 'ease-out' }
        );
      }
    }
  },
};