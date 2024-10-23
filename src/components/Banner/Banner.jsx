import React, { useState, useEffect } from "react";
import slideImage from './imagens/slide.png';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Banner() {
  const imagens = [slideImage];
  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximoSlide = () => {
    setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
  };

  const voltarSlide = () => {
    setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="hidden sm:flex justify-center items-start h-screen"> {/* Oculte o banner em telas menores que 640px */}
      <div className="relative mt-10 flex items-center"> {/* Flex container para alinhar a imagem e botões */}
        <button 
          className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
          onClick={voltarSlide}
        >
          <FaChevronLeft size={24} />
        </button>
        
        <img 
          src={imagens[indiceAtual]} 
          alt={`Imagem ${indiceAtual + 1}`} 
          className="max-w-full h-auto w-80 sm:w-96 md:w-full" // Ajusta o tamanho da imagem responsivamente
        />
        
        <button 
          className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
          onClick={proximoSlide}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
