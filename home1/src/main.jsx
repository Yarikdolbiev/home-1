import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter }  from "react-router-dom";
import UserContext from './Components/UserContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<UserContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserContext>
  </React.StrictMode>,
)