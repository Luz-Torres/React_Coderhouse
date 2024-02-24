
import React from 'react';
import Logo from '../Logo/Logo';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Login from '../Login/Login';
const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/"><Logo/></Link>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggle" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-5">
                        <Link className='nav-link text-center' to="/">Inicio</Link>
                        <Link className='nav-link text-center' to="/resolucion">Resolución</Link>
                        <Link className='nav-link text-center' to="/productos"> Productos</Link>
                        <Link className='nav-link text-center' to="/contacto">Contacto</Link>
                        <Link className='nav-link text-center' to="/usuarios">
                            <Login alt="User Icon"/>
                        </Link>
                        <Link className='nav-link' to="/cart">
                            <CartWidget alt="Cart Icon"/>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;