import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [itemCount, setItemCount] = useState(0); // Total de elementos en el carrito

    useEffect(() => {
        // Calcula el total de precio y el total de elementos cada vez que el carrito cambia
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
            console.error("El producto ya fue agregado");
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