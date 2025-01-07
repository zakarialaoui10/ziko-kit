import {h1, Suspense} from "ziko"

const ui=async (id)=>{
    const api = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const res = await api.json()
    return h1(res.title)
}

const App = ({id}) =>{
    return Suspense(
        h1("... waiting"), 
        ()=>ui(id)
    )
}
export default App