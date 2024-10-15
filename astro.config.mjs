import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Your GitHub Pages site URL, e.g., https://username.github.io/repo-name
  site: 'https://github.com/Alok182003/Chiropractor-Healthcare-Front-End-Layout', // Replace with your actual GitHub Pages URL
  
  // Set the base to the repo name to ensure the paths work correctly on GitHub Pages
  base: '/Chiropractor-Healthcare-Front-End-Layout/', // Replace 'repo-name' with the name of your GitHub repository

  // Add Tailwind CSS integration
  integrations: [
    tailwind(),
  ],

  // Optional: Set custom build directory if needed (default is "dist")
  outDir: 'dist',

  // Enable drafts during development if needed (optional)
  markdown: {
    drafts: true,
  },

  // Other configurations can be added here
});
