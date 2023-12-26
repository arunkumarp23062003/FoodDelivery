import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserMenuContext } from './Components/Context/UserMenuContext.jsx'
import { AuthContext } from './Components/Context/AuthContext.jsx'
import { CartContext } from './Components/Context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <AuthContext>
        <UserMenuContext>
          <CartContext>
            <App />
          </CartContext>
        </UserMenuContext>
      </AuthContext>
    </React.StrictMode>
  </Router>
)
