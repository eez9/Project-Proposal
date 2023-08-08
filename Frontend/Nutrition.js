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

function Nutrition() {
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
          <h2 className="text-center">Nutrition</h2>
          <Row xs="auto" md={3} >
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://spy.com/wp-content/uploads/2022/01/goli-gummies.jpg" />
              <Card.Body>
              <Card.Title>Goli Gummies</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Bugs Bunny<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(000)512-0079<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Help support energy metabolism and heart health.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://mvmntlmtd.com/cdn/shop/collections/ryse-supps-logo.png?v=1620969181" />
              <Card.Body>
              <Card.Title>Pre-Workout</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Bruce Banner<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(880)864-4444<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Enhances athletic performance.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://i.ebayimg.com/images/g/5pUAAOSwwI9ebmN3/s-l1600.jpg" />
              <Card.Body>
              <Card.Title>Metabolism Booster</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Fred Flinstone<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(222)444-6666<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Great metabolism diet slim pills. 
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
              <Card.Title>Protein Shake</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Tony Stark<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(555))606-2222<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Super Tasty protein shake for workouts
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61jeml0g-zL.jpg" />
              <Card.Body>
              <Card.Title>Rock Bars</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Steve Rogers<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(610)919-0707<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Really tasty chocolate protein bars.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://nutracelle.com/cdn/shop/articles/how-to-know-if-youre-purchasing-a-high-quality-multivitamin-315876_1600x.jpg?v=1667497945" />
              <Card.Body>
              <Card.Title>Enery Gummies</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Name:</span> Scott Lang<br />
                <span style={{ fontWeight: 'bold' }}>Contact:</span>(928)333-8914<br />
                <span style={{ fontWeight: 'bold' }}>Description:</span> Great for some energy boost.                                             
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

export default Nutrition