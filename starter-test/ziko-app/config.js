import path from 'path';
import react from '@vitejs/plugin-react'; 
const inputs = {
  main4: 'pages/index.html',
  main1: 'pages/main1.js',
  main2: 'pages/main2.js',
  main3: 'pages/nested/main3.js',
  reactApp1: 'pages/app1.jsx'
};
const config={
    build: {
      rollupOptions: {
        input: inputs,
        output: {
          entryFileNames: (chunkInfo) => {
            const relativePath = path.relative('pages', chunkInfo.facadeModuleId);
            const directoryPath = path.dirname(relativePath); 
            const fileNameWithoutExt = path.basename(relativePath, path.extname(relativePath)); 
            const resultPath = path.join(directoryPath, fileNameWithoutExt);
            return `pages/${resultPath}.js`
          },
          dir: 'dist',
        },
      },
    },
    plugins:[
        react()
    ]
  }
export {
    config
}