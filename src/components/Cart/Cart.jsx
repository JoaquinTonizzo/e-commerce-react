import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <div className='CartContainer'>
                <h3>No hay items en el carrito</h3>
                <Link to='/' className='Button ButtonProducts'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='CartContainer'>
            { cart.map(p => <CartItem key={p.id} {...p} removeItem={removeItem}/>) }
            <button onClick={() => clearCart()} className='Button ButtonClear'>Limpiar carrito</button>
            <Link to='/checkout' className='Button ButtonCheckout'>Checkout</Link>
        </div>
    )
}

export default Cart
