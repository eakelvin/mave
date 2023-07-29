import React from 'react'
import Navbar from '../Components/Navbar'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import FetchFootballData from '../Hooks/FetchFootball';
import Spinner from 'react-bootstrap/Spinner'
import Footer from '../Components/Footer';

function FootballDetails() {
    const {id} = useParams()
    // const { loading, error, data } = FetchFootballData('http://localhost:1337/api/footballs/' + id + '?populate=image')
   
    // if (loading) {
    //   return (
    //     <Spinner animation="border" role="status">
    //       <span className="visually-hidden">Loading...</span>
    //     </Spinner>
    //   );
    // }
  
    // if (error) {
    //   return <p>Error :( </p>
    // }

  return (
    <>
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
    </>
  )
}

export default FootballDetails
