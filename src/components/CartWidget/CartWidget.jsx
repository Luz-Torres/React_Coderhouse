import React from 'react'
import { BsCart2 } from "react-icons/bs";
import './CartWidget.css';

const CartWidget = () => {
    return (
        <button className='container mx-auto'>
            <BsCart2/> <strong>7</strong>
        </button>
    )
}

export default CartWidget