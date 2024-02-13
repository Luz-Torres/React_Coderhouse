import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Productos = () => {
    return (
        <section>
            <h1 className='text-center m-5' > <span>[</span> Productos <span>]</span></h1>
            <Nav className="container text-center w-25 mb-4">
                <Link style={{textDecoration:"none", color:"black", fontSize:"1.5rem", fontWeight:"bold "}} to="/productos"> <span>[</span> Todos <span>]</span></Link>
                <Link style={{textDecoration:"none", color:"black", fontSize:"1.5rem", fontWeight:"bold"}} to="category/2x2"><span>[</span> 2x2 <span>]</span></Link>
                <Link style={{textDecoration:"none", color:"black", fontSize:"1.5rem", fontWeight:"bold"}}  to="category/3x3"><span>[</span> 3x3 <span>]</span></Link>
                <Link style={{textDecoration:"none", color:"black", fontSize:"1.5rem", fontWeight:"bold"}}  to="category/minx"><span>[</span> Minx <span>]</span></Link>
                <Link style={{textDecoration:"none", color:"black", fontSize:"1.5rem", fontWeight:"bold"}}  to="category/otros"><span>[</span> Otros <span>]</span></Link>
            </Nav>
            <ItemListContainer/>
        </section>
    )
}

export default Productos