import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
    plugins: [sveltekit()],
    server: {
        host: true, // atau '0.0.0.0'
        port: 5173
    }
});