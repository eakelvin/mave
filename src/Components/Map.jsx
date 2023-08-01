import React, { useEffect, useState } from 'react'
import FootballCover from './FootballCover'
import BasketballCover from './BasketballCover'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import FetchFootballData from '../Hooks/FetchFootball'
import FetchBasketballData from '../Hooks/FetchBasketball'

export default function Map() {
  const { football } = FetchFootballData()
  const { basketball } = FetchBasketballData()

  if (!football || football.length === 0) {
    return <div>Loading...</div>;
  }
 
      
  return (
    <>
        <div className='row row-cols-1 row-cols-md-2 g-4 p-5'>
          {football.map((trend) => (
            <Link style={{textDecoration: 'none'}} to={`/footballDetails/${trend.id}`} key={trend.id}>
            <div className="team-item position-relative">
              <div className="img overflow-hidden">
                <img 
                  src={trend.image}
                  // src={`http://localhost:1337${trend.attributes.image.data.attributes.url}`} alt="" 
                  className="img-fluid" />
              </div>
            <div className="position-absolute pos p-4 fw-bold text-white ms-2">
              <h2 className="mb-0 fw-bold">{trend.title}</h2>
              <span className='d-flex'>
                <p className='fw-bold'>{trend.author} -</p>
                <p className='text-mute ms-2'>{trend.date}</p>
              </span>
              {/* <small>{trend.attributes.body}</small> */}
            </div>
            </div>
            </Link>
          ))}

          {basketball.map((trend, index) => (
               <Link style={{textDecoration: 'none'}} to={`/basketballDetails/${trend.id}`} key={index}> 
              <div className="team-item position-relative">
                <div className="img overflow-hidden">
                  <img
                    src={trend.image} 
                    // src={`http://localhost:1337${trend.attributes.image.data.attributes.url}`} alt="" 
                    className="img-fluid" />
                </div>
              <div className="position-absolute pos p-4 text-white">
                <h2 className="mb-0 fw-bold">{trend.title}</h2>
                {/* <small>{trend.attributes.body}</small> */}
                <span className='d-flex'>
                <p className='fw-bold'>{trend.author} -</p>
                <p className='text-mute ms-2'>{trend.date}</p>
                </span>
              </div>
              </div>
              </Link>
            ))}
        </div>

        <FootballCover />
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
          {football.map((footballItem, index) => (
            <Link style={{textDecoration: 'none'}} to={`/footballDetails/${footballItem.id}`} key={index}>
            <div className="team-item col">
                <div className="card">
                  <div className='img'>
                    <img
                      src={footballItem.image} 
                      // src={`http://localhost:1337${footballItem.attributes.image.data.attributes.url}`} 
                      className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body hove">
                        <h5 className="card-title fw-bold">{footballItem.title}</h5>
                        <span className='d-flex'>
                          <p className='fw-bold'>{footballItem.author} -</p>
                          <p className='text-mute ms-2'>{footballItem.date}</p>
                        </span>
                        {/* <p className="card-text">{footballItem.body.substring(0, 70)}</p> */}
                    </div>
                </div>
              </div>
              </Link>
          ))}
        </div>

        <BasketballCover />
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
            {basketball.map((basketballItem, index) => (
               <Link style={{textDecoration: 'none'}} to={`/basketballDetails/${basketballItem.id}`} key={index}> 
                <div className='team-item col'>
                    <div className="card">
                      <div className='img'>
                        <img
                          src={basketballItem.image} 
                          // src={`http://localhost:1337${basketball.attributes.image.data.attributes.url}`} 
                          className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body hove">
                            <span className='d-flex justify-content-between'>
                                <p className="card-text fw-bold"><small className="text-body-secondary">{basketballItem.author}</small></p>
                                <p className="card-text"><small className="text-body-secondary">{basketballItem.date}</small></p>
                            </span>
                            <h5 className="card-title fw-bold">{basketballItem.title}</h5>
                            {/* <p className="card-text">{basketballItem.body.substring(0, 70)}...</p> */}
                        </div>
                    </div>
                </div>
                </Link>
              ))}
        </div>
    </>
  )
}
