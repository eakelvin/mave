import React from 'react'
import Navbar from '../Components/Navbar'
import Basketball from '../Components/Basketball'
import Footer from '../Components/Footer'

function BasketballPage() {
  return (
    <>
      <Navbar />
      <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
          <Basketball />
      </div>
      <Footer />
    </>
  )
}

export default BasketballPage
