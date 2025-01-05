export function ZikoViteComponent() {
    return {
      name: 'ziko-vite-plugin-component',
      transform(src, id) {
        if (/\.(ziko.js|ziko)$/.test(id)) {
          const componentTagRegex = /<([A-Z][A-Za-z0-9]*)\s*([^\/]*)\/>/g;  
          const transformedCode = src.replace(componentTagRegex, (_, componentName, propsString) => {
            const props = parseProps(propsString.trim());
            return `${componentName}(${props})`;
          });
          return {
            code: transformedCode,
            map: null // Source maps can be added if needed
          };
        }
      },
    };
  }  
  function parseProps(propsString) {
    if (!propsString) return '{}'; 
    const propRegex = /([a-zA-Z][a-zA-Z0-9]*)=("[^"]*"|[^\s"]+)/g;
    let propsObject = {};
    let match;
    while ((match = propRegex.exec(propsString)) !== null) {
      const key = match[1];
      let value = match[2];
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (!isNaN(value)) {
        value = Number(value);
      }  
      propsObject[key] = value;
    }
  
    return JSON.stringify(propsObject);
  }
  