import {h1} from "ziko";
const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const res = await api.json()
// console.log({a : import.meta.env.SSR})
const App = async () =>{
    return h1(res.title)
}
export default App