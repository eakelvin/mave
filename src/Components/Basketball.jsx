import React from 'react'
import data from '../data'

export default function Basketball() {
  const basketballNews = data.slice(13, 30)
  return (
    <>
      {basketballNews.map((item) => (  
        <div key={item.id} className='col'>
            <div className="card">
                <img src={item.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className='d-flex justify-content-around'>
                        <p className="card-text"><small className="text-body-secondary">{item.date}</small></p>
                        <p className="card-text"><small className="text-body-secondary">By {item.writer}</small></p>
                    </span>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    {/* <a href="#" className="btn btn-info">Read More</a> */}
                </div>
            </div>
        </div>
      ))}
    </>
  )
}

