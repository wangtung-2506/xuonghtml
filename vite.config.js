// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        shop: resolve(__dirname, './shop.html'),
        info: resolve(__dirname, './product-info.html'),
        login: resolve(__dirname, './login.html'),
        checkout: resolve(__dirname, './checkout.html'),
      },
    },
  },
})