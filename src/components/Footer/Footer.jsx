import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';
const Footer = () => {
    return (
        <Container fluid>
            <footer className='d-flex flex-column align-items-center justify-content-center'>
                <p>Curso React</p>
                <p>Comision #54015</p>
                <p>Luz Torres</p>
            </footer>
        </Container>
        
    )
}

export default Footer