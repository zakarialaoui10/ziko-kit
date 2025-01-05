import {App} from "./app.js";

console.log("Not interactive yet ")
setTimeout(()=>{
    document.querySelector("#app").replaceWith(App().element)
    console.log("Hydrated")
}
    ,1500)

export default App



