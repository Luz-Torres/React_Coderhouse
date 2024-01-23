
import React from 'react';
import Logo from '../Logo/Logo';
import './Navbar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import Login from '../Login/Login';

function NavBar() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-5">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#resolucion">Instrucciones</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"> Todos </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1"> 2x2 </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2"> 3x3 </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3"> Minx </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4"> Otros </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                        <Nav.Link href="#usuarios"><Login/></Nav.Link>
                        <Nav.Link href="#cart"><CartWidget/></Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;