import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function Searchbar() {

    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const fetchResults = async () => {
        if (searchTerm.length >= 3) {
            try {
                const response = await fetch(`/api/search?query=${searchTerm}`);
                const data = await response.json();
                setResults(data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }
    };

    useEffect(() => {

        // Debounce(Limitar a quantidade de vezes que a função é executada) de 500ms antes de fazer a busca
        const debounceTimeout = setTimeout(fetchResults, 500);

        // Limpar o timeout caso o usuário continue digitando
        return () => clearTimeout(debounceTimeout);
    }, [searchTerm]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="flex w-96 rounded bg-white">
            <input 
                id="search"
                name="search"
                className="w-full px-4 py-2 border-none outline-none focus:outline-none" 
                size="normal" 
                type="search"
                value={searchTerm}
                onChange={handleChange}
                ph="Pesquisar" 
            />

            <button 
                className="m-2 px-2 py-2 hover:text-blue-800 duration-100"
                onClick={fetchResults}
            >
                <FaSearch />
            </button>

            {/* Lista de resultados */}
            <ul className="absolute bg-white mt-1 w-96 rounded shadow-lg">
                {results.map((result) => (
                    <li key={result.id} className="p-2 hover:bg-gray-100">
                        {result.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}