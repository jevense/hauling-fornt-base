import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  publicDir: 'public',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/common.scss";' // 预处理公共样式
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      "/report": {
        // target: "http://221.224.90.19:10102/report",
        target: "http://localhost:10212",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/report/, ""),
      },
      "/operation": {
        target: "http://221.224.90.19:10102/operation",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/operation/, ""),
      },
      "/auth": {
        target: "http://221.224.90.19:10102/auth",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, ""),
      },
      "/authHub": {
        target: "http://221.224.90.19:10102/authHub",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },

    },
  },
})
