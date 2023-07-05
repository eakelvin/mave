import React from 'react'
import Navbar from '../Components/Navbar'
import Football from '../Components/Football'
import Footer from '../Components/Footer'

function FootballPage() {
  return (
    <>
      <Navbar />
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
          <Football />
        </div>
      <Footer />
    </>
  )
}

export default FootballPage
