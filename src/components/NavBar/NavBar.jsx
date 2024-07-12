import React, { useState } from 'react';
import './NavBar.css'; 
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className='Navbar'>
            <a href="/"><h1>Tienda Online</h1></a>
            <div className={`NavMenu ${showMenu ? 'show' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Store</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <CartWidget />
                </ul>
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