import { useState } from 'react'
import './App.css'
import React from 'react'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div>
        <Home /><Header /><Footer />
        
      </div> 
    </>
  )
}

export default App
