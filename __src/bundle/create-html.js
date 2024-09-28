import fs from "fs";
import path from "path"
/**
 * Creates index.html in each directory and fills it with the given content.
 * @param {Array<{ path: string, content: string }>} foldersWithContent - Array of objects with folder paths and content.
 */
function createHtmlFiles(foldersWithContent) {
    foldersWithContent.forEach(({ path: folderPath, content }) => {
        const filePath = path.join(folderPath, 'index.html');        
        fs.mkdirSync(folderPath, { recursive: true });
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Created: ${filePath}`);
    });
}

const template=(title = "ziko app", lang = "en")=>`
<!DOCTYPE html>
<html lang="${lang}" data-engine="ziko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    
</body>
</html
`

// Example usage:
const foldersWithContent = [
    { path: "dist/pages/main1", content: template("Ziko 1") },
    { path: "dist/pages/main2", content: template("Ziko 2") },
    { path: "dist/pages/nested/main3", content: template("Ziko 3") },
    { path: "dist/pages/app1", content: template("Ziko 3") }
];

createHtmlFiles(foldersWithContent);
