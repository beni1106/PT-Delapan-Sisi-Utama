/**
 * Model: adminAuth.model.js
 * Bertanggung jawab atas logika data & validasi autentikasi admin.
 * Saat ini menggunakan kredensial statis (hardcoded) sebagai simulasi.
 * Ganti dengan panggilan API ke backend nyata saat siap.
 */

export const AdminAuthModel = {
  /**
   * Kredensial default (hanya untuk demo/development).
   * JANGAN gunakan di production — integrasikan dengan API backend.
   */
  _credentials: {
    username: 'admin',
    password: 'dsu@2025',
  },

  /**
   * Validasi input form sebelum submit.
   * @param {string} username
   * @param {string} password
   * @returns {{ valid: boolean, errors: string[] }}
   */
  validate(username, password) {
    const errors = [];
    if (!username || username.trim().length < 3) {
      errors.push('Username minimal 3 karakter.');
    }
    if (!password || password.length < 6) {
      errors.push('Password minimal 6 karakter.');
    }
    return { valid: errors.length === 0, errors };
  },

  /**
   * Proses login.
   * Mengembalikan Promise agar mudah diganti dengan fetch() ke API.
   * @param {string} username
   * @param {string} password
   * @returns {Promise<{ success: boolean, message: string, token?: string }>}
   */
  async login(username, password) {
    // Simulasi network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (
      username === this._credentials.username &&
      password === this._credentials.password
    ) {
      const token = btoa(`${username}:${Date.now()}`); // token dummy
      sessionStorage.setItem('dsu_admin_token', token);
      sessionStorage.setItem('dsu_admin_user', username);
      return { success: true, message: 'Login berhasil.', token };
    }

    return { success: false, message: 'Username atau password salah.' };
  },

  /**
   * Cek apakah sesi admin masih aktif.
   * @returns {boolean}
   */
  isAuthenticated() {
    return !!sessionStorage.getItem('dsu_admin_token');
  },

  /**
   * Hapus sesi (logout).
   */
  logout() {
    sessionStorage.removeItem('dsu_admin_token');
    sessionStorage.removeItem('dsu_admin_user');
  },
};