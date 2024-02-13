import React from 'react'
import ItemCount from "./ItemCount";


const ItemDetail = ({id,name='Sin info disponible',img='Sin info disponible',brand='Sin info disponible',stock='Sin info disponible',price='Sin info disponible'}) => {
    return (
        <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <article className='card m-3 text-center' 
                style={ { border:"2px solid #339989",   backgroundColor: "#224", borderRadius: "10px",
                            border: "2px solid #00ff99",
                            margin: "1rem",
                            padding: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            border: "1px solid black",
                            margin: "4rem",
                            color: "#f1f7ed"
                        } } >
                <img className='img-top' src={img} alt="productos en venta" />
                <div className="card-body">
                    <h3 className='card-title'>{name}</h3>
                    <p className='product-brand'> Marca: {brand} </p>
                    <p className="product-description">Description: {description} </p>
                    <p className='product-price'>$ {price}</p>
                    <ItemCount/>
                </div>
            </article>
        </div>
    )
}

export default ItemDetail