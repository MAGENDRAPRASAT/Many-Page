import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,Route,createHashRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Help from './Layouts/Help'
import Faq from './Pages/help/Faq'
import Contact from './Pages/help/Contact'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='help' element={<Help/>}>
      <Route path="faq" element={<Faq/>}/>
      <Route path="contact" element={<Contact/>}/>

    </Route>
    </Route>
  )
)

function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
