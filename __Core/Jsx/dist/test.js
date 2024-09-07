"use strict";

var _jsxRuntime = require("./jsx-runtime");
/** @jsx h */

// Define a component as a function
function MyComponent(props) {
  return h("div", {
    className: "my-component"
  }, h("h2", null, props.title), h("p", null, props.description));
}
function NumberList() {
  var numbers = [1, 2, 3, 4, 5];
  var listItems = [];
  for (var i = 0; i < numbers.length; i++) {
    listItems.push(h("li", {
      key: i
    }, numbers[i]));
  }
  return h("ul", null, listItems);
}
var element = h("section", null, h(MyComponent, {
  title: "Hello, World!",
  description: "This is a custom JSX component without React."
}), h(NumberList, null));
console.log(element);