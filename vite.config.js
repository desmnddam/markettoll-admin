import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import csslogger from 'vite-postcss-tools';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), csslogger()],
})
