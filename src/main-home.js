/**
 * main-home.js
 * Entry point untuk index.html (halaman Beranda).
 *
 * Pola entry point untuk semua halaman (MPA):
 *   1. Import stylesheet global (Tailwind + custom CSS)
 *   2. Import & jalankan Controller halaman terkait
 *
 * File entry sengaja dibuat setipis mungkin — semua logic ada di Controller,
 * supaya gampang melacak "apa yang menjalankan halaman ini".
 */

import './styles/main.css';
import { initHomePage } from './controllers/home.controller.js';

document.addEventListener('DOMContentLoaded', initHomePage);