/**
 * main-portfolio-detail.js
 * ENTRY POINT — halaman portfolio-detail.html.
 * Mengimpor stylesheet global dan menjalankan controller terkait
 * setelah DOM siap.
 */

import './styles/main.css';
import { initPortfolioDetailPage } from './controllers/portfolioDetail.controller.js';

document.addEventListener('DOMContentLoaded', () => {
  initPortfolioDetailPage();
});