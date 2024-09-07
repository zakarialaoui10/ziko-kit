"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZikoJsx = ZikoJsx;
function ZikoJsx(nodeName, attributes) {
  var _ref;
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var children = args.length ? (_ref = []).concat.apply(_ref, args) : null;
  return {
    nodeName: nodeName,
    attributes: attributes,
    children: children
  };
}