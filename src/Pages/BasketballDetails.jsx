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
                <Card.Header as="h5">{data.data.attributes.title}</Card.Header>
                <Card.Body>
                    <Card.Title>
                        <img
                          className='' 
                          src={`http://localhost:1337${data.data.attributes.image.data.attributes.url}`} alt="" />
                    </Card.Title>
                    <Card.Text>{data.data.attributes.body}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    </>
  )
}

export default BasketballDetails
