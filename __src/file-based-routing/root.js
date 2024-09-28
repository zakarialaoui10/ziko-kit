import path from "path"
import { dir2routes } from "./utils/dir2routes.js"
const ROOT = path.join(process.cwd(),"./src")
console.log(ROOT)

console.log(dir2routes(ROOT))