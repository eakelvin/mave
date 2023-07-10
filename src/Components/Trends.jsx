import React from 'react'
import data from '../data'

export default function Trends(props) {
  return (
    <>
    {/* <div className="container p-3">
        <div className="card text-bg-dark">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small>{props.update}</small></p>
                    <a href='#'><button type="button" className="btn btn-outline-info btn-lg">Read More</button></a>
                </div>
                <img src={props.imgUrl} className="card-img trans" alt="..." />    
        </div>
    </div> */}

    <div className="container">
    <div class="card text-bg-dark">
      <img src={props.imgUrl} class="card-img" alt="..." />
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small>Last updated 3 mins ago</small></p>
      </div>
    </div>
    </div>

    </>

  )
}
