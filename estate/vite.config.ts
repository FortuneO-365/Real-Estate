import { defineConfig } from 'vite'
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            about: resolve(__dirname, 'about.html'),
            contact: resolve(__dirname, 'contact.html'),
          },
        },
      },
    plugins: [
        tailwindcss(),
    ],
})