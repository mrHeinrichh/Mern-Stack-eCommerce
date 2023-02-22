import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">REDFRAME SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <i className="fa-solid fa-cart-shopping"></i> &nbsp; CART
              </Nav.Link>
              <Nav.Link href="#link">
                <i className="fa-solid fa-user"></i> &nbsp; SIGNIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default header
