export function ZikoViteCsv() {
    return {
      name: 'ziko-vite-csv',
      transform(src, id) {
        if (id.endsWith(".csv")) {
          const records = JSON.parse(src)
          return {
            code: `export default ${JSON.stringify(records)}`
          }
        }
      },
    };
  }