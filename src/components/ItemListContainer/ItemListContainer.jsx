import './ItemListContainer.css';
import ItemList from './../ItemList/ItemList'; 
import React, { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from './../../asyncMock';
import { useParams } from 'react-router-dom';  
import Spinner from './../Spinner/Spinner';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;
        setLoading(true);
        asyncFunc(categoryId)
          .then(response => {
            setProducts(response);
          })
          .catch(error => {
            setError(error.message);
          })
          .finally(() => {
            setLoading(false);
          });
    }, [categoryId]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <h2 style={{ color: 'white' }}>{error}</h2>;
    }

    return (
        <div className='ItemListContainer'>
            {products.length ? <ItemList products={products}/> : <p>No products found</p>}
        </div>
    );
}

export default ItemListContainer;
