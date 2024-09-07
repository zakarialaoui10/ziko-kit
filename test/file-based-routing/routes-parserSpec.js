import { routesParser } from "../../src/file-based-routing/index.js";
let Test1 = routesParser('articles/art1');
describe("Static Route", function() {
    it("__", function() {
      expect(Test1).toEqual({
        "route": "articles/art1",
        "type": "static",
        "params": null
    });
    });
});
let Test2 = routesParser('articles/[article]');
describe("Dynamic route", function() {
    it("__", function() {
      expect(Test2).toEqual({ route: 'articles/[article]', type: 'dynamic', params: [ 'article' ] });
    });
});
let Test3 = routesParser('articles/[article]-[lang]');
describe("Composed dynamic route", function() {
    it("", function() {
      expect(Test3).toEqual({
        route: 'articles/[article]-[lang]',
        type: 'dynamic',
        params: [ 'article', 'lang' ]
      });
    });
});
let Test4 = routesParser('articles/[]');
describe("Wildcard route", function() {
    it("", function() {
      expect(Test4).toEqual({ route: 'articles/[]', type: 'wildcard', params: null });
    });
});

let Test5 = routesParser('users/[userId]/posts/[]');
describe("Parametric Wildcard route", function() {
    it("", function() {
      expect(Test5).toEqual({
        route: 'users/[userId]/posts/[]',
        type: 'wildcard',
        params: [ 'userId' ]
      });
    });
});




