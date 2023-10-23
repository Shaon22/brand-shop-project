import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/pages/Home.jsx'
import AddProduct from './Components/pages/AddProduct.jsx'
import Mycart from './Components/pages/Mycart.jsx'
import Root from './Components/pages/Root.jsx'
import ProductsDetails from './Components/Others/productsDetails'
import Products from './Components/Others/Products'
import UpdateProducts from './Components/Others/UpdateProducts'
import AuthProvider from './Components/AuthProvider/AuthProvider'
import Login from './Components/pages/Login'
import Register from './Components/pages/Register'
import PrivateRoute from './Components/Private/PrivateRoute'
import Error from './Components/pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brand.json')
      },
      {
        path: '/addProducts',
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>
      },
      {
        path: '/myCart',
        element: <PrivateRoute>
          <Mycart></Mycart>
        </PrivateRoute>
      },
      {
        path: '/products/:brand_name',
        element: <Products></Products>,
        loader: () => fetch('/brand.json'),
      },
      {
        path: '/updateProducts/:id',
        element:<PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path:'/productDetails/:id',
        element:<PrivateRoute><ProductsDetails></ProductsDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),

      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
