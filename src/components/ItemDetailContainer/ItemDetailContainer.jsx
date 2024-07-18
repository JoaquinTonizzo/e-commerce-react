import React from 'react'
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from './../../asyncMock'
import ItemDetail from './../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById('MLA1442844788')
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
