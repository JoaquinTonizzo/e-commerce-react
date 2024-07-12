import './ItemListContainer.css'
import ItemList from './../ItemList/ItemList' 
import React, { useEffect, useState } from 'react'
import { getProducts } from './../../asyncMock'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        getProducts()
        .then(response => setProducts(response))
        .catch(error => setError(error.message))
        .finally(() => setLoading(false))
    }, [])

    if (error) {
        return (
            <h2 style={{ color: 'white' }}>{error}</h2>
        );
    }
    
    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
        );
    }
    
    return (
        <div>
            <div className='saludo'>{greeting}</div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer
