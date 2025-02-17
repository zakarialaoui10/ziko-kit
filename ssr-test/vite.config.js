
import zikoPlugin from "./ziko-server-plugin.js"
function myPlugin() {
  const virtualModuleId = 'virtual:client-entry'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'my-plugin',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `
        import {EntryClient} from "ziko-server/entry-client";
        EntryClient({
          pages : import.meta.glob("./pages/**/*{.js,.mdz}")
        })
        `
      }
    },
  }
}
export default {
  plugins: [
    // myPlugin()
  ],
  // build: {
  //   rollupOptions: {
  //     input: 'virtual:entry', 
  //   },
  // },
  build: {
    target: 'esnext', // suport top level await in prod
  }
};
