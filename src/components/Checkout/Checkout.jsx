import "./Checkout.css";
import { CartContext } from '../../context/CartContext';
import React, { useState, useContext } from "react";
import { getDocs, collection, query, where, writeBatch, Timestamp, addDoc } from "firebase/firestore";
import { db } from "./../../services/firebase/firebaseConfig";
import { Link } from 'react-router-dom'
import Spinner from "./../Spinner/Spinner";

import CheckoutForm from './../CheckoutForm/CheckoutForm';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cart.map(prod => prod.id);

            const productsRef = collection(db, "products");

            const productsAddedFromFirestore = await getDocs(query(productsRef, where("id", "in", ids)));
        
        const { docs } = productsAddedFromFirestore

        docs.forEach(doc => {
            const dataDoc = doc.data();
            const stockDb = dataDoc.stock;

            const productAddedToCart = cart.find(prod => prod.id === doc.id);
            const prodQuantity = productAddedToCart?.quantity;

            if (stockDb > prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity });
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc });
            }
        })


        if (outOfStock.length === 0) {
            await batch.commit(); // Confirma la transacción batch

            const orderRef = collection(db, "orders");
            const orderAdded = await addDoc(orderRef, objOrder);

            setOrderId(orderAdded.id);
            clearCart();
        } else {
            console.error("Hay productos que están fuera de stock");
        }


        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div>
                <p className="Cartel">Se está generando su orden...</p>
                <Spinner></Spinner>
            </div>
        );
    }

    if (orderId) {
        return (
            <div className="InfoContainer">
                <p className="Cartel">El ID de su orden es: {orderId}</p>
                <Link to='/' className='Button ButtonProducts'>Volver al Inicio</Link>
            </div>
        );
    }

    return (
        <div className="CheckoutContainer">
            <h3 className="Title">Checkout</h3>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;

