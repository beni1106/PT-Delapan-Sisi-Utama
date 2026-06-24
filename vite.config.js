import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({

  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home:            resolve(__dirname, 'index.html'),
        about:           resolve(__dirname, 'about.html'),
        services:        resolve(__dirname, 'services.html'),
        portfolio:       resolve(__dirname, 'portfolio.html'),
        portfolioDetail: resolve(__dirname, 'portfolio-detail.html'),
        pricing:         resolve(__dirname, 'pricing.html'),
        blog:            resolve(__dirname, 'blog.html'),
        blogDetail:      resolve(__dirname, 'blog-detail.html'),
        contact:         resolve(__dirname, 'contact.html'),
        adminLogin:      resolve(__dirname, 'admin-login.html'),
      },
    },
  },
});