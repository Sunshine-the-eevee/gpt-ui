import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
    base: '/gpt-ui/', // Replace <repository-name> with your GitHub repository’s name
  server: {
    host: '0.0.0.0', // Bind to all network interfaces, allowing external access
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173, // Use Render's assigned PORT or default to 5173
  },
});
