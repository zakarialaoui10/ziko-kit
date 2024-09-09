import { JSDOM } from 'jsdom';

function dom2html(element) {
  const dom = new JSDOM('<div></div>');
  const document = dom.window.document;
  const domElement = document.createElement(element.tag);
  for (const [key, value] of Object.entries(element.props || {})) {
    if (key.startsWith('on')) {
      domElement.addEventListener(key.substring(2).toLowerCase(), value);
    } else {
      domElement.setAttribute(key, value);
    }
  }
  (element.children || []).forEach((child) => {
    if (typeof child === 'object') {
      domElement.appendChild(dom2html(child));
    } else {
      domElement.appendChild(document.createTextNode(child));
    }
  });
  return domElement;
}

export {dom2html}
// const app = {
//   tag: "div",
//   props: { id: "root" },
//   children: [
//     {
//       tag: "h1",
//       props: { onClick: () => console.log('Hello, World!') },
//       children: ["Welcome"]
//     },
//     {
//       tag: "p",
//       children: ["This is a paragraph inside a div."]
//     }
//   ]
// };


// console.log(dom2html(app).innerHTML)

