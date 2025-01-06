import {customPath, routesMatcher, dynamicRoutesParser, isDynamic} from "../utils"

const pages = await import.meta.glob("./pages/**/*{.js,.mdz}")
const routes = Object.keys(pages)
const root = "./pages/";
const pairs = {}
for(let i=0; i<routes.length; i++){
  const module = await pages[routes[i]]()
  const component = await module.default
  Object.assign(pairs,{[customPath(routes[i], root)]:component})
}

export function render(path) {
  console.log("client")
  let [mask, callback]=Object.entries(pairs).find(([route,])=>routesMatcher(route,`/${path}`))
  console.log({mask, callback})
  let UIElement;
  if(isDynamic(mask)){
    const params = dynamicRoutesParser(mask, `/${path}`)
    console.log({params})
    UIElement = callback.call(this,params)
  }
  else UIElement = callback()

  const html = UIElement.element.outerHTML
  return { 
    html
   }
}


export{
  pages
}

console.log(typeof location.pathname)


setTimeout(() => {
    render(location.pathname.slice(1))
}, 1000);
// import {App} from "./app.js";

// console.log("Not interactive yet ")
// setTimeout(()=>{
//     document.querySelector("#app").replaceWith(App().element)
//     console.log("Hydrated")
// }
//     ,1500)

// export default App



