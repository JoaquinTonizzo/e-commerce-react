import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1 style={{ color: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>404 NOT FOUND</h1>} />
        </Routes>
        <Footer></Footer>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
