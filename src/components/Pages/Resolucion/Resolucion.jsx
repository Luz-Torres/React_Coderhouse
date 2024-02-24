import React from 'react'
const Header = () => {
    return (
        <header>
            <h1 className='text-center m-5'><span>[</span>Notación básica del 3x3:<span>]</span></h1>
        </header>
    )
}

const Paragraph = () => {
    return (
        <article>
            <p className='m-5 fs-4'>Para comenzar con la notación encontraremos una cara de referencia en el cubo (por ejemplo blanca, verde, rojo) ; comprobaremos que disponemos de seis giros: derecha, izquierda, superior, inferior, cara frontal y por último, cara trasera. Si te encuentras la letra sola el giro es en sentido horario y si lleva un apóstrofe el giro es en sentido antihorario.</p>
        </article>
    )
}

const Image = () => {
    return (
        <aside className='d-flex flex-column w-25 col-6'>
            <img src="./img.webp" alt="Giros horarios del cubo" />
            <img src="./img2.webp" alt="Giros anti-horarios del cubo" />
        </aside>
    )
}

const List = () => {
    return (
        <article>
            <p className='m-5 fs-4'>Cada letra hace referencia a una capa y están en inglés.</p>
                <ul className='m-5 fs-4'>
                    <li>U (Up): Capa Superior (Cara blanca)</li>
                    <li>D (Down): Capa Inferior (Cara amarilla)</li>
                    <li>R (Right): Capa Derecha (Cara Roja)</li>
                    <li>L (Left): Capa Izquierda (Cara naranja)</li>
                    <li> F (Front): Capa Frontal (Cara verde)</li>
                    <li>B (Back): Capa Trasera (Cara Azul)</li>
                </ul>
            <p className='m-5 fs-4'>Con estas siglas ya tendríamos todas las capas básicas referenciadas.</p>
        </article>
    )
}

const Resolucion = () => {
    return (
        <>
            <Header />
            <main>
                <Paragraph />
                <Image />
                <List />
            </main>
        </>
    )
}

export default Resolucion;