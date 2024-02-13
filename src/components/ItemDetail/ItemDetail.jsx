import React from 'react'

const ItemDetail = ({name,price,brand,stock,img,description}) => {
    return (
        <article className="container">
            <img src={img} alt={name} />
            <div>
                <h2>Nombre: {name} </h2>
                <p>Precio: {price} </p>
                <p>Marca: {brand} </p>
                <p>Stock: {stock}</p>
                <p> Descripcion: {description} </p>
            </div>
        </article>
    )
}
export default ItemDetail;