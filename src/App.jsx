import Head from "./components/header"
import Nav from "./components/navbar"
import { Gives } from "./store/store"
import {Route, Routes} from "react-router-dom"
import { Outlet } from "react-router-dom"
function Inner(){
      return <div>
           
            <Nav/>
             <Outlet/>
            
      </div>

}
function App() {
 return   <Gives >
      <Inner/>
    
      </Gives>
    
 
}

export default App
