// export function render(element, container) {
//     const domElement = globalThis.document.createElement(element.tag);
  
//     // Set properties
//     for (const [key, value] of Object.entries(element.props)) {
//       if (key.startsWith('on')) {
//         domElement.addEventListener(key.substring(2).toLowerCase(), value);
//       } else {
//         domElement[key] = value;
//       }
//     }
  
//     // Append children
//     element.children.forEach((child) => {
//       if (typeof child === "object") {
//         render(child, domElement);
//       } else {
//         domElement.appendChild(globalThis.document.createTextNode(child));
//       }
//     });
  
//     container.appendChild(domElement);
//   }

// index.js
export function render(element, container) {
    const domElement = globalThis.document.createElement(element.tag);
  
    // Set properties
    for (const [key, value] of Object.entries(element.props)) {
      if (key.startsWith('on')) {
        domElement.addEventListener(key.substring(2).toLowerCase(), value);
      } else {
        domElement[key] = value;
      }
    }
  
    // Append children
    element.children.forEach((child) => {
      if (typeof child === 'object') {
        render(child, domElement);
      } else {
        domElement.appendChild(globalThis.document.createTextNode(child));
      }
    });
  
    container.appendChild(domElement);
  }
  

  