import { md2html } from "../files/convert";
const mdcontent = `
# Hello World
This is **Markdown** content!

- List item 1
- List item 2
`;
const html = md2html(mdcontent);
console.log(html);