import React from 'react'
import Trends from './Trends'
import FootballCover from './FootballCover'
import BasketballCover from './BasketballCover'
import Fetch from '../Fetch'
import { Link } from 'react-router-dom'

export default function Map() {
  const { loading, error, data } = Fetch('http://localhost:1337/api/footballs?populate=*')
  console.log(data);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>

  // const trendingSport = data.slice(0,3)
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
        <div className='row row-cols-lg-3 g-2 p-5'>
          {/* {trending} */}
        </div>

        <FootballCover />
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
          {data.data.map((football) => (
            <div key={football.id} className="col">
              <Link>
                <div className="card">
                    <img 
                      src={`http://localhost:1337${football.attributes.image.data.attributes.url}`} 
                      className="card-img-top" alt="..." />
                    <div className='list-group list-group-flush'>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">{football.attributes.title}</h5>
                        <p className="card-text">{football.attributes.body}</p>
                    </div>
                </div>
              </Link>
              </div>
          ))}
        </div>

        <BasketballCover />
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
            {
              data.data.map((football) => (  
                <div key={football.id} className='col'>
                  <Link>
                    <div className="card">
                        <img 
                          src={`http://localhost:1337${football.attributes.image.data.attributes.url}`} 
                          className="card-img-top" alt="..." />
                        <div className="card-body">
                            {/* <span className='d-flex justify-content-around'>
                                <p className="card-text"><small className="text-body-secondary">{football.date}</small></p>
                                <p className="card-text"><small className="text-body-secondary">By {football.writer}</small></p>
                            </span> */}
                            <h5 className="card-title text-center">{football.attributes.title}</h5>
                            <p className="card-text">{football.attributes.body.substring(0, 100)}...</p>
                            {/* <a href="#" className="btn btn-info">Read More</a> */}
                        </div>
                    </div>
                  </Link>
                </div>
              ))
            }
        </div>
    </>
  )
}
