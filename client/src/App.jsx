import './App.css'
import NavBar from './NavigationBar/NavBar'
import Top from './Extras/Top'
import Bottom from './Extras/Bottom'
import {Outlet} from "react-router"
function App() {
  
  return (
     <>
        <Top/>
        <NavBar/>
        <Bottom/>
        <Outlet/>
     </>
  )
}

export default App
