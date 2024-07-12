import React from 'react'
import './CartWidget.css'
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div className='cartContainer'>
            <FaShoppingCart />
            <span>0</span>
        </div>
    )
}

export default CartWidget
