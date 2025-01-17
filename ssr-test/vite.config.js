function myPlugin() {
  const virtualModuleId = 'virtual:entry'
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
        import { createServer } from "ziko-server/server";
        console.log(1)
        createServer()
        `
      }
    },
  }
}
export default {
  plugins: [
    myPlugin()
  ],
  build: {
    rollupOptions: {
      input: 'virtual:entry', 
    },
  },
};
