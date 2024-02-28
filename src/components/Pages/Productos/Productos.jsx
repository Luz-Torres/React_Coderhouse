import React from 'react';
import ItemListContainer from '../../ItemListContainer/ItemListContainer';
import { NavProducts } from '../../NavProducts/NavProducts';
const Productos = () => {
    return (
        <section className='container text-center'>
            <h1 className='m-5' > <span>[</span> Productos <span>]</span></h1>
            <NavProducts/>    
            <ItemListContainer/>
        </section>
    )
}

export default React.memo(Productos);