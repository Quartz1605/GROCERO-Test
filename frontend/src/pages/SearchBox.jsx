import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import groLogo from "../assets/groceroLogo.png";
import { useContext, useState } from "react";
import { IoSearch } from "../assets/react-icons/io5";
import { GiShoppingCart } from "../assets/react-icons/gi";




const SearchBox = () => {

  
  const [query,setQuery] = useState("")
  
 
  
  const [cartItems, setCartItems] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const [quantities, setQuantities] = useState({});


  



  return (
    <div>
      <div className="flex flex-row justify-between items-center fixed top-0 left-0 right-0 h-20 z-50 bg-gradient-to-b from-[#ff9bcd] to-[#ffffff] backdrop:blur-xl px-4">
        {/* Logo */}
        <Link to="/home">
          <img src={groLogo} className="h-14 ml-2" alt="Grocero Logo" />
        </Link>

        {/* Centered Search Bar */}
        <div className="flex-1 mx-4 max-w-6xl relative">
          <IoSearch className="text-[#F9429E] w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input
            className="w-full pl-12 bg-gray-50 rounded-lg h-12 text-gray-800 px-4 outline-none border border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#ffb6c1] transition duration-300"
            type="text"
            placeholder="Search in more than 1000 items"
            required
            value={query}
            onChange={(e) => {setQuery(e.target.value)}}
            
          />
        </div>

        {/* Cart Icon */}
        <div className="relative mr-4">
          <Link to="/home/cart/">
            <button className="relative">
              <GiShoppingCart className="text-[#F9429E] h-10 w-12 hover:cursor-pointer" />
            </button>
          </Link>

          {cartItems.length > 0 && (
            <span className="absolute -top-2 right-2 bg-[#F9429E] text-white text-xs rounded-full px-2 py-0.5 z-20">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>

    </div>
  )



}


export default SearchBox