import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    cantidadTotal: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const addCart = (item, cantidad) => {
        if (item !== undefined && item !== null && cantidad !== undefined && cantidad !== null) {
            const productoExistente = cart.find(prod => prod.item.id === item.id);

            if (!productoExistente) {
                setCart(prev => [...prev, { item, cantidad }]);
                setCantidadTotal(prev => prev + cantidad);
                setTotal(prev => prev + (item.price * cantidad));

            } else {
                const updateCart = cart.map(prod => {
                    if (prod.item.id === item.id) {
                        return { ...prod, cantidad: prod.cantidad + cantidad };
                    } else {
                        return prod;
                    }
                })
                setCart(updateCart);
                setCantidadTotal(prev => prev + cantidad);
                setTotal(prev => prev + (item.price * cantidad));
            }
        }
    }

    const deleteProduct = (id) => {
        const deleteProduct = cart.find(prod => prod.item.id === id);
        const updateCart = cart.filter(prod => prod.item.id !== id);

        if (deleteProduct) {
            setCart(updateCart);
            setCantidadTotal(prev => prev - deleteProduct.cantidad);
            setTotal(prev => prev - (deleteProduct.item.price * deleteProduct.cantidad));
        }
    }

    const emptyCart = () => {
        setCart([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{ cart, total, cantidadTotal, addCart, deleteProduct, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}