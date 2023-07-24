import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import FetchFootballData from '../Hooks/FetchFootball'
import Spinner from 'react-bootstrap/Spinner'
import { useQuery, gql } from '@apollo/client'

const football = gql`
query GetFootball {
  footballs{
    data{
      id
    }
  }
}
`

function FootballPage() {
  const { loading, error, data } = FetchFootballData('http://localhost:1337/api/footballs?populate=*')
  // const { loading, error, data } = useQuery(football)
  console.log(data);
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return <p>Error :( </p>
  }

  return (
    <>
      <Navbar />
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-4 p-5'>
          {data.data.map((football) => (
            <Link style={{textDecoration: 'none'}} to={`/footballDetails/${football.id}`} key={football.id}>
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
                    <div className="card-body hove">
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
