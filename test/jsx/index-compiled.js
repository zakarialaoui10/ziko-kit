import { jsx as _jsx } from "ziko/jsx-runtime";
// const Comp = (
//   <div id="root">
//     <h1 onClick={() => alert('Hello, World!')}>Welcome</h1>
//     <p>This is a paragraph inside a div.</p>
//   </div>
// );
// export const app = (
//   <div id="root">
//     <Comp />
//     <h1 onClick={() => alert('Hello, World!')}>Welcome</h1>
//     <p>This is a paragraph inside a div.</p>
//   </div>
// );

export const app = _jsx("span", {
  children: "Hello World"
});
