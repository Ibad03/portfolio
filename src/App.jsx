import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Who_I_am from './Components/Who_I_am'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='w-full min-h-[100vh] bg-[#16042C] bg-gradient-to-br from-[#16042C] via-[#320c5c] to-[#E019BC]'>
      <Navbar/>
      <Home/>
      <Who_I_am/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
