import React from "react";
import './Banner.css';
import { FaWhatsapp } from "react-icons/fa";

const Banner = () => {
    return ( 
        <div class="banner">
        <h1>Lopes Moda</h1>
        <p>Seu look do dia? Temos aqui!</p>
        <button id="botWhat">
            <a href="https://wa.me/558893704528" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-whatsapp"><FaWhatsapp size={24}/></i> Fale Conosco pelo WhatsApp
            </a>
        </button>
    </div>
    
    );
}

export default Banner;
