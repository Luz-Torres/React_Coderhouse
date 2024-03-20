import React from 'react'
import { BsCart2 } from "react-icons/bs";
import './CartWidget.css';
import { useCart } from '../../context/context';
const CartWidget = () => {
    const { totalQuantity } = useCart()
    return (
        <button className='container mx-auto' aria-label='cart'>
            <BsCart2 alt="Cart"/><span>{totalQuantity}</span>
        </button>
    )
}
export default CartWidget
