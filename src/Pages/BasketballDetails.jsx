import React from 'react'
import Navbar from '../Components/Navbar'
import FetchBasketballData from '../Hooks/FetchBasketball'
import { useParams } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'

function BasketballDetails() {
    const {id} = useParams()
    const { loading, error, data } = FetchBasketballData('http://localhost:1337/api/basketballs/' + id)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :( </p>

  return (
    <>
      <Navbar />

      <Container className='mt-5'>
            <Card>
                <Card.Header as="h5">{data.data.attributes.title}</Card.Header>
                <Card.Body>
                    <Card.Title>
                        {/* <img src={data.data.attributes.image} alt="" /> */}
                    </Card.Title>
                    <Card.Text>{data.data.attributes.body}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    </>
  )
}

export default BasketballDetails
