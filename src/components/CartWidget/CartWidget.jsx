import React, { useContext } from 'react';
import './CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { itemCount } = useContext(CartContext);

    return (
        <div className='cartContainer'>
            <FaShoppingCart />
            <span>{itemCount}</span>
        </div>
    );
}

export default CartWidget;
