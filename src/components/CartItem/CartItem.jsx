import { useContext } from "react";
import { CartContext } from "../../context/context";

const CartItem = ({ item, cantidad }) => {
    const { deleteProduct } = useContext(CartContext);

    return (
        <div>
            <h4> {item.name} </h4>
            <p>Cantidad: {cantidad} </p>
            <p>Precio: {item.price} </p>
            <button onClick={() => deleteProduct(item.id)}> Eliminar </button>
            <hr />
        </div>
    )
}

export default CartItem