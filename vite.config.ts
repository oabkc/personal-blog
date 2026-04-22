import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 必须和你的仓库名完全一致，部署后不会丢样式
  base: '/personal-blog/'
})