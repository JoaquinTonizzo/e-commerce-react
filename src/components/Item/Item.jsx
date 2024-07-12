import React from 'react'
import './Item.css'
import ItemCount from './../ItemCount/ItemCount'

const Item = ({name, price, img, stock}) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock: {stock} 
                </p>
            </section>
            {/* <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/> */}
            <footer className='ItemFooter'>
                <button className='Button'>Ver detalle</button>
            </footer>
        </article>
    )
}

export default Item
