// Importaciones necesarias
import './ItemDetail.css';
import ItemCount from './../ItemCount/ItemCount';

const ItemDetail = ({ name, price, img, stock }) => {
    return (
        <article className="CardItem">
            <header className="ItemHeader">
                <h2>{name}</h2>
            </header>
            <img src={img} alt={name} className='ItemImg'/>
            <section>
                <p className="Info">Categoría: {stock}</p>
                <p className="Info">Descripción: {stock}</p>
                <p className="Info">Precio: ${price}</p>
                <ItemCount stock={stock} initial={1} />
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
            </footer>
        </article>
    );
}

export default ItemDetail;
