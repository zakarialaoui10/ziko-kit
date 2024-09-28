import path from "path"
import { dir2tree } from "./utils/dir2tree.js";
import { pathNormalizer } from "./utils/path-normalizer.js";
function flatDirTree(folderStructure, currentPath = '') {
    let flattenedRoutes = [];
    const newPath = path.join(currentPath, folderStructure.name);
    if (folderStructure.type === 'file') {
        flattenedRoutes.push(newPath);
    }
    if (folderStructure.type === 'folder' && folderStructure.children) {
        for (const child of folderStructure.children) {
            flattenedRoutes = flattenedRoutes.concat(flatDirTree(child, newPath));
        }
    }
    return flattenedRoutes;
}
const routesGenerator = root => flatDirTree( dir2tree(root)).map(n=>pathNormalizer(n));
export{
    routesGenerator
}