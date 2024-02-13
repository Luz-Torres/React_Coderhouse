
import React from 'react';
import Logo from '../Logo/Logo';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Login from '../Login/Login';
function NavBar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/home"><Logo/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-5">
                        <Link className='nav-link' to="/home">Inicio</Link>
                        <Link className='nav-link' to="/resolucion">Resolución</Link>
                        <Link className='nav-link' to="/productos"> Productos</Link>
                        <Link className='nav-link' to="/contacto">Contacto</Link>
                        <Link className='nav-link' to="/usuarios"><Login/></Link>
                        <Link className='nav-link' to="/cart"><CartWidget/></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;