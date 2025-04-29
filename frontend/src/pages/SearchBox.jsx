import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import groLogo from "../assets/groceroLogo.png";
import { useContext, useState } from "react";
import { IoSearch } from "../assets/react-icons/io5";
import { GiShoppingCart } from "../assets/react-icons/gi";
import { MapPin, Heart, ShoppingCart } from "lucide-react";




const SearchBox = () => {


  const [query, setQuery] = useState("")



  const [searchItems, setSearchItems] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [cartItems, setCartItems] = useState([])

  const [quantities, setQuantities] = useState({});

  const onSearch = async () => {

    const access_token = localStorage.getItem("access_token")

    try {


      const response = await fetch(`http://127.0.0.1:8000/api/search/?q=${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
        }
      })

      const data = await response.json()

      if (response.ok) {
        console.log(data)
        setSearchItems(data)
        console.log('Cart worked fine')
      }
      else {
        console.log("Error fetching items")
      }



    }
    catch (error) {
      console.log("Backend error : ", error)
    }


  }

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







  return (
    <div>
      <div className="flex flex-row justify-between items-center fixed top-0 left-0 right-0 h-20 z-50 bg-gradient-to-b from-[#ff9bcd] to-[#ffffff] backdrop:blur-xl px-4">
        {/* Logo */}
        <Link to="/home">
          <img src={groLogo} className="h-14 ml-2" alt="Grocero Logo" />
        </Link>

        {/* Centered Search Bar */}
        <div className="flex-1 mx-4 max-w-4xl relative flex items-center">
          {/* Search Icon inside input */}
          <IoSearch className="text-[#F9429E] w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2" />

          {/* Input Box */}
          <input
            className="w-full pl-12 bg-gray-50 rounded-l-lg h-12 text-gray-800 px-4 outline-none border-t border-b border-l border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#ffb6c1] transition duration-300"
            type="text"
            placeholder="Search in more than 1000 items."
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Search Button */}
          <button
            onClick={onSearch}
            className="bg-[#F9429E] text-white h-12 px-6 rounded-r-xl hover:bg-[#f400a1] transition font-bold hover:cursor-pointer"
          >
            Search
          </button>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-30">
        {searchItems.map((item,index) => (
          <div
            key={item.groID}
            className="relative bg-white rounded-2xl overflow-hidden transition-all duration-500 group hover:shadow-[0_20px_50px_rgba(249,66,158,0.2)] transform hover:-translate-y-2"
            onMouseEnter={() => setHoveredCard(String(item.groID))}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 30px",
              border: "1px solid rgba(249, 66, 158, 0.07)"
            }}
          >
            {/* Status badge with premium design */}
            

            {/* Favorite button */}
            <button
              onClick={() => toggleFavorite(item.groID)}
              className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-sm transition-transform duration-300 hover:scale-110"
            >
              <Heart
                size={18}
                className={`${favoriteItems.includes(item.groID) ? 'fill-[#F9429E] text-[#F9429E]' : 'text-gray-400'}`}
              />
            </button>

            {/* Image container with premium effects */}
            <div className="relative h-56 overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#F9429E]/10 via-transparent to-[#F9429E]/5 z-0 rounded-t-2xl"></div>
              <img
                src={item.img_path}
                alt={item.name}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ objectPosition: "center" }}
              />

              {/* Elegant gradient overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Add to cart button with improved design */}
              <div
                className={`absolute bottom-4 inset-x-0 mx-auto text-center transition-all duration-500 ${hoveredCard === String(item.groID) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
              >

                <div className="mb-3 flex justify-center items-center gap-2">

                </div>
                <button
                  onClick={() => {
                    addToCart(item.groID, item.name, item.price, item.groRates, item.image_path);
                  }
                  }
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
              <h3 className="font-semibold text-gray-800 text-lg mb-1 truncate">{item.name}</h3>
              <p className="text-xs text-gray-500 mb-5">Premium Quality • 500g</p>

              <div className="flex flex-row gap-x-2 mb-4">
                <label htmlFor={`qty-${item.name}`} className="text-sm text-gray-600 ml-1">Qty:</label>
                <input
                  id={`qty-${item.name}`}
                  type="number"
                  min="1"
                  max="1000"
                  value={quantities[item.name] || 1}
                  onChange={(e) =>
                    setQuantities((prev) => ({
                      ...prev,
                      [item.name]: parseInt(e.target.value)
                    }))
                  }
                  className="appearance-none w-14 text-center border rounded-lg px-0 py-1 text-sm outline-none focus:ring-2 focus:ring-[#F9429E]/50 hover:cursor-pointer pr-3"
                  style={{
                    background: "linear-gradient(135deg, #fff8fa 0%, #fff5f8 100%)",
                    borderColor: "rgba(249, 66, 158, 0.15)"
                  }}
                />

              </div>

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
                    <span className="font-bold text-green-500 text-lg">{item.groRates}</span>
                  </div>
                  <div
                    className="text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm"
                    style={{
                      background: "linear-gradient(135deg, #F9429E 0%, #ff6eb3 100%)"
                    }}
                  >
                    <img src={groLogo} alt="Logo" className="h-7 w-14 rounded-lg object-contain"
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
                    <span className="font-bold text-[#5D1ABA] text-lg">{item.price}</span>
                  </div>
                  <div className="bg-white p-1 rounded-lg shadow-sm">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/81/Zepto_Logo.svg"
                      className="h-7 w-14 rounded-lg object-contain"
                      alt="Zepto logo"
                    />
                  </div>
                </div>


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
  )



}


export default SearchBox