import { useState } from 'react'


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

// layout
import Layout from "./layout/Layout"

// paginas
import Login from "./pages/Login"
import Registrar from "./pages/Registrar"
import Olvideclave from "./pages/Olvideclave"
import Contactanos from "./pages/Contactanos"
import AcercaDe from "./pages/AcercaDe"


function App() {

  return (
 
   
        <BrowserRouter>
          {/* rutas publicas */}
          <Routes>
        <Route path="/" element={<Layout />}>
          
              <Route index element={<Login/>}/>
              <Route path="registro" element={<Registrar/>}/>
              <Route path="olvide-clave" element={<Olvideclave/>}/>
              <Route path="contactos" element={<Contactanos/>}/>
              <Route path="acerca-de" element={<AcercaDe/>}/>
      
            </Route>
          </Routes>
          {/* rutas privadas */} 
    
        </BrowserRouter>
      

  )
}

export default App
