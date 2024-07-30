import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import './ItemDetail.css';
import ItemCount from './../ItemCount/ItemCount';

const ItemDetail = ({ name, price, img, description, category, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
    }

    return (
        <article className="ItemDetail">
            <img src={img} alt={name} className='DetailImg'/>
            <div className='DetailInfo'>
                <header className="DetailHeader">
                    <h2>{name}</h2>
                </header>
                <section>
                    <p className='DetailDescription'>{description}</p>
                    <p className="DetailCategory">Categoría: {category}</p>
                    <p className="DetailStock">Stock: {stock}</p>
                    <p className="DetailPrice">Precio: ${price}</p>
                </section>
                <footer className="ItemFooter">
                    {quantityAdded > 0 ? (
                        <Link to='/cart' className='Option Button'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )}
                </footer>
            </div>
        </article>
    );
}

export default ItemDetail;
