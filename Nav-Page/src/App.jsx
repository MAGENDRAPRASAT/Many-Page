import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Home'
import History from './History'
function App() {
  
  const ret=(a)=>{
      console.log(a);
  }

  return (
   <Router>

   <Routes>
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/history' element={<History />}/>
   </Routes>
   </Router>
  )
}

export default App
