import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // If deploying to GitHub Pages at https://<user>.github.io/<repo>/
  // set base to '/<repo>/'
  base: '/de-pt-web/',
  plugins: [react()],
})
