/**
 * main-admin-login.js
 * Entry point halaman login admin.
 * Mengikuti pola yang sama dengan main-home.js, main-about.js, dst.
 */

import { AdminLoginController } from './controllers/adminLogin.controller.js';

document.addEventListener('DOMContentLoaded', () => {
  AdminLoginController.init();
});