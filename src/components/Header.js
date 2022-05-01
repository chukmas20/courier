import React from 'react';
import { Container, Nav, Navbar, Form, FormControl, NavDropdown, Button} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import logo from "../images/lso.jpeg";


const Header = () => {
  return (
    <>
    {/* <Navbar bg="light" variant="light" style={{height:'85px'}}>
      <Container >
      <Navbar.Brand href="#home"><img  src={logo} style={{ width:'100px'}}/></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Shipping</Nav.Link>
        <Nav.Link href="#features">Services</Nav.Link>
        <Nav.Link href="#pricing">Tracking</Nav.Link>
        <Nav.Link href="#pricing">About Us</Nav.Link>
      </Nav>
      </Container>
    </Navbar> */}
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/"><img  src={logo} style={{ width:'100px'}}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <LinkContainer to="/">
           <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tracking">
        <Nav.Link >Tracking</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
           <Nav.Link>About Us</Nav.Link>
        </LinkContainer>
        <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </>
  )
}

export default Header