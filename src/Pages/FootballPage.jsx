import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import Fetch from '../Fetch'

function FootballPage() {
  // const footballNews = data.slice(3, 13)
  const { loading, error, data } = Fetch('http://localhost:1337/api/footballs?populate=*')
  // console.log(data);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>
  return (
    <>
      <Navbar />
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
          {data.data.map((football) => (
            <Link to={`/footballDetails/${football.id}`} key={football.id}>
            <div className="col">
                <div className="card">
                    <img 
                      // src={football.imgUrl}
                      src={`http://localhost:1337${football.attributes.image.data.attributes.url}`}  
                      className="card-img-top" alt="..." 
                    />
                    {/* <div className='list-group list-group-flush'>
                      <div className="p-2 d-flex justify-content-around">
                        <span>{football.date}</span>
                        <span>By {football.writer}</span>
                      </div>
                    </div> */}
                    <div className="card-body">
                        <h5 className="card-title">{football.attributes.title}</h5>
                        <p className="card-text">{football.attributes.body}</p>
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
