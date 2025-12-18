import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Component/Layout'
import Home from './Component/Home'
import About from './Component/About'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'


export default function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        }
      ]
    }
  ])



  return (
    <RouterProvider router={router} />
  )
}
