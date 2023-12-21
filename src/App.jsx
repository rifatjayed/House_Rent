import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {


  return (
    <div className='max-w-[1240px] mx-auto bg-white	'>
    <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
