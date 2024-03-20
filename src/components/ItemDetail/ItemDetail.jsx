import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
/* import { cartContext } from "../../context/context"; */
import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, brand, stock, price }) => {
    const addItem = useMemo(() => 0, []);

    const { addCart } = useContext(cartContext);

    const handleCantidad = (cantidad) => {
        addItem(cantidad);
    };

    useEffect(() => {
        const handleAddCart = () => {
            const item = { id, name, price, img };
            addCart(item, addItem);
        };

        handleAddCart();
    }, [addItem, addCart, id, name, price, img]);

    const handleAddCart = () => {
        const item = { id, name, price, img };
        addCart(item, addItem);
    };

    return (
        <main className="col-12 col-md-6 col-lg-3 mb-3">
            <article className="card m-3 text-center item-detail-card">
                <img className="img-top" src={img} alt={`${name} product image`} />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="product-brand">Brand: {brand}</p>
                    <p>ID: {id}</p>
                    <p className="product-description">Description: {description}</p>
                    <p className="product-price">$ {price}</p>
                    <p className="product-stock">{stock}</p>
                    <ItemCount initial={1} stock={stock} onAdd={handleCantidad} />

                    {addItem > 0 ? (
                        <Link to="/cart">Terminar la Compra</Link>
                    ) : (
                        <button onClick={handleAddCart}>Agregar al carrito</button>
                    )}
                </div>
            </article>
        </main>
    );
};

export default ItemDetail