import {JSDOM} from "jsdom"
import {p} from "ziko"
const {document} = new JSDOM().window;
globalThis.document = document

console.log(document.body)
const a=p(p("LL").onClick(e=>console.log(e)))

a.render(document.body)

console.log(a.html)