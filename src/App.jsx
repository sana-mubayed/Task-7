import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'

import { Route, Routes } from 'react-router-dom'
import Contact from './Pages/contact/contact'
import About from './Pages/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />


      </Routes>

    </>
  )
}

export default App
 