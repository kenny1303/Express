import React from 'react'
import {NavLink} from "react-router-dom"

const Login = () => {
  return (
      <div>
          <input type="text" name="" id="" placeholder='user' />
        <input type="password" name="" id="" placeholder='password' />
          <button>Ingrese</button>

    <div>
        <NavLink to="/registro">
            si no tienes cuenta, registrese
        </NavLink>
    </div>
    
    <div>
        <NavLink to="/olvide-clave">
                  olvide clave

                  
              </NavLink>
              <div>
                  <input type="email" name="" id="placecholder" />
              </div>
    </div>
    
    </div>
  )
}

export default Login