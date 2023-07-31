// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    // <div className='App'>
      <Routes>
        <Route path='/' element={<> <Home /> <Header /> <Footer /> </> }   />
      </Routes>
    // </div>
  )
}

export default App
