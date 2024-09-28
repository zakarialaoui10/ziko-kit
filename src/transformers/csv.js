import { csv2object } from "ziko";
export function ZikoViteCsv() {
    return {
      name: 'ziko-vite-csv',
      transform(src, id) {
        if (id.endsWith(".csv")) {
          const records = csv2object(src)
          return {
            code: `export default ${JSON.stringify(records)}`
          }
        }
      },
    };
  }