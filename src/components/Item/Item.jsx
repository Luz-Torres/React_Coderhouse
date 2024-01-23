import React from 'react';
import './Item.css'
const Item = ({name,img,brand='Sin info disponible',description,price}) => {
    return (
        <article>
            <h3 className='product-name'>{name}</h3>
            <img className='product-img' src={img} alt="productos en venta" />
            <p className='product-brand'>{brand} </p>
            <p className='product-price'>$ {price}</p>
            <p className='product-description'>{description}</p>
        </article>
    )
}

export default Item;