import {JSDOM} from "jsdom"
import {App} from "./app.js"
const {document} = new JSDOM().window;
globalThis.document = document
const app = App()

const head = null

export function render(_url) {
  const html = app.element.outerHTML
  return { 
    head,
    html
   }
}
