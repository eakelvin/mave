import React from 'react'

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

    <div className="container p-3">
    <div className="card bg-dark text-light">
      <img src={props.imgUrl} className="card-img trans" alt="..." />
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className="card-img-overlay d-flex flex-column justify-content-center mt-5 pt-5">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text mb-2">{props.description}</p>
      </div>
    </div>
    </div>

    </>

  )
}
