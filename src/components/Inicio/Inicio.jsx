import React from 'react';
import './Inicio.css';
const Inicio = ({ greeting, marca, frasefinal}) => {
    return (
        <section className='bienvenidas container-fluid d-flex flex-column align-items-center justify-content-center'>
            <h1> {greeting} <span> {marca} </span>! {frasefinal} </h1>
        </section>
    )
}


export default Inicio;