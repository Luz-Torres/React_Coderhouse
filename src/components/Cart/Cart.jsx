import { useContext } from "react";
import { CartContext } from "../../context/context";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, emptyCart, total, cantidadTotal } = useContext(CartContext);

    if (cantidadTotal === 0) {
        return (
            <main className="text-center m-5">
                <h1 className="p-5"> <span>[ </span>No hay productos en el carrito. Comprá!<span> ]</span> </h1>
                <Link to="/productos" className="btn">Ver Productos</Link>
            </main>
        )
    }

    return (
        <div>
            {
                cart.map(product => <CartItem key={product.item.id} {...product} />)
            }
            <h3>Total: ${total} </h3>
            <h3>Cantidad Total: {cantidadTotal} </h3>
            <button onClick={() => emptyCart()} > Vaciar Carrito </button>
            <Link to="/checkout">Finalizar Compra</Link>
        </div>
    )
}

export default Cart