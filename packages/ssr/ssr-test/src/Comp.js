import {h1} from "ziko"

const Comp=(text)=>{
    return h1(text).onClick(()=>console.log("Hi"))
}

export default Comp