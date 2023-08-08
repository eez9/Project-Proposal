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

function Jobs() {
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
          <h2 className="text-center">JOBS</h2>
          <Row xs="auto" md={3} >
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://st4.depositphotos.com/4590583/27109/i/1600/depositphotos_271098982-stock-photo-shish-kebab-bbq-meat-onions.jpg" />
              <Card.Body>
              <Card.Title>Cashier</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> BigFoot BBQ<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(028)111-5959<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Looking for cashier at restaurant
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://assets.bonappetit.com/photos/5caa24897086f84e81e2c216/master/w_1600%2Cc_limit/mirabella.jpg" />
              <Card.Body>
              <Card.Title>Dishwasher</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Olive Garden<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(928)777-4459<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> looking for part time dishwasher.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://www.wandelhalle-hamburg.de/wp-content/uploads/2023/03/McDonalds_Logo.png" />
              <Card.Body>
              <Card.Title>Manager</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> McDonald's<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(928)696-9999<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Looking for a full time manager. $20/hr
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
          </Row>
          <hr/>
          <Row xs='auto' md={3}>
          <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://st5.depositphotos.com/7196216/63290/i/1600/depositphotos_632901948-stock-photo-wendys-fast-food-restaurant-galveston.jpg" />
              <Card.Body>
              <Card.Title>Cook</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Wendy's<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(262)000-4567<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Looking for full time cook. $17.50/hr.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://www.freepnglogos.com/uploads/walmart-logo-27.jpg" />
              <Card.Body>
              <Card.Title>General Merchandising</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Walmart<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(181)200-9029<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Looking for a general merchant. $22/hr
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://3.bp.blogspot.com/-lahaRT89y8k/VJF-1g0I_ZI/AAAAAAAAC3c/dNZLGymH9I8/s1600/lasvegas-rooteto10.jpg%20border=" />
              <Card.Body>
              <Card.Title>Housekeeping</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Luxor Hotel<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(262)444-9929<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Looking for housekeeping full time. $30/hr                                             
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

export default Jobs