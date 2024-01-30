import React from 'react';
import './Item.css';
const Item = ({name,img,brand='Sin info disponible',price}) => {
    return (
        <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <article className='card m-3 text-center'>
                <img className='-img-top' src={img} alt="productos en venta" />
                <div className="card-body">
                    <h3 className='card-title'>{name}</h3>
                    <p className='product-brand'> Marca: {brand} </p>
                    <p className='product-price'>$ {price}</p>
                    <button className='btn'> Ver Producto</button>
                </div>
            </article>
        </div>
    )
}

export default Item;
