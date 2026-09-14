import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import laravel from 'laravel-vite-plugin'
import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const proxyHost = process.env.VITE_PROXY_HOST
  const appOrigin = new URL(env.APP_URL || 'http://localhost:8080').origin

  return {
    plugins: [
      laravel({ input: 'resources/js/app.tsx', refresh: true }),
      react(),
      tailwindcss(),
    ],
    resolve: { alias: { '@': fileURLToPath(new URL('./resources/js', import.meta.url)) } },
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: true,
      cors: { origin: [appOrigin, 'http://localhost:8000', 'http://127.0.0.1:8000'] },
      allowedHosts: proxyHost ? [proxyHost] : undefined,
      hmr: proxyHost
        ? { host: proxyHost, clientPort: 80, protocol: 'ws' }
        : { host: 'localhost', clientPort: Number(env.VITE_PORT || 5173) },
    },
  }
})
