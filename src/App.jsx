import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import FootballPage from './Pages/Football'
import Basketball from './Pages/BasketballPage'
import Livestream from './Pages/Livestream'
import Errorpage from './Pages/Errorpage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/football' element={<FootballPage />} />
          <Route path='/basketball' element={<Basketball />} />
          <Route path='/livestream' element={<Livestream />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
