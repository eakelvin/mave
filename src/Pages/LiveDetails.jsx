import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// import FetchLive from '../Hooks/FetchLive'
import { Card, Container, Spinner } from 'react-bootstrap'


function LiveDetails() {
    const {id} = useParams()
    // const { loading, error, data } = FetchLive('http://localhost:1337/api/livestreams/' + id + '?populate=image')
  
    // if (loading) {
    //     return (
    //       <Spinner animation="border" role="status">
    //         <span className="visually-hidden">Loading...</span>
    //       </Spinner>
    //     );
    //   }
    
    //   if (error) {
    //     return <p>Error :( </p>
    //   }

  return (
    <div>
        <Navbar />

        <Container className='mt-5 p-5'>
            <Card>
                <Card.Header className='p-5'>
                  <h1>{data.data.attributes.title}</h1>
                  <span className='d-flex'>
                      <p className='fw-bold'>{data.data.attributes.author} -</p>
                      <p className='text-mute ms-2'>{data.data.attributes.date}</p>
                  </span>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                      <div className=''>
                        <img
                          className='img-fluid'
                          src={`http://localhost:1337${data.data.attributes.image.data.attributes.url}`} 
                         />
                      </div>
                    </Card.Title>
                    <Card.Text className='mt-3'>{data.data.attributes.body}</Card.Text>
                </Card.Body>
            </Card>
        </Container>

        <Footer />
    </div>
  )
}

export default LiveDetails
