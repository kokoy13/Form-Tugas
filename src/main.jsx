import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/REgister'
import InputHomework from './pages/InputHomework'
import Homework from './pages/Homework'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },{
    path: "/login",
    element: <Login/>
  },{
    path: "/register",
    element: <Register/>
  },{
    path: "/inputhomework",
    element: <InputHomework/>
  },{
    path: "/homework",
    element: <Homework/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
