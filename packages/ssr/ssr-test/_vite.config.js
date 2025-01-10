import { defineConfig } from 'vite';
import viteExpressPlugin from './_server-plugin.js';

export default defineConfig({
  plugins: [viteExpressPlugin()],
});
