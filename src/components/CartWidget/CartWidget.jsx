import React from 'react'
import './CartWidget.css'
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div className='cartContainer'>
            <span>0</span>
            <FaShoppingCart />
        </div>
    )
}

export default CartWidget
