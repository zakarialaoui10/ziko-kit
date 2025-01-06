import {Article, h1} from "ziko"

const App = ({id}) => h1(`Article ${id}`).onClick(()=>console.log({Article : id}))

export default App