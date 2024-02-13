import React from 'react';
import './Item.css';
const Item = ({name='Sin info disponible',img='Sin info disponible',brand='Sin info disponible',stock='Sin info disponible',price='Sin info disponible'}) => {
    return (
        <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <article className='card m-3 text-center'>
                <img className='img-top' src={img} alt="productos en venta" />
                <div className="card-body">
                    <h3 className='card-title'>{name}</h3>
                    <p className='product-brand'> Marca: {brand} </p>
                    <p className='product-price'>$ {price}</p>
                    <p className='product-stock'>$ {stock}</p>
                    <button className='btn'> Ver Producto</button>
                </div>
            </article>
        </div>
    )
}

export default Item;