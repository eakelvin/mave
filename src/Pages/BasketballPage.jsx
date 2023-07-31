import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import FetchBasketballData from '../Hooks/FetchBasketball'

function BasketballPage() {
  const { basketball } = FetchBasketballData()

  return (
    <>
      <Navbar />
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 p-5'>
        {basketball.map((basketballItem) => (
          <Link style={{textDecoration: 'none'}} to={`/basketballDetails/${basketballItem.id}`} key={basketballItem.id}> 
          <div className='col'>
              <div className="card">
                  <img 
                    src={basketballItem.image} 
                    className="card-img-top" alt="..." />
                  <div className="card-body hove">
                      <span className='d-flex justify-content-between'>
                          <p className="card-text fw-bold"><small className="text-body-secondary">{basketballItem.author}</small></p>
                          <p className="card-text"><small className="text-body-secondary">{basketballItem.date}</small></p>
                      </span>
                      <h5 className="card-title fw-bold">{basketballItem.title}</h5>
                      {/* <p className="card-text">{basketballItem.body.content.value}</p> */}
                      {basketballItem.body && basketballItem.body.content && (
                        <div>
                          {basketballItem.body.content.map((paragraph, index) => (
                            <p key={index}>{paragraph.content[0].value}</p>
                          ))}
                        </div>
                      )}
                  </div>
              </div>
          </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default BasketballPage
