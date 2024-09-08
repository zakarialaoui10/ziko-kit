import { adoc2html } from "../files/convert";
const adoccontent = `
= Document Title
Author Name <author@example.com>

This is an example of AsciiDoc content!

* Item 1
* Item 2
`;

const html = adoc2html(adoccontent);
console.log(html);
