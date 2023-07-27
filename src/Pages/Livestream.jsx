import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Card, Container } from 'react-bootstrap'
import FetchLive from '../Hooks/FetchLive'
import { Link } from 'react-router-dom'



function Livestream() {
  const { loading, error, data } = FetchLive('http://localhost:1337/api/livestreams?populate=*')
  // console.log(data);
  // const sortedData = data.data.sort((a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt))

  if (loading) return 
    {
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }

  if (error) return <p>Error :( </p>

  return (
    <>
      <Navbar/>

      <div className='row row-cols-1 row-cols-md-2 p-5'>
          {data.data.map((live) => (
            <Link style={{textDecoration: 'none'}} to={`/livestreamDetails/${live.id}`} key={live.id}>
              <div className="banner">
                <img
                  className='img-fluid' 
                  src={`http://localhost:1337${live.attributes.image.data.attributes.url}`} alt="" />
                <div className="content text-white fw-bold p-3">
                  <h3>{live.attributes.title}</h3>
                  <span>
                    <span>{live.attributes.author}</span>-<span className='text-mute fs-6'>{live.attributes.date}</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>


      <Footer />
    </>
  )
}

export default Livestream
