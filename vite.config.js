import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './', // Use relative paths for assets so GitHub Pages subdirectory works
  plugins: [vue()]
})
