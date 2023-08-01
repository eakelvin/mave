import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import Footer from '../Components/Footer';
import Content from '../Hooks/Content';


function FootballDetails() {
    const {id} = useParams()
    const [singleFootball, setSingleFootball] = useState([])

    useEffect(() => {
      const fetchFootballDetails = async () => {
        try {
          const { entry } = await Content().getFootball(id);
          setSingleFootball(entry);
        } catch (error) {
          console.log('Error fetching football details:', error);
        }
      };
  
      fetchFootballDetails();
    }, [id]);
  
    if (!singleFootball) {
      return <div>Loading...</div>;
    }
  
    

  return (
    <>
      <Navbar />

        <Container className='mt-5 p-5'>
            <Card>
                <Card.Header className='p-5'>
                  <h1>{id}</h1>
                  <span className='d-flex'>
                      {/* <p className='fw-bold'>{author} -</p> */}
                      {/* <p className='text-mute ms-2'>{date}</p> */}
                  </span>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                      <div className=''>
                        <img
                          className='img-fluid'
                          // src={`http://localhost:1337${data.data.attributes.image.data.attributes.url}`} 
                         />
                      </div>
                    </Card.Title>
                    {/* <Card.Text className='mt-3'>{body}</Card.Text> */}
                </Card.Body>
            </Card>
        </Container>

       <Footer />
    </>
  )
}

export default FootballDetails
