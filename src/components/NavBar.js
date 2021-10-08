import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import logo from './img/logo_grande.png';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-light navbar-light nav-bg-opacity">
          <Container>
            <Navbar.Brand href="#home" className="alignLogo"><img src={logo} alt="Nutriclub" width="40%"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/">Inicio</Link>
                <Link to="/" className="alignNavbar">Sobre mi</Link>
                <NavDropdown title="Tienda" id="basic-nav-dropdown" className="alignNavbar">
                  <NavDropdown.Item href="#action/3.1">Basta de dietas</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">100 Ideas</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Recetas saludables</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Guia semanal</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">Fiestas: Salado</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">Fiestas: Dulce</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="" className="alignNavbar">Recetas</Nav.Link>
                <Nav.Link href="" className="alignNavbar">Contacto</Nav.Link>
              </Nav>
              <CartWidget number={1}/>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default NavBar

