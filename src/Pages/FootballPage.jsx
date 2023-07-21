import React from 'react'
import Navbar from '../Components/Navbar'
// import Football from '../Components/Football'
import Footer from '../Components/Footer'
import data from '../data'
import { Link } from 'react-router-dom'

function FootballPage() {
  const footballNews = data.slice(3, 13)
  return (
    <>
      <Navbar />
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
          {footballNews.map((item) => (
            <Link to={`/footballDetails/${item.id}`} key={item.id}>
            <div className="col">
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
                    </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      <Footer />
    </>
  )
}

export default FootballPage
