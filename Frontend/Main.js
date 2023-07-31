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

function Main() {
  return (
    <div>
        <header>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Johns' List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link" onSelect={toAboutPage}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      <main>
      <Container>
      <Row className='px-4 my-5'>
        <Col sm={4}>
          <Stack gap={3}>
            <Button variant="dark">Create a Listing</Button>
            <Button variant="dark">My Profile</Button>
            <Form.Control className="p-2" placeholder="Search johnslist" />
              <Button variant="secondary">Submit</Button>
          </Stack>
        </Col>
        <Col sm={8} className='px-3 my-6'>
          <h2 className="text-center">Categories</h2>
          <Row xs="auto" md={3} >
            <Col>
              <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/250/150" />
              <Card.Body>
              <Card.Title>Cars</Card.Title>
              <Card.Text>
                Details
              </Card.Text>
                <Button variant="success">Explore</Button>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/250/150" />
              <Card.Body>
              <Card.Title>Housing</Card.Title>
              <Card.Text>
                Details
              </Card.Text>
                <Button variant="success">Explore</Button>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/250/150" />
              <Card.Body>
              <Card.Title>Jobs</Card.Title>
              <Card.Text>
                Details
              </Card.Text>
                <Button variant="success">Explore</Button>
              </Card.Body>
              </Card>
            </Col>
          </Row>
          <hr/>
          <Row xs='auto' md={3}>
          <Col>
              <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/250/150" />
              <Card.Body>
              <Card.Title>Services</Card.Title>
              <Card.Text>
                Details
              </Card.Text>
                <Button variant="success">Explore</Button>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/250/150" />
              <Card.Body>
              <Card.Title>For Sale</Card.Title>
              <Card.Text>
                Details
              </Card.Text>
                <Button variant="success">Explore</Button>
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/250/150" />
              <Card.Body>
              <Card.Title>Nutrition</Card.Title>
              <Card.Text>
                Details
              </Card.Text>
                <Button variant="success">Explore</Button>
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
    <div></div>
  )
}

export default Main