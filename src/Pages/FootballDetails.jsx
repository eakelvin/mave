import React from 'react'
import Navbar from '../Components/Navbar'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import data from '../data';

function FootballDetails() {
    const {id} = useParams()
    // const ball = data.find(item => item.id === id)

  return (
    <>
      <Navbar />

        <Container className='mt-5'>
            <Card>
                <Card.Header as="h5">{id}</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </Container>
    </>
  )
}

export default FootballDetails
