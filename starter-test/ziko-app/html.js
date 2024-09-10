import fs from "fs";
import path from "path"
function createHtmlFiles(folders = [], content = "") {
    folders.forEach(folder => {
        const filePath = path.join(folder, 'index.html');
        fs.mkdirSync(folder, { recursive: true });
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Created: ${filePath}`);
    });
}

// export {
//     createHtmlFiles
// }
// // Example usage:
const paths = [
    "dist/pages/",
    "dist/pages/app1",
    "dist/pages/nested/app2",
];
const contentString = "<html><body><h1>Hello World</h1></body></html>";

createHtmlFiles(paths, contentString);
