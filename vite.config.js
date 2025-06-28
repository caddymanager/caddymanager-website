import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/caddymanager-website/', // Use repo name for correct GitHub Pages deployment
  plugins: [vue()]
})
