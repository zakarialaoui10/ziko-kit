// import { jsx as _jsx, jsxs as _jsxs } from "ziko/jsx-runtime";
function _jsx(tag, props, child) {
  return {
      tag,
      props: { ...props, children: child } // For a single child
  };
}

function _jsxs(tag, props, ...children) {
  return {
      tag,
      props: { ...props, children: children.flat() } // For multiple children
  };
}


export const app = _jsx("div", {
  children: _jsx("div", {
    children: _jsxs("ul", {
      children: [_jsx("li", {
        children: " 1 "
      }), _jsx("li", {
        children: " 2 "
      }), _jsx("li", {
        children: " 3 "
      }), _jsx("li", {
        children: " 4 "
      })]
    })
  })
});
