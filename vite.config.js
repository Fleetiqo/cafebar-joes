import { defineConfig } from 'vite'

export default defineConfig({
  base: '/cafebar-joes/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})
