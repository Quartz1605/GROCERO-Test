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
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const toggleFavorite = (id) => {
    if (favoriteItems.includes(id)) {
      setFavoriteItems(favoriteItems.filter(item => item !== id));
    } else {
      setFavoriteItems([...favoriteItems, id]);
    }
  };

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
      <div className="bg-white min-h-screen flex flex-col">

      {/* Main content with enhanced heading and product grid */}
      <div className="mt-24 container mx-auto px-4 py-8">
        {/* Enhanced premium category heading */}
        <div className="mb-16 relative">
          <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-r from-[#F9429E]/5 via-[#ff9bcd]/10 to-[#F9429E]/5 rounded-full blur-3xl"></div>
          
          <h1 className="text-center text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#F9429E] to-[#fb83bc] bg-clip-text text-transparent">
            {categoryName || "Products"}
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#F9429E]/70"></div>
            <span className="text-lg font-light italic text-[#F9429E]/70">premium selection</span>
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#F9429E]/70 to-transparent"></div>
          </div>
          
          <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our curated collection of high-quality {categoryName?.toLowerCase()} products at unbeatable prices
          </p>

          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-1 bg-gradient-to-r from-transparent via-[#F9429E] to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(([name, price, status, image_path, groRates, id]) => (
            <div
              key={id}
              className="relative bg-white rounded-2xl overflow-hidden transition-all duration-500 group hover:shadow-[0_20px_50px_rgba(249,66,158,0.2)] transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(String(id))}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 30px",
                border: "1px solid rgba(249, 66, 158, 0.07)"
              }}
            >
              {/* Status badge with premium design */}
              <div className="absolute top-3 left-3 z-20">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm flex items-center">
                  <span className="text-xs font-medium text-[#F9429E]">{status}</span>
                </div>
              </div>

              {/* Favorite button */}
              <button
                onClick={() => toggleFavorite(id)}
                className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-sm transition-transform duration-300 hover:scale-110"
              >
                <Heart
                  size={18}
                  className={`${favoriteItems.includes(id) ? 'fill-[#F9429E] text-[#F9429E]' : 'text-gray-400'}`}
                />
              </button>
              
              {/* Image container with premium effects */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#F9429E]/10 via-transparent to-[#F9429E]/5 z-0 rounded-t-2xl"></div>
                <img
                  src={image_path}
                  alt={name}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ objectPosition: "center" }}
                />
                
                {/* Elegant gradient overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Add to cart button with improved design */}
                <div 
                  className={`absolute bottom-4 inset-x-0 mx-auto text-center transition-all duration-500 ${
                    hoveredCard === String(id) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <button
                    onClick={() => setCartItems([...cartItems, String(name)])}
                    className="bg-white text-[#F9429E] px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 mx-auto hover:bg-[#F9429E] hover:text-white transition-all duration-300 shadow-lg"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
              
              {/* Product details with luxury styling */}
              <div className="p-6">
                {/* Product title with elegant typography */}
                <h3 className="font-semibold text-gray-800 text-lg mb-1 truncate">{name}</h3>
                <p className="text-xs text-gray-500 mb-5">Premium Quality • 500g</p>
                
                {/* Price comparison section with luxury card design */}
                <div className="space-y-4 relative">
                  {/* Grocero Price - Premium card style */}
                  <div 
                    className="flex justify-between items-center p-3.5 rounded-xl border transition-all duration-300 hover:shadow-md"
                    style={{
                      background: "linear-gradient(135deg, #fff8fa 0%, #fff5f8 100%)",
                      borderColor: "rgba(249, 66, 158, 0.15)"
                    }}
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-[#F9429E]/70 uppercase tracking-wider">Our Price</span>
                      <span className="font-bold text-green-500 text-lg">{groRates}</span>
                    </div>
                    <div 
                      className="text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm"
                      style={{
                        background: "linear-gradient(135deg, #F9429E 0%, #ff6eb3 100%)"
                      }}
                    >
                      <img src={groLogo} alt="Logo"                         className="h-7 w-14 rounded-lg object-contain"
 />
                    </div>
                  </div>
                  
                  {/* Competitor Price - Subtle design contrast */}
                  <div 
                    className="flex justify-between items-center p-3.5 rounded-xl border transition-all duration-300 hover:shadow-md"
                    style={{
                      background: "linear-gradient(135deg, #f9faff 0%, #f5f6ff 100%)",
                      borderColor: "rgba(93, 26, 186, 0.1)"
                    }}
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-[#5D1ABA]/70 uppercase tracking-wider">Their Price</span>
                      <span className="font-bold text-[#5D1ABA] text-lg">{price}</span>
                    </div>
                    <div className="bg-white p-1 rounded-lg shadow-sm">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/8/81/Zepto_Logo.svg" 
                        className="h-7 w-14 rounded-lg object-contain"
                        alt="Zepto logo"
                      />
                    </div>
                  </div>
                  
                  {/* Savings badge with premium animation */}
                  {price && groRates &&
                    !isNaN(Number(price.replace('$', ''))) &&
                    !isNaN(Number(groRates.replace('$', ''))) &&
                    Number(price.replace('$', '')) > Number(groRates.replace('$', '')) && (
                      <div 
                        className="absolute -right-3 -top-8 px-3 py-1.5 rounded-full transform rotate-6 shadow-xl animate-pulse"
                        style={{
                          background: "linear-gradient(135deg, #2cf005 0%, #1db300 100%)"
                        }}
                      >
                        <span className="text-white text-xs font-bold">
                          Save ${(Number(price.replace('$', '')) - Number(groRates.replace('$', ''))).toFixed(2)}
                        </span>
                      </div>
                    )
                  }
                </div>
                
                {/* Premium badge */}
                <div 
                  className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-16 opacity-0 group-hover:opacity-100 group-hover:-translate-y-3 transition-all duration-500 ease-out"
                  style={{
                    background: "linear-gradient(135deg, #F9429E 0%, #ff6eb3 100%)"
                  }}
                >
                  <div className="px-3 py-1.5 text-xs font-bold text-white rounded-full shadow-md">
                    Premium Deal
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer with elegant gradient */}
      <div className="w-full h-20 mt-16" style={{ background: "linear-gradient(to right, rgba(249, 66, 158, 0.05), rgba(251, 131, 188, 0.08))" }}></div>
    </div>
  </div>
  );
};

export default CategoryPage;
