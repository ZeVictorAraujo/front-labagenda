import Input from "../Input/Input.jsx";
import { FaSearch } from "react-icons/fa";

export default function Searchbar() {

    return (
        <div className="flex w-96 rounded bg-white">
            <input 
            id="search"
            name="search"
            className="w-full px-4 py-2 border-none outline-none focus:outline-none" 
            size="normal" 
            type="search" 
            ph="Pesquisar" />
            <button className="m-2 px-2 py-2 hover:text-blue-800 duration-100">
              <FaSearch />
            </button>
        </div>
    );
}