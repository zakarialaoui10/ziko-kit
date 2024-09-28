// function ZikoJsx(nodeName, attributes, ...args) {
//     let children = args.length ? [].concat(...args) : null;
//     return { nodeName, attributes, children };
// }
// export { ZikoJsx };

export function ZikoJsx(tag, props, ...children) {
    return {
      tag,
      props: props || {},
      children: children.length ? children.flat() : []
    };
  }