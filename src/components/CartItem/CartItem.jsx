import './CartItem.css'

const CartItem = ({ id, name, img, price, quantity, removeItem }) => {
    return (
        <div className='CartItem'>
            <img src={img} alt={name} className='CartItemImg'/>
            <div className='CartItemDetails'>
                <h4>{name}</h4>
                <p>Precio: ${price}</p>
                <p>Cantidad: {quantity}</p>
            </div>
            <button onClick={() => removeItem(id)} className='RemoveButton'>Eliminar</button>
        </div>
    )
}

export default CartItem
