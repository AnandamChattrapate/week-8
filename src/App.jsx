import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'

import Home from './components/Home';
import Products from './components/Products';
import Contacts from './components/Contacts'
import Product from './components/Product';

import RootLayout from './components/RootLayout';
function App() {
  const routingObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'contacts',
          element:<Contacts/>
        },
        {
          path:'products',
          element:<Products/>,
          
        },{ path: "product", element: <Product /> },
        
          ]
        }


      ])
      return <RouterProvider router={routingObj} />
    }
  

 

export default App
