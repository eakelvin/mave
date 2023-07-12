import React from 'react'
import data from '../data'
import Trends from './Trends'
import Football from './Football'
import Basketball from './Basketball'
import FootballCover from './FootballCover'
import BasketballCover from './BasketballCover'

export default function Map() {
  const trendingSport = data.slice(0,3)
  const firstFourFootball = data.slice(3, 7);
  const firstFourBball = data.slice(13, 17);

    const trending = trendingSport.map(item => {
        return <Trends
          key={item.id}
          {...item}
         />
      })
      
  return (
    <>
        <div className='row row-cols-lg-3 g-2 p-5'>
          {trending}
        </div>

        <FootballCover />
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
          {firstFourFootball.map((item) => (
            <div key={item.id} className="col">
                <div className="card">
                    <img src={item.imgUrl} className="card-img-top" alt="..." />
                    <div className='list-group list-group-flush'>
                      {/* <div className="p-2 d-flex justify-content-around">
                        <span>{item.date}</span>
                        <span>By {item.writer}</span>
                      </div> */}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        {/* <a href="#" className="btn btn-secondary">Read More</a> */}
                    </div>
                </div>
              </div>
          ))}
        </div>

        <BasketballCover />
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
            {
              firstFourBball.map((item) => (  
                <div key={item.id} className='col'>
                    <div className="card">
                        <img src={item.imgUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            {/* <span className='d-flex justify-content-around'>
                                <p className="card-text"><small className="text-body-secondary">{item.date}</small></p>
                                <p className="card-text"><small className="text-body-secondary">By {item.writer}</small></p>
                            </span> */}
                            <h5 className="card-title text-center">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            {/* <a href="#" className="btn btn-info">Read More</a> */}
                        </div>
                    </div>
                </div>
              ))
            }
        </div>
    </>
  )
}
