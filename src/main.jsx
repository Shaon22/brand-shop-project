import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/pages/Home.jsx'
import AddProduct from './Components/pages/AddProduct.jsx'
import Mycart from './Components/pages/Mycart.jsx'
import Root from './Components/pages/Root.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element:<Root></Root>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('brand.json')
      },
      {
        path:'/addProducts',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/mycart',
        element:<Mycart></Mycart>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
