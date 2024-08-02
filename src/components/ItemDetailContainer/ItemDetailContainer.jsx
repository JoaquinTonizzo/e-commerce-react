import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { getProductById } from './../../asyncMock';
import ItemDetail from './../ItemDetail/ItemDetail';
import Spinner from './../Spinner/Spinner';
import { useParams } from 'react-router-dom';

import { getDoc, doc } from 'firebase/firestore';
import { db } from './../../services/firebase/firebaseConfig'; 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const docRef = doc(db, "items", itemId);
            getDoc(docRef)
            .then((response) => {
                const data = response.data();
                const productAdapted = { id: response.id, ...data };
                setProduct(productAdapted);
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
