import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="./images/pep.jpg" className="d-block w-100 img-thumbnail" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h3>Welcome to Mave Sports</h3>
          <h5>Get your trending sports news here!</h5>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./images/celtics.jpg" className="d-block w-100 image-fluid" alt="..." />
        <div className="carousel-caption d-none d-md-block text-dark">
          <h1 className='shadow'>Mave Sports delivers both Football & Basketball news</h1>
          <p></p>
        </div>
      </div>
      {/* <div className="carousel-item">
        <img src="" className="d-block w-100 image-fluid" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div> */}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
