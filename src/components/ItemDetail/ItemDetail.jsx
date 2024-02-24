import React from 'react'
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({name,img,brand,stock,price}) => {
    return (
        <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <article className='card m-3 text-center item-detail-card'>
                <img className='img-top' src={img} alt={`${name} product image`} />
                <div className="card-body">
                    <h3 className='card-title'>{name}</h3>
                    <p className='product-brand'> Brand: {brand} </p>
                    <p className="product-description">Description: {description} </p>
                    <p className='product-price'>$ {price}</p>
                    <p className="product-stock"> {stock}</p>
                    <ItemCount/>
                </div>
            </article>
        </div>
    )
}

export default ItemDetail