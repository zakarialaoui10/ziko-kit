export function ZikoViteCsv() {
    return {
      name: 'ziko-vite-plugin-yml',
      transform(src, id) {
        if (id.endsWith(".yml")) {
          const records = "yml trnasformation"
          return {
            code: `export default ${JSON.stringify(records)}`
          }
        }
      },
    };
  }