import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/', // Change '<REPO>' to your actual repository name
  plugins: [react()]
})
