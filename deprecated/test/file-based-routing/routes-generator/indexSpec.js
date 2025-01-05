import path from "path"
import { routesGenerator } from "../../../src/file-based-routing/routes-generator.js";
const ROOT = path.join(process.cwd(),"test","file-based-routing","routes-generator","src")
// console.log(ROOT)

// console.log(routesGenerator(ROOT))

let Test1 = routesGenerator(ROOT);
describe("Route Generator", function() {
    it("__", function() {
      expect(Test1.sort()).toEqual(['src/index.js', 'src/about/me.js'].sort());
    });
});
