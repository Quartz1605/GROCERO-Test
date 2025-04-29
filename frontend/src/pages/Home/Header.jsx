import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../../contexts/UserContext";
import groLogo from "../../assets/groceroLogo.png";
import { useContext, useState } from "react";
import { IoSearch } from "../../assets/react-icons/io5";
import { GiShoppingCart } from "../../assets/react-icons/gi";
import UserLocation from "./UserLocation";
import { Search, MapPin, ShoppingCart, User, Heart } from 'lucide-react';//for icons
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import zeptoLogo from "../../assets/finalZepto.png"

const Header = () => {

  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const [quantities, setQuantities] = useState({});

  const toggleFavorite = (id) => {
    if (favoriteItems.includes(id)) {
      setFavoriteItems(favoriteItems.filter(item => item !== id));
    } else {
      setFavoriteItems([...favoriteItems, id]);
    }
  };

  const addToCart = async (id, name, price, groRates, image_path) => {
    const item = {
      id: id,
      name: String(name),
      price: price,
      groRates: groRates,
      img_path: String(image_path),
      quantity: quantities[name] || 1
    };
  
    
    setCartItems(prev => [...prev, item]);
  
    const token = localStorage.getItem("access_token");
  
    try {
      console.log("Sending item:", item);
      const response = await fetch('http://127.0.0.1:8000/api/auth/cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify([item])  
      });
  
      const data = await response.json();
      console.log('Cart successfully sent:', data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  



  return(
    <div className="flex flex-row justify-between top-0 left-0 right-0 h-20 items-center fixed z-50 bg-gradient-to-b from-[#ff9bcd] to-[#ffffff] backdrop:blur-xl">
        {/* Logo */}
        <Link to="/home">
          <img src={groLogo} className="h-15 ml-2 " alt="Grocero Logo" />
        </Link>
        {/* Search Bar */}
        <div className="flex items-center p-2 relative w-full">


          {/* Conditional Rendering Based on Login State */}
          {user.username !== "Guest" ? (
            <>
              {/* Address Button */}
              <button className="flex items-center ml-1  hover:cursor-pointer text-[#f8228d] hover:bg-gradient-to-b from-[#ff9bcd] to-[#ffffff] hover:text-[#F9429E] hover:px-1 hover:py-1 rounded-lg transform hover:scale-101 transition-all hover:shadow-lg mr-1" onClick={() => setIsModalOpen(true)}>
                <MapPin size={25} />
                <span>{user.homeAddress ? `Delivering to "Home🤍"` : "Select Location"}</span>
              </button>

              {/* Search Bar */}
              <div className="relative w-full max-w-screen">
                <IoSearch className="text-[#F9429E] w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <input
                  className="w-full pl-12 bg-gray-50 rounded-lg h-12 text-gray-800 px-4 outline-none border border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#ffb6c1] transition duration-300"
                  type="text"
                  placeholder="Looking for?"
                  required
                />
              </div>


              <UserLocation
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />

              {/* Profile Picture */}
              <img
                className="h-10 rounded-full w-13 ml-5 hover:cursor-pointer"
                src="https://images.pexels.com/photos/21699301/pexels-photo-21699301/free-photo-of-silhouette-of-man-by-the-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt="Profile"
              />

              {/* Username */}
              <Link to="/home/profile">
                <div className="ml-2 hover:cursor-pointer hover:underline">
                  {user.username}
                </div>
              </Link>
            </>
          ) : (
            <>

              {/* Search Bar */}
              <div className="relative w-full max-w-screen">
                <IoSearch className="text-[#F9429E] w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <input
                  className="w-full pl-12 bg-gray-50 rounded-lg h-12 text-gray-800 px-4 outline-none border border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#ffb6c1] transition duration-300"
                  type="text"
                  placeholder="Looking for?"
                  required
                />
              </div>


              {/* Login Button */}

              <Link to="/login">
                <button className="bg-[#F9429E] ml-3 rounded-xl px-5 py-3 text-white font-bold hover:cursor-pointer hover:bg-[#F400A1]">
                  Login
                </button>
              </Link>
            </>
          )}

          {/* Cart Icon */}
          <div className="flex flex-col items-center justify-center relative">
            <Link to="/home/cart/">
              <button className="relative">
                <GiShoppingCart className="text-[#F9429E] h-10 w-12 hover:cursor-pointer ml-3 pb-0" />
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

export default Header