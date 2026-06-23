/**
 * main-blog.js
 * Entry point untuk blog.html (halaman Blog).
 */

import './styles/main.css';
import { initBlogPage } from './controllers/blog.controller.js';

document.addEventListener('DOMContentLoaded', initBlogPage);