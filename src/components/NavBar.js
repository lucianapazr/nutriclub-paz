import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import logo from './img/logo_grande.png';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-light navbar-light nav-bg-opacity">
  <Container>
    <Navbar.Brand href="#home" className="alignLogo">
        <img src={logo} alt="Nutriclub" width="40%"></img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="" className="alignNavbar">Sobre mi</Nav.Link>
        <NavDropdown title="Recetas" id="basic-nav-dropdown" className="alignNavbar">
          <NavDropdown.Item href="#action/3.1">Ensalada de pollo</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Yogur mix</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Pastas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Omelette</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Helado casero</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="" className="alignNavbar">Tienda</Nav.Link>
        <Nav.Link href="" className="alignNavbar">Contacto</Nav.Link>
      </Nav>
      <CartWidget number={1}/>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar

