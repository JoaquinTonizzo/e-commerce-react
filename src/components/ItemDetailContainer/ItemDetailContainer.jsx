import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { getProductById } from './../../asyncMock';
import ItemDetail from './../ItemDetail/ItemDetail';
import Spinner from './../Spinner/Spinner';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.log(error);
            });
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            {product ? <ItemDetail {...product} /> : <Spinner/>}
        </div>
    );
}

export default ItemDetailContainer;
