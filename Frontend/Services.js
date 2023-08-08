import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login";
import About from "./About"
import { useNavigate } from "react-router-dom"

function Services() {
  const history = useNavigate()
  return (
    <div>
        <header>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
      <Navbar.Brand href="/home" onSelect={history('/home')}>Johns' List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" onSelect={history('/')}>Login</Nav.Link>
            <Nav.Link href="/about" onSelect={history('/about')}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      <main>
      <Container>
      <Row className='px-10 my-11'>
        
        <Col sm={20} className='px-10 my-6'>
          <h2 className="text-center">SERVICES</h2>
          <Row xs="auto" md={3} >
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://d2ugbn5gb88fyp.cloudfront.net/1010160/0_0.png" />
              <Card.Body>
              <Card.Title>Mobile Detailing</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Elite Details<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(121)111-0659<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Will come to you for any detail.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://raymarlandscapes.com/img/containers/main/products/9G4A6608-HDR.jpg/68b6e9020246ba7a0d96aeb91199d701.jpg" />
              <Card.Body>
              <Card.Title>Lanscaping</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Pepe's Landscaping<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(928)444-4449<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Contact us for any landscaping need.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="data:image/jpeg;base64,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" />
              <Card.Body>
              <Card.Title>Electronic Repair</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> JustFixIt<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(232)444-2121<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Broken Device? we can fix it. 
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
          </Row>
          <hr/>
          <Row xs='auto' md={3}>
          <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://carlsonbuilding.com/wp-content/uploads/2019/09/0004_AdobeStock_215233790.jpg" />
              <Card.Body>
              <Card.Title>Carpet Cleaning</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Frank's Carpet Cleaning<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(555))999-4567<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Dirty Carpet? No problem we'll clean it.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://d2ugbn5gb88fyp.cloudfront.net/1046644/0_0.jpg" />
              <Card.Body>
              <Card.Title>Mechanic Services</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Car-Son's Auto Repair<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(300)100-2000<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Broken Ride. Consider it Fixed. 
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://d2ugbn5gb88fyp.cloudfront.net/1047925/0_0.jpg" />
              <Card.Body>
              <Card.Title>Barber</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Joel's barber shopl<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(123)900-8899<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Crazy hair, No problem, we got you!                                            
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
      </main>
    </div>
  )
}

function toAboutPage(){
  return(
    <div>
    </div>
  )
}

export default Services