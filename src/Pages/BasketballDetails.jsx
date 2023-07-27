import React from 'react'
import Navbar from '../Components/Navbar'
import FetchBasketballData from '../Hooks/FetchBasketball'
import { useParams } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

function BasketballDetails() {
    const {id} = useParams()
    const { loading, error, data } = FetchBasketballData('http://localhost:1337/api/basketballs/' + id + '?populate=image')

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

      <Container className='mt-5'>
            <Card>
                <Card.Header className='p-5'>
                  <h1>{data.data.attributes.title}</h1>
                  <span className='d-flex justify-content-between'>
                      <p className="card-text fw-bold"><small className="text-body-secondary">{data.data.attributes.author}</small></p>
                      <p className="card-text"><small className="text-body-secondary">{data.data.attributes.date}</small></p>
                  </span>
                  </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <img
                          className='img-fluid' 
                          src={`http://localhost:1337${data.data.attributes.image.data.attributes.url}`} alt="" />
                    </Card.Title>
                    <Card.Text className='mt-3'>{data.data.attributes.body}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    </>
  )
}

export default BasketballDetails
