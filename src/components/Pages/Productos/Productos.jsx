import React from 'react';
import ItemListContainer from '../../ItemListContainer/ItemListContainer';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Productos = () => {
    const links = [
        { to: "/productos", text: "Todos"},
        { to: "/category/2x2", text: "2x2"},
        { to: "/category/3x3", text: "3x3" },
        { to: "/category/minx", text: "Minx" },
        { to: "/category/otros", text: "Otros" }
    ];

    return (
        <section className='container'>
            <h1 className='text-center m-5' > <span>[</span> Productos <span>]</span></h1>
                
                {/* verificar esto sigo sin poder centrarlo */}

                <Nav className="d-flex flex-wrap text-center m-4 gap-5">
                    {links.map((link, index) => (
                        <Link key={index} className="link" to={link.to}>
                            <span>[</span> {link.text} <span>]</span>
                        </Link>
                    ))}
                </Nav>
            <ItemListContainer/>
        </section>
    )
}

export default React.memo(Productos);