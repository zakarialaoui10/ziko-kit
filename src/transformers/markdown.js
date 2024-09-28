import { remark } from 'remark';
import html from 'remark-html';

export function ZikoViteMarkdown() {
  return {
    name: 'ziko-vite-plugin-md',
    async transform(src, id) {
      if (id.endsWith(".md")) {
        const processedMarkdown = await remark().use(html).process(src);
        const content = processedMarkdown.toString();
        return {
          code: `export default ${JSON.stringify(content)}`
        };
      }
    },
  };
}
