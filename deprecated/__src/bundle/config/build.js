import path from 'path';
/*
 Build Js 
 Build Html 
*/
const inputs = {
  main4: 'pages/index.html',
  main1: 'pages/main1.js',
  main2: 'pages/main2.js',
  main3: 'pages/nested/main3.js',
};
const config={
    build: {
      rollupOptions: {
        input: inputs,
        output: {
          entryFileNames: (chunkInfo) => {
            const relativePath = path.relative('pages', chunkInfo.facadeModuleId);
            const directoryPath = path.dirname(relativePath); 
            // const fileName = path.basename(relativePath); 
            const fileNameWithoutExt = path.basename(relativePath, path.extname(relativePath)); 
            const resultPath = path.join(directoryPath, fileNameWithoutExt);
            return `pages/${resultPath}.js`
          },
          dir: 'dist',
        },
      },
    },
  }
export {
    config
}