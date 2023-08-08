import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"

function About() {
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
          <h2 className="text-center">About Us!</h2>
          <p1>
            Johnslist allows for users to efficiently browse product listings by users just like yourself!
            To get started, simply clikc the login tab and create a new account, then click the 'Create a Listing'
            button to start listing your own items. To browse other user's posts, click the 'Johnslist' tab in the Navbar
            and click on a category that you're interested in or use the search bar to find listings! Happy Browsing.
          </p1>
        </Col>
      </Row>
    </Container>
      </main>
    </div>
  )
}

export default About