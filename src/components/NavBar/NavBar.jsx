import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <nav className='Navbar'>
            <a href="/"><img src="./logo.png" alt="Logo Online Store" /></a>
            <div className={`NavMenu ${showMenu ? 'show' : ''}`}>
                <NavLink to="/" onClick={closeMenu}>All Products</NavLink>
                <NavLink to="/category/cellphone" onClick={closeMenu}>Phones</NavLink>
                <NavLink to="/category/notebook" onClick={closeMenu}>Notebooks</NavLink>
                <NavLink to="/category/smartwatch" onClick={closeMenu}>Smartwatches</NavLink>
                <NavLink to="/cart" onClick={closeMenu}><CartWidget /></NavLink>
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
