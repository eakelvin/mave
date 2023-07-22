import React from 'react'
import Navbar from '../Components/Navbar'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FetchFootballData from '../Hooks/FetchFootball';

function FootballDetails() {
    const {id} = useParams()
    const { loading, error, data } = FetchFootballData('http://localhost:1337/api/footballs/' + id)
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

export default FootballDetails
