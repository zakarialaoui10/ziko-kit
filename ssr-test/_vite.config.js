import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    {
      name: 'virtual-module',
      resolveId(id) {
        if (id === 'virtual:entry-server') {
          return id; // Return virtual file id
        }
        return null;
      },
      load(id) {
        if (id === 'virtual:entry-server') {
          // This is your virtual file's content, it could be any logic or rendering code
          return `
            import {EntryServer} from "ziko-server/entry-server";
            const render = EntryServer({
              pages : import.meta.glob("./pages/**/*{.js,.mdz}")
            })
            
            export{
              render
            }
          `;
        }
        return null;
      }
    }
  ]
});
