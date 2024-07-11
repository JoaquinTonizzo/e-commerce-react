import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div className='navbar'>
            <h1>Tienda Online</h1>
            <CartWidget />
        </div>
    )
}

export default NavBar
