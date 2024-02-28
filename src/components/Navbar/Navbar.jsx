
import React from 'react';
import Logo from '../Logo/Logo';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
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
                    <NavLink to="/"><Logo/></NavLink>    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggle" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-5">
                        <NavLink className='nav-link text-center' to="/">Inicio</NavLink>
                        <NavLink className='nav-link text-center' to="/resolucion">Resolución</NavLink>
                        <NavLink className='nav-link text-center' to="/productos"> Productos</NavLink>
                        <NavLink className='nav-link text-center' to="/contacto">Contacto</NavLink>
                        <NavLink className='nav-link text-center' to="/usuarios">
                            <Login alt="User Icon"/>
                        </NavLink>
                        <NavLink className='nav-link' to="/cart">
                            <CartWidget alt="Cart Icon"/>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;