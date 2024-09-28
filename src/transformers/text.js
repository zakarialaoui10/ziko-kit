export function ZikoViteText() {
    return {
      name: 'ziko-vite-plugin-text',
      transform(src, id) {
        if (id.endsWith(".txt")) {
          return {
            code: `export default ${JSON.stringify(src)}`
          };
        }
      },
    };
  }
  