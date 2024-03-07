import React from 'react';
import { Link } from 'react-router-dom';
const getDefaultMessage = (value, defaultMessage) => {
    return value === 'Sin info' ? defaultMessage : value;
};


const Item = ({ id, name, img, price }) => {

    const getDefaultMessage = (value, defaultValue) => {
        return value === 'Sin info' ? defaultValue : value;
    };

    const defaultImg = 'default-image.jpg';
    const displayImg = getDefaultMessage(img, defaultImg);

    return (
        <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <article className='card m-3 text-center' style={{ border: '2px solid #339989' }}>
                <img className='img-top' src={displayImg} alt='productos en venta' />
                <div className='card-body'>
                    <h3 className='card-title'>{name}</h3>
                    <p className='product-price'> $ {price}</p>
                    <Link className='btn' to={`/productos/${id}`}>
                        Ver + Info
                    </Link>
                </div>
            </article>
        </div>
    );
};

export default Item;