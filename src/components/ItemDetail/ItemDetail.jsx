// Importaciones necesarias
import './ItemDetail.css';
import ItemCount from './../ItemCount/ItemCount';

const ItemDetail = ({ name, price, img, stock }) => {
    return (
        <article className="ItemDetail">
            <img src={img} alt={name} className='DetailImg'/>
            <div className='DetailInfo'>
                <header className="DetailHeader">
                    <h2>{name}</h2>
                </header>
                <section>
                    <p className="DetailCategory">Categoría: {stock}</p>
                    <p className="DetailDescription">Descripción: {stock}</p>
                    <p className="DetailPrice">Precio: ${price}</p>
                </section>
                <footer className='DetailFooter'>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
                </footer>
            </div>
        </article>
    );
}

export default ItemDetail;
