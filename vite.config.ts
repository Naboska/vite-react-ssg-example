import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Папка для сгенерированных статических файлов
    emptyOutDir: true, // Очистить папку outDir перед каждой сборкой
  },

})
