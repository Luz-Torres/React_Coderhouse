import React from 'react';
import './ItemListContainer.css'
const ItemListContainer = ({ greeting, marca, frasefinal}) => {
    return (
        <section className='bienvenidas container-fluid d-flex flex-column align-items-center justify-content-center'>
            <h1> {greeting} <span> {marca} </span>! {frasefinal} </h1>
        </section>
    )
}

export default ItemListContainer