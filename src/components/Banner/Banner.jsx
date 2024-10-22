import React from "react";
import { useState, useEffect } from "react";

export default function Banner(){
        const imagens = ['slide1.svg', 'slide2.png'];
        const [indiceAtual, setIndiceAtual] = useState(0);
    
        const proximoSlide = () => {
            setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
        };
    
        const voltarSlide = () => {
            setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
        };
    
        return(
            <div className='slide'>
                <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1}`} />
    
                <div className="arrow left" onClick={voltarSlide}></div>
                <div className="arrow right" onClick={proximoSlide}></div>
            </div>
        );
}
