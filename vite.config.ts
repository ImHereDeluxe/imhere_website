import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/pages'), // теперь @ будет ссылаться на src/

    },
  },
  // server: {
  //   //https: {}, // ← Вместо https: true
  //   proxy: {
  //     '/api': {
  //       target: 'https://imhere.space',
  //       changeOrigin: true,
  //       secure: true,
  //     }
  //   }
  // }
})
