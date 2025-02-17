// import { defineConfig } from 'vite';
// import fs from 'node:fs/promises';
// import path from 'node:path';

// export default function zikoPlugin() {
//   return {
//     name: 'vite-plugin-ziko',
//     config() {
//       return {
//         build: {
//           rollupOptions: {
//             input: {
//               main: path.resolve(process.cwd(), 'index.html'),
//             },
//           },
//         },
//         ssr: {
//           // Ensure Vite treats your library as SSR-compatible
//           noExternal: ['ziko-server'],
//         },
//       };
//     },
//     async transformIndexHtml(html) {
//       // Inject EntryClient into the HTML
//       const entryClientScript = `
//         <script type="module">
//           import { EntryClient } from "ziko-server/entry-client";
//           EntryClient({
//             pages: import.meta.glob("./pages/**/*{.js,.mdz}")
//           });
//         </script>
//       `;
//       return html.replace('</head>', `${entryClientScript}</head>`);
//     },
//     async configureServer(server) {
//       // Inject EntryServer for SSR during development
//       server.middlewares.use(async (req, res, next) => {
//         try {
//           const url = req.originalUrl;
//           const entryServerPath = path.resolve(process.cwd(), 'src/entry-server.js');
//           const { default: render } = await server.ssrLoadModule(entryServerPath);
//           const rendered = await render(url);
//           const template = await fs.readFile(path.resolve(process.cwd(), 'index.html'), 'utf-8');
//           const html = template
//             .replace(`<!--app-head-->`, rendered.head ?? '')
//             .replace(`<!--app-html-->`, rendered.html ?? '');
//           res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
//         } catch (e) {
//           next(e);
//         }
//       });
//     },
//     async generateBundle() {
//       // Generate SSG files during build
//       const pages = import.meta.glob('./pages/**/*{.js,.mdz}');
//       const routes = Object.keys(pages);
//       const outputDir = path.resolve(process.cwd(), 'dist/static');

//       await fs.mkdir(outputDir, { recursive: true });

//       for (const route of routes) {
//         const module = await pages[route]();
//         const component = await module.default;
//         const html = component().element.outerHTML;
//         const filePath = path.join(outputDir, route === '/' ? 'index.html' : `${route}.html`);
//         await fs.writeFile(filePath, html, 'utf-8');
//         console.log(`Pre-rendered: ${filePath}`);
//       }
//     },
//   };
// }

// vite-plugin-ziko.js
import {join} from 'path';
export default function zikoPlugin() {
  return {
    name: 'vite-plugin-ziko',

    config() {
      return {
        // Configuration for Vite, if needed
      };
    },

    configureServer(server) {
      server.middlewares.use( (req, res, next) => {
        const EntryClient = join(process.cwd(),"/src/entry-client.js")
        // console.log({cwd : join(process.cwd(),"/ma")})
        if(req.url === EntryClient) console.log(1)
          // if(req.url === "/ma") console.log("ma")

      
        // if (req.url === '/src/entry-client.js') {
        //   const content = `
        //     console.log(121)
        //     import {EntryClient} from "ziko-server/entry-client";
        //     EntryClient({
        //       pages : import.meta.glob("./pages/**/*{.js,.mdz}")
        //     })
        //   `;
        //   res.setHeader('Content-Type', 'application/javascript');
        //   res.end(content);
        // } 
        else if (req.url === '/entry-server.js') {
          const content = `
           import {defineServerEntry} from "ziko-server/entry-server";
           export default defineServerEntry({
              pages : import.meta.glob("./pages/**/*{.js,.mdz}")
           })
          `;
          res.setHeader('Content-Type', 'application/javascript');
          res.end(content);
        } 
        else if (req.url === '/server.js') {
          const content = `
           import { createServer } from "ziko-server/server";
           createServer()
          `;
          res.setHeader('Content-Type', 'application/javascript');
          res.end(content);
        } else {
          next();
        }
      });
    },
  };
}