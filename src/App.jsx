import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import FootballPage from './Pages/FootballPage'
import BasketballPage from './Pages/BasketballPage'
import Livestream from './Pages/Livestream'
import Errorpage from './Pages/Errorpage'
import AboutPage from './Pages/AboutPage'
import FootballDetails from './Pages/FootballDetails'
import BasketballDetails from './Pages/BasketballDetails'
import LiveDetails from './Pages/LiveDetails'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/football' element={<FootballPage />} />
          <Route path='/footballDetails/:id' element={<FootballDetails />} />
          <Route path='/basketball' element={<BasketballPage />} />
          <Route path='/basketballDetails/:id' element={<BasketballDetails />} />
          <Route path='/livestream' element={<Livestream />} />
          <Route path='/livestreamDetails/:id' element={<LiveDetails />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
