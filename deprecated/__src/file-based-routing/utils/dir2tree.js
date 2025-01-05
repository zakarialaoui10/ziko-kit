import fs from "fs"
import path from "path"
function dir2tree(rootFolder) {
    function readDirRecursive(dirPath) {
        const result = {
            name: path.basename(dirPath),
            type: 'folder',
            children: []
        };
        const items = fs.readdirSync(dirPath);
        for (const item of items) {
            const fullPath = path.join(dirPath, item);
            const stats = fs.statSync(fullPath);
            if (stats.isDirectory()) {
                result.children.push(readDirRecursive(fullPath));
            } else if (stats.isFile()) {
                result.children.push({
                    name: item,
                    type: 'file'
                });
            }
        }
        return result;
    }
    return readDirRecursive(rootFolder);
}
export{
    dir2tree
}