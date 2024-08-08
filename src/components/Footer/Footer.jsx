import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTelegram, FaArrowAltCircleUp } from "react-icons/fa";
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="redes">
        <a href="https://www.instagram.com" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <FaFacebook />        
        </a>
        <a href="https://www.whatsapp.com" target="_blank">
          <FaWhatsapp />  
        </a>
        <a href="https://www.telegram.com" target="_blank">
          <FaTelegram />  
        </a>
      </div>
      <a href="/"><p>&reg; Online Store</p></a>
    </footer>
  );
};

export default Footer;
