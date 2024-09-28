import path from 'path';
function pathNormalizer(filePath) {
  return path.normalize(filePath).replace(/\\/g, '/');
}
export{
  pathNormalizer
}
// const normalizedPath = normalizePath('src\\m.js');
// console.log(normalizedPath);  // Outputs: src/m.js
