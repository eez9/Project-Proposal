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

function Cars() {
  return (
    <div>
        <header>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Johns' List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to ="./Login" href="#home">Login</Nav.Link>
            <Nav.Link href="#link" onSelect={toAboutPage}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      <main>
      <Container>
      <Row className='px-10 my-11'>
        
        <Col sm={20} className='px-10 my-6'>
          <h2 className="text-center">CARS</h2>
          <Row xs="auto" md={3} >
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/" />
              <Card.Body>
              <Card.Title>2002 honda Civic</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> John doe<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(928)555-5959<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Car is well taken care off only has 100k miles
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/f1/eb/a9/f1eba9da5285268d6d247c08b3a5cb18.jpg" />
              <Card.Body>
              <Card.Title>2014 Ford Mustang</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Jonny Bravo<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(928)525-4459<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Great and Fast Car has 20k miles and clean title.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://www.mtx.com/images/thumbs/0005225_chevrolet-silverado-crew-cab-loaded-10-inch-200w-rms-vehicle-specific-custom-subwoofer-enclosure.jpeg" />
              <Card.Body>
              <Card.Title>2005 Chevy Silverado</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Ben Dover<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(928)626-9959<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> 200k miles come get it, needs tires.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
          </Row>
          <hr/>
          <Row xs='auto' md={3}>
          <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://2.bp.blogspot.com/-Lz1ffaN6Rlo/VvUWJwKd3lI/AAAAAAACVqk/Xu2YVlMpOk82APKg7gbKqKKC34WSABrBA/s1600/Toyota-Corolla-2017%2B%25283%2529.jpeg" />
              <Card.Body>
              <Card.Title>2017 Toyota Corolla</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> George Bush<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(262)115-4200<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> 50k miles highway miles only.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://bona-parts.ru/cache/gen/-1x1000_cc%2Fpublic%2Fuploads%2Fimages%2F4b%2F3c%2F4b3c9a9ba9e9773b5ad38efbb6788929fb8e576d_04abf1636e.jpg?s=mo-0BzbAXTlZFD0pRwxz9w" />
              <Card.Body>
              <Card.Title>2016 Toyota Tacoma</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Patrick Star<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(181)700-9029<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> great car never let me down.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://i.ebayimg.com/images/g/doMAAOSwWRVjyox-/s-l1600.jpg" />
              <Card.Body>
              <Card.Title>2013 dodge Avenger</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Harry Poter<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(262)665-9929<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> car has 90k miles, super reliable.                                             
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

export default Cars