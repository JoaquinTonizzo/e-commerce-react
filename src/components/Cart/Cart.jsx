import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { cart, clearCart, removeItem, total } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='CartContainer'>
                <h3 className='NoProducts'>No hay items en el carrito</h3>
                <Link to='/' className='Button ButtonProducts'>Volver al Inicio</Link>
            </div>
        )
    }

    return (
        <div className='CartContainer'>
            {cart.map(p => <CartItem key={p.id} {...p} removeItem={removeItem} />)}
            <p className='Total'>Total a pagar: {total.toFixed(2)}</p>
            <div>
                <button onClick={() => clearCart()} className='Button ButtonClear'>Limpiar carrito</button>
                <Link to='/checkout' className='Button ButtonCheckout'>Checkout</Link>
            </div>
        </div>
    )
}

export default Cart