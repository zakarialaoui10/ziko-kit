import {JSDOM} from "jsdom"
import {customPath, routesMatcher, dynamicRoutesParser, isDynamic} from "../utils"
const {document} = new JSDOM().window;
globalThis.document = document


const pages = import.meta.glob("./pages/**/*{.js,.mdz}")


export async function render(path) {
  const routes = Object.keys(pages)
  const root = "./pages/";
  const pairs = {}
  for(let i=0; i<routes.length; i++){
    const module = await pages[routes[i]]()
    const component = await module.default
    Object.assign(pairs,{[customPath(routes[i], root)]:component})
  }
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
    // head,
    html
   }
}

export{
  pages
}