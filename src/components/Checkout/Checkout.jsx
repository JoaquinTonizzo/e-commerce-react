import "./Checkout.css";
import { CartContext } from '../../context/CartContext';
import { useState, useContext } from "react";
import { getDocs, collection, query, where, writeBatch, Timestamp, addDoc } from "firebase/firestore";
import { db } from "./../../services/firebase/firebaseConfig";
import { Link } from 'react-router-dom'
import Spinner from "./../Spinner/Spinner";
import Swal from 'sweetalert2';
import CheckoutForm from './../CheckoutForm/CheckoutForm';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, "items");
            const productsSnapshot = await getDocs(productsRef);

            const productsInStock = productsSnapshot.docs.filter(doc =>
                ids.includes(doc.id)
            );

            productsInStock.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Productos fuera de stock',
                    text: 'Algunos productos están fuera de stock. Por favor, revisa tu carrito y ajusta la cantidad.',
                    confirmButtonText: 'Aceptar'
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al generar su pedido',
                text: 'Ocurrio un error inesperado, intente nuevamente más tarde.',
                confirmButtonText: 'Aceptar'
            });
        } finally {
            setLoading(false);
        }
    };


    if (loading) {
        return (
            <div>
                <p className="Cartel">Se está generando su orden...</p>
                <Spinner></Spinner>
            </div>
        );
    }

    if (orderId) {
        Swal.fire({
            title: 'Compra realizada con éxito',
            text: 'A continuación verá el id de su orden. Nuestro staff se comunicará con usted a la brevedad.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
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

