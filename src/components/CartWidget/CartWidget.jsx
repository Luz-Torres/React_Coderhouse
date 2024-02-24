import React from 'react'
import { BsCart2 } from "react-icons/bs";
import './CartWidget.css';

const CartWidget = () => {
    return (
        <button className='container mx-auto' aria-label='cart'>
            <BsCart2 alt="Cart"/> <strong>7</strong>
        </button>
    )
}

export default CartWidget