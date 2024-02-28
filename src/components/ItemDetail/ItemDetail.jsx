import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
/* import {cartContext} from '../../context/context'; */
import { useContext } from "react";

const ItemDetail = ({id,name,img,brand,stock,price}) => {
    const [addItem, setAddItem] = useState(0);
    const {addCart} = useContext(cartContext);
    const handleCantidad =(cantidad);
    
    const item = {id, nombre, precio};
    addCart(item, cantidad);

    return (
        <main className='col-12 col-md-6 col-lg-3 mb-3'>
            <article className='card m-3 text-center item-detail-card'>
                <img className='img-top' src={img} alt={`${name} product image`} />
                <div className="card-body">
                    <h2 className='card-title'>{name}</h2>
                    <p className='product-brand'> Brand: {brand} </p>
                    <p>ID:{id}</p>
                    <p className="product-description">Description: {description} </p>
                    <p className='product-price'>$ {price}</p>
                    <p className="product-stock"> {stock}</p>
                    <ItemCount/>

                    {  addCantidad > 0 ? (<Link to="/cart">Terminar la Compra</Link>) : (<ItemCount inicial={1} stock={stock} onAdd={handleCantidad}/>) }
                </div>
            </article>
        </main>
    )
}

export default ItemDetail