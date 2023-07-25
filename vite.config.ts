import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { VueRouterAutoImports, getPascalCaseRouteName } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({ getRouteName: getPascalCaseRouteName }),
    Vue(),
    VueJsx(),
    VueDevTools(),
    AutoImport({
      dts: true,
      vueTemplate: true,
      imports: ['vue', 'pinia', VueRouterAutoImports]
    }),
    Components({
      resolvers: [AntDesignVueResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: true,
    open: true,
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://jsonplaceholder.typicode.com',
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
