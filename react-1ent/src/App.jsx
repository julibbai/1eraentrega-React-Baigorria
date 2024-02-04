import {Navbar} from "./components/layout/Navbar"
import ItemListContainer from "./components/pages/ItemListContainer"

const App = ()=> {

  return (
<div>
  <Navbar/>
  <ItemListContainer greeting="Hola, este es un saludo desde App"/>
  
  </div>
  )
}

export default App
