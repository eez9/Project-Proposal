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

function Housing() {
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
          <h2 className="text-center">HOUSING</h2>
          <Row xs="auto" md={3} >
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://www.compass.com/m/b7a4abc0b43031b082652d9ccb85504e38dc4dc0_img_0_54087/origin.jpg" />
              <Card.Body>
              <Card.Title>3 Bedroom Home</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Jennifer Lopez<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(928)005-5959<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Beatiful 3 bedroom home, 1500 sq feet
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/47eaa3cbd4f0780f08937a6d7b7b9b9c-full.webp" />
              <Card.Body>
              <Card.Title>6 Bedroom House</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> John Snow<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(928)707-4459<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Nice Big house, has a big back yard
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://www.calcagni.com/cms/wp-content/uploads/2021/05/curb-appeal.jpeg" />
              <Card.Body>
              <Card.Title>4 Bedroom House</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Timmy Turner<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(928)696-9959<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Fancy 4 bedroom house, has a pool
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
          </Row>
          <hr/>
          <Row xs='auto' md={3}>
          <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://therealdeal.com/wp-content/uploads/2023/04/Former-Equity-Residential-Boss-Sells-Boca-Raton-Manse_Main.jpg" />
              <Card.Body>
              <Card.Title>10 Bedroom House</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Donald Duck<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(262)123-4567<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Great home big yard and pool.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://media-cloud.corcoranlabs.com/ListingFullAPI/RealogyMLS/MFRMLS:T3406579/5ce8e8456b41886b2609f8f479350a92" />
              <Card.Body>
              <Card.Title>6 bedroom House</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Ronald McDonald<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(181)600-9029<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Nice house right on the hills
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://www.compass.com/m/8107a10dba888e683022d18c1787ff361619533f_img_0_bd9d4/origin.jpg" />
              <Card.Body>
              <Card.Title>2 bedroom Home</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Ron Weisley<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(262)444-9929<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> great home with magical view                                             
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

export default Housing