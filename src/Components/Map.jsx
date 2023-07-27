import React from 'react'
import FootballCover from './FootballCover'
import BasketballCover from './BasketballCover'
import FetchBasketballData from '../Hooks/FetchBasketball'
import FetchFootballData from '../Hooks/FetchFootball'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

export default function Map() {
  const { loading, error, data } = FetchFootballData('http://localhost:1337/api/footballs?populate=*')
  const { loading: basketballLoading, error: basketballError, data: basketballData } = FetchBasketballData('http://localhost:1337/api/basketballs?populate=*')
  

  // const {loading, error, data} = FetchFootballData(`${url}?_sort=createdAt:asc&_limit=2`)
    // const {loading: basketballLoading, error: basketballError, data: basketballData} = FetchBasketballData(`${url}?_sort=createdAt:desc&_limit=2`)

  if (loading || basketballLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error || basketballError) {
    return <p>Error :( </p>
  }

  const trendingFootball = data.data.slice(-2)
  const trendingBasketball = basketballData.data.slice(-2)
  const firstFourFootball = data.data.slice(0, 4);
  const firstFourBball = basketballData.data.slice(0, 4);
      
  return (
    <>
        <div className='row row-cols-1 row-cols-md-2 g-4 p-5'>
          {trendingFootball.map((trend) => (
            <Link style={{textDecoration: 'none'}} to={`/footballDetails/${trend.id}`} key={trend.id}>
            <div className="team-item position-relative">
              <div className="img overflow-hidden">
                <img 
                  src={`http://localhost:1337${trend.attributes.image.data.attributes.url}`} alt="" 
                  className="img-fluid" />
              </div>
            <div className="position-absolute pos p-4 fw-bold text-white ms-2">
              <h2 className="mb-0 fw-bold">{trend.attributes.title}</h2>
              <span className='d-flex'>
                <p className='fw-bold'>{trend.attributes.author} -</p>
                <p className='text-mute ms-2'>{trend.attributes.date}</p>
              </span>
              {/* <small>{trend.attributes.body}</small> */}
            </div>
            </div>
            </Link>
          ))}

          {trendingBasketball.map((trend) => (
               <Link style={{textDecoration: 'none'}} to={`/basketballDetails/${trend.id}`} key={trend.id}> 
              <div className="team-item position-relative">
                <div className="img overflow-hidden">
                  <img 
                    src={`http://localhost:1337${trend.attributes.image.data.attributes.url}`} alt="" 
                    className="img-fluid" />
                </div>
              <div className="position-absolute pos p-4 text-white">
                <h2 className="mb-0 fw-bold">{trend.attributes.title}</h2>
                {/* <small>{trend.attributes.body}</small> */}
                <span className='d-flex'>
                <p className='fw-bold'>{trend.attributes.author} -</p>
                <p className='text-mute ms-2'>{trend.attributes.date}</p>
                </span>
              </div>
              </div>
              </Link>
            ))}
        </div>

        <FootballCover />
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
          {firstFourFootball.map((football) => (
            <Link style={{textDecoration: 'none'}} to={`/footballDetails/${football.id}`} key={football.id}>
            <div className="team-item col">
                <div className="card">
                  <div className='img'>
                    <img 
                      src={`http://localhost:1337${football.attributes.image.data.attributes.url}`} 
                      className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body hove">
                        <h5 className="card-title fw-bold">{football.attributes.title}</h5>
                        <span className='d-flex'>
                          <p className='fw-bold'>{football.attributes.author} -</p>
                          <p className='text-mute ms-2'>{football.attributes.date}</p>
                        </span>
                        <p className="card-text">{football.attributes.body.substring(0, 70)}</p>
                    </div>
                </div>
              </div>
              </Link>
          ))}
        </div>

        <BasketballCover />
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
            {firstFourBball.map((basketball) => (
               <Link style={{textDecoration: 'none'}} to={`/basketballDetails/${basketball.id}`} key={basketball.id}> 
                <div className='team-item col'>
                    <div className="card">
                      <div className='img'>
                        <img 
                          src={`http://localhost:1337${basketball.attributes.image.data.attributes.url}`} 
                          className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body hove">
                            <span className='d-flex justify-content-between'>
                                <p className="card-text fw-bold"><small className="text-body-secondary">{basketball.attributes.author}</small></p>
                                <p className="card-text"><small className="text-body-secondary">{basketball.attributes.date}</small></p>
                            </span>
                            <h5 className="card-title fw-bold">{basketball.attributes.title}</h5>
                            <p className="card-text">{basketball.attributes.body.substring(0, 70)}...</p>
                        </div>
                    </div>
                </div>
                </Link>
              ))}
        </div>
    </>
  )
}
