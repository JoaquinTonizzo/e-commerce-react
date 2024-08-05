import React, { useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';

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
