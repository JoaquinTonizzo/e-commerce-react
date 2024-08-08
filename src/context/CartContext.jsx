import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2'; 

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            setTotal(totalAmount);
        };

        const calculateItemCount = () => {
            const totalItems = cart.length;
            setItemCount(totalItems);
        };

        calculateTotal();
        calculateItemCount();
    }, [cart]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            Swal.fire({
                title: 'Producto ya agregado',
                text: 'El producto ya fue agregado al carrito. Para modificar la cantidad ingresada debe eliminarlo del carrrito.',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, itemCount }}>
            {children}
        </CartContext.Provider>
    );
};