import { pathNormalizer } from "../../../src/file-based-routing/utils/path-normalizer.js";
let Test = pathNormalizer("src\\artcles\\index.js");
describe("Paths Normalizer ", function() {
    it("__", function() {
      expect(Test).toEqual("src/artcles/index.js");
    });
});
