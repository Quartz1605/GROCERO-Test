import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import groLogo from "../assets/groceroLogo.png";
import { useContext, useState } from "react";
import { IoSearch } from "../assets/react-icons/io5";
import { GiShoppingCart } from "../assets/react-icons/gi";
import UserLocation from "./Home/UserLocation";
import { Search, MapPin, ShoppingCart, User, Heart } from 'lucide-react';//for icons
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import zeptoLogo from "../assets/finalZepto.png"

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext); // No need for logout here
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products?category=${encodeURIComponent(categoryName)}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="bg-white h-screen flex flex-col">
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
            <button className="relative">
              <GiShoppingCart className="text-[#F9429E] h-10 w-12 hover:cursor-pointer ml-3 pb-0" />
            </button>

            {cartItems.length > 0 && (
              <span className="absolute -top-2 right-2 bg-[#F9429E] text-white text-xs rounded-full px-2 py-0.5 z-20">
                {cartItems.length}
              </span>
            )}
          </div>

        </div>
      </div>






      <h1 className="mt-25 mb-15 text-center text-xl">Welcome to <b className="text-[#F9429E]">{categoryName}</b>!</h1>
      <div className="grid grid-cols-4 gap-6 pl-5 pr-5">
        {products.map(([name, price, status, image_path,groRates, id], index) => (
          <div
            key={id} // Use index as the key (or a unique ID if available)
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={image_path} // Replace with actual product image URL
                  alt={name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>


              <button
                className="absolute bottom-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transform transition-all hover:scale-110"
                aria-label="Add to wishlist"
              >
                <Heart size={18} className="text-gray-600 hover:cursor-pointer" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1 truncate">{name}</h3>
              <p className="text-sm text-gray-500 mb-2">500g</p> {/* Replace with actual weight if available */}
              <div className="flex items-center justify-between flex-col">

                <div className="mt-4 flex justify-around items-center space-x-38 bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-md border-1">
                  <span className="text-lg font-bold bg-clip-text  text-[#2cf005] pl-2">
                    {groRates} {/* Display product price */}
                  </span>
                  <div className="text-2xl text-[#FFFFFF] font-bold px-3 py-4 bg-[#F9429E] rounded-lg">GROCERÓ</div>

                </div>

                <div className="mt-4 flex justify-around items-center space-x-40 bg-opacity-50 backdrop-blur-md rounded-lg shadow-md border-1">
                  <span className="text-lg font-bold bg-clip-text bg-[#F9429E] text-[#5D1ABA] pl-2">
                    {price} {/* Display product price */}
                  </span>
                  <div className="bg-[#5D1ABA] rounded-lg">
                    <img src={zeptoLogo} className="h-17 w-35 rounded-lg"></img>
                  </div>

                </div>
                <button
                  onClick={() => setCartItems([...cartItems, name])} // Add product to cart
                  className="bg-[#F9429E] text-white px-6 py-1.5 rounded-xl text-lg hover:shadow-lg transform hover:scale-105 transition-all hover:cursor-pointer mt-3"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

