import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'pathe'
import vueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: '../api/public',
  },
  plugins: [
    vueRouter({
      dts: path.resolve(import.meta.dirname, './typed-router.d.ts'),
    }),
    vue(),
    vueJsx(),
    vueDevTools(),
    // @ts-ignore
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
