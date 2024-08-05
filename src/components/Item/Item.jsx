import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, img, stock }) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Button Link'
                    style={{ display: 'block', textDecoration: 'none', width: '100%', color: 'white' }}>
                    Ver detalle
                </Link>
            </footer>
        </article>
    );
}

export default Item;
