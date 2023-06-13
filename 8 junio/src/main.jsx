import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Publicar from './views/Publicar.jsx'
import Colaborar from './views/Colaborar.jsx'
import Buscar from './views/Buscar.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Publicar",
    element: <Publicar/>
  },
  {
    path: "Colaborar",
    element: <Colaborar/>
  },
  {
    path: "Buscar",
    element: <Buscar/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)