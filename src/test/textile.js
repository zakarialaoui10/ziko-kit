import { textile2html } from "../files/index.js";
// Example usage
const textileContent = `
h1. Document Title

This is an example of Textile content!

* Item 1
* Item 2
`;

const html = textile2html(textileContent);
console.log(html);
