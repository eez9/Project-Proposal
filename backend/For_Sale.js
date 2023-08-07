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

function Services() {
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
          <h2 className="text-center">For Sale</h2>
          <Row xs="auto" md={3} >
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://happiercamper.com/cdn/shop/files/Autocamp_Gray_Curbside_767a0861-c715-4316-afa8-88fee160abb9_1600x.jpg?v=1614291514" />
              <Card.Body>
              <Card.Title>Camper</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Elvis Parsley<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(180)360-0659<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Very Spaceous Camper with queen bed.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://i5.walmartimages.com/asr/902e870b-a13f-43a4-99e8-544cd188ee8f.868b4eb92b0bab45e7359c19efdfd99c.jpeg" />
              <Card.Body>
              <Card.Title>Dell Laptop</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Barry Allen<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(890)864-4449<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Dell Laptop, comes with charger
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://mysterio.yahoo.com/api/res/1.2/xaTT78U3dyRiZNdgNhz9AQ--/ZHByPTI7dz04NzU7YXBwaWQ9ZW5nYWRnZXQ-/https://s.yimg.com/os/creatr-uploaded-images/2023-01/d495c240-8bd6-11ed-87f3-bed5a838b2f0.cf.webp" />
              <Card.Body>
              <Card.Title>Samsung TV</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Justin Beiber<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(232)444-6464<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> 55in Samsung Smart Tv, comes with remote. 
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
          </Row>
          <hr/>
          <Row xs='auto' md={3}>
          <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="data:image/jpeg;base64,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" />
              <Card.Body>
              <Card.Title>Nintendo Switch</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Bruce Wayne<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(555))999-9090<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Nintendo Switch, comes with games
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://www.dtlr.com/cdn/shop/articles/aj-1-mid-1_1600x.jpg?v=1665512185" />
              <Card.Body>
              <Card.Title>Nike Jordan 1's</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Jerry Springer<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(600)222-9000<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Shoes are in great Condition.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://www.normann-copenhagen.com/-/media/Product-Pictures-Podio/Normann-Copenhagen/Kabino/Kabino/Kabino-Dresser-w-6-Drawers/601049/Kabino-Dresser-w-6-Drawers3.png?rev=892bbe62892444128238c91200520997" />
              <Card.Body>
              <Card.Title>Dresser</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Jack Black<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(928)626-8914<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Nice White Dresser, looks brand new.                                            
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