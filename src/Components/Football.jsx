import React from 'react'
import FootballData from '../FootballData'


export default function Football() {
  return (

    <>
    {FootballData.map((item) => (
      <div key={item.id} className="col">
          <div className="card">
              <img src={item.imgUrl} className="card-img-top" alt="..." />
              <div className='list-group list-group-flush'>
                <div className="p-2 d-flex justify-content-around">
                  <span>{item.date}</span>
                  <span>By {item.writer}</span>
                </div>
              </div>
              <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href="#" className="btn btn-secondary">Read More</a>
              </div>
          </div>
        </div>
     ))}
    </>

  )
}

