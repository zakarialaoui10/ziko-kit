import fs from 'node:fs/promises';
import express from 'express';
console.log("From Plugin")
export default function viteExpressPlugin() {
  return {
    name: 'vite-express',
    configureServer: async (server) => {
      const isProduction = process.env.NODE_ENV === 'production';
      const port = process.env.PORT || 3000;
      const base = process.env.BASE || '/';

      // Cached production assets
      const templateHtml = isProduction
        ? await fs.readFile('./dist/client/index.html', 'utf-8')
        : '';

      // Create http server
      const app = express();

      /** @type {import('vite').ViteDevServer | undefined} */
      let vite;

      // Add Vite or respective production middlewares
      if (!isProduction) {
        vite = server; // Use Vite's development server directly
        app.use(vite.middlewares);
      } else {
        const compression = (await import('compression')).default;
        const sirv = (await import('sirv')).default;
        app.use(compression());
        app.use(base, sirv('./dist/client', { extensions: [] }));
      }

      // Serve HTML
      app.use('*all', async (req, res) => {
        try {
          const url = req.originalUrl.replace(base, '');

          let template;
          let render;

          if (!isProduction) {
            template = await fs.readFile('./index.html', 'utf-8');
            template = await vite.transformIndexHtml(url, template);
            render = (await vite.ssrLoadModule('/src/entry-server.js')).render;
          } else {
            template = templateHtml;
            render = (await import('./dist/server/entry-server.js')).render;
          }

          const rendered = await render(url);

          const html = template
            .replace(`<!--app-head-->`, rendered.head ?? '')
            .replace(`<!--app-html-->`, rendered.html ?? '');

          res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
        } catch (e) {
          vite?.ssrFixStacktrace(e);
          console.error(e.stack);
          res.status(500).end(e.stack);
        }
      });

      // Start the server
      app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
      });
    },
  };
}
