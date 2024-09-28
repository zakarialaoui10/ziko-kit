export function ZikoViteJson() {
    return {
      name: 'ziko-vite-json',
      transform(src, id) {
        if (id.endsWith(".json")) {
          const records = JSON.parse(src)
          return {
            code: `export default ${JSON.stringify(records)}`
          }
        }
      },
    };
  }