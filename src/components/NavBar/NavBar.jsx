import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Asegúrate de importar NavLink
import './NavBar.css'; 
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className='Navbar'>
            <a href="/"><h1>Online Store</h1></a>
            <div className={`NavMenu ${showMenu ? 'show' : ''}`}>
                <NavLink to="/">All Products</NavLink>
                <NavLink to="/category/cellphone">Phones</NavLink>
                <NavLink to="/category/notebook">Notebooks</NavLink>
                <NavLink to="/category/smartwatch">Smartwatches</NavLink>
                <NavLink to="/cart"><CartWidget /></NavLink>
            </div>
            <div className="MenuToggle" onClick={toggleMenu}>
                <div className={`hamburger ${showMenu ? 'active' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
