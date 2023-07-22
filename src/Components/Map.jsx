import React from 'react'
import Trends from './Trends'
import FootballCover from './FootballCover'
import BasketballCover from './BasketballCover'
import Fetch from '../Fetch'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { AiFillFacebook } from "react-icons/ai";

export default function Map() {
  const { loading, error, data } = Fetch('http://localhost:1337/api/footballs?populate=*')
  if (loading) return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
  if (error) return <p>Error :( </p>

  const trendingSport = data.data.slice(0,3)
  // const firstFourFootball = data.slice(3, 7);
  // const firstFourBball = data.slice(13, 17);

    // const trending = data.data.map(football => {
    //     return <Trends
    //       key={football.id}
    //       {...football}
    //      />
    //   })
      
  return (
    <>
        <div className='row row-cols-1 row-cols-lg-3 g-4 p-5'>
          {trendingSport.map((trend) => (
            <Link style={{textDecoration:'none'}} to=''>
            <div key={trend.id} className="team-item">
              <div className="img overflow hidden">
                <img 
                  src={`http://localhost:1337${trend.attributes.image.data.attributes.url}`} alt="" 
                  className="img-fluid" />
              </div>
            <div className="text-center p-4 hove font-bold">
              <h5 className="mb-0">{trend.attributes.title}</h5>
              <small>{trend.attributes.body}</small>
            </div>
            </div>
            </Link>
          ))}
        </div>

        <FootballCover />
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
          {data.data.map((football) => (
            <Link style={{textDecoration: 'none'}} to=''>
            <div key={football.id} className="team-item col">
             
                <div className="card">
                  <div className='img'>
                    <img 
                      src={`http://localhost:1337${football.attributes.image.data.attributes.url}`} 
                      className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body hove">
                        <h5 className="card-title text-center">{football.attributes.title}</h5>
                        <p className="card-text">{football.attributes.body.substring(0, 70)}</p>
                    </div>
                </div>
              </div>
              </Link>
          ))}
        </div>

        <BasketballCover />
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
            {data.data.map((football) => (
                <Link style={{textDecoration: 'none'}} to=''>  
                <div key={football.id} className='team-item col'>
                    <div className="card">
                      <div className='img'>
                        <img 
                          src={`http://localhost:1337${football.attributes.image.data.attributes.url}`} 
                          className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body hove">
                            {/* <span className='d-flex justify-content-around'>
                                <p className="card-text"><small className="text-body-secondary">{football.date}</small></p>
                                <p className="card-text"><small className="text-body-secondary">By {football.writer}</small></p>
                            </span> */}
                            <h5 className="card-title text-center">{football.attributes.title}</h5>
                            <p className="card-text">{football.attributes.body.substring(0, 70)}...</p>
                        </div>
                    </div>
                </div>
                </Link>
              ))}
        </div>
    </>
  )
}
