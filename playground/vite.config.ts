import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

const defaultBase =
  process.env.NODE_ENV === 'production' ? '/ai-win-predict-icons/' : '/'

export default defineConfig({
  root: resolve(__dirname),
  base: process.env.PLAYGROUND_BASE ?? defaultBase,
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
  build: {
    outDir: resolve(__dirname, '../playground-dist'),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
})
