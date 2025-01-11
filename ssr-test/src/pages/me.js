import {h1, Suspense} from "ziko"

const ui=async ()=>{
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const res = await api.json()
    return h1(res.title)
}
ui()
const App = () =>{
    return Suspense(
        h1("Me"), ui
    )
}
export default App