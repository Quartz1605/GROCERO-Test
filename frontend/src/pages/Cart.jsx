import { IoSearch } from "../assets/react-icons/io5";
import groLogo from "../assets/groceroLogo.png";
import { useEffect, useState, useContext } from "react"
import UserContext from "../../contexts/UserContext";
import { data, Link, useNavigate } from "react-router-dom";
import UserLocation from "./Home/UserLocation";
import { MapPin, Heart, ShoppingCart } from "lucide-react";

const Cart = () => {

  const { user } = useContext(UserContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);


  const [items, setItems] = useState([])

  useEffect(() => {
    let isMounted = true;

    const getItems = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/auth/cart-list/');
        const data = await response.json();

        if (isMounted) {
          setItems(data);
          console.log("Fetched and set:", data);

        }
      } catch (error) {
        console.log("Error in fetching", error);
      }
    };

    getItems();

    return () => {
      isMounted = false; // cleanup when component unmounts
    };
  }, []);

  const removeFromCart = async (itemId) => {
    const token = localStorage.getItem("access_token");

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/auth/cart/delete/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);

        // Remove from local cart state
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
      } else {
        console.error("Backend error:", data.error);
      }
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      // Extract numeric value by removing the Rupee symbol and any non-digit characters
      const priceString = item.groRates;
      const price = parseInt(priceString.replace(/[^0-9]/g, ''), 10);
      
      // Multiply by quantity and add to total
      return total + (price * item.quantity);
    }, 0);
  };

  const formatCurrency = (amount) => {
    return `₹${amount}`;
  };

  const calculateTax = (subtotal) => {
    const itemSubtotal = subtotal

    return(
      0.18*itemSubtotal
    )

  }

  const calculateShipping = (subtotal) => {
    const itemSubtotal = subtotal

    return (
      0.05*itemSubtotal
    )
  }

  const finalTotal = (subtotal) => {
    const sub = subtotal;
    const shipping = calculateShipping(sub);
    const tax = calculateTax(sub)

    return (Math.round(sub + shipping + tax))
  }





  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-row justify-between top-0 left-0 right-0 h-20 items-center fixed z-50 bg-gradient-to-b from-[#ff9bcd] to-[#ffffff] backdrop:blur-xl">
        {/* Logo */}
        <img src={groLogo} className="h-15 ml-2" alt="Grocero Logo" />


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


        </div>
      </div>

      {/* Welcome Txt */}


      {/* Cart Section */}

      <div className="container mx-auto px-4 py-8 max-w-7xl mt-15">
        {/* Page heading with subtle gradient underline */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-[#F9429E] mb-2">Welcome to Cart !</h2>

          <div className="h-1 w-24 mx-auto mt-4 bg-gradient-to-r from-[#F9429E] to-[#ff6eb3] rounded-full"></div>
        </div>

        {/* Centered grid with smaller cards */}

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Products Section - Takes 2/3 of the space on large screens */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative bg-white rounded-xl overflow-hidden transition-all duration-500 group hover:shadow-lg transform hover:-translate-y-2"
                    onMouseEnter={() => setHoveredCard(String(item.id))}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 8px 20px",
                      border: "1px solid rgba(249, 66, 158, 0.07)"
                    }}
                  >
                    {/* Image container with premium effects */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute -inset-1 bg-gradient-to-tr from-[#F9429E]/10 via-transparent to-[#F9429E]/5 z-0 rounded-t-xl"></div>
                      <img
                        src={item.img_path}
                        alt={item.name}
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                        style={{ objectPosition: "center" }}
                      />

                      {/* Elegant gradient overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                        <button
                          onClick={() => { removeFromCart(item.id) }}
                          className="py-2 px-4 flex items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white w-full hover:cursor-pointer"
                          style={{
                            border: "1px solid rgba(249, 66, 158, 0.3)",
                            boxShadow: "0 4px 12px rgba(249, 66, 158, 0.15)"
                          }}
                        >
                          <span className="text-sm font-medium text-[#F9429E] text-center">Remove from Cart</span>
                        </button>
                      </div>

                      {/* Product badge in top corner */}
                      <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full text-xs font-medium text-[#F9429E] shadow-sm backdrop-blur-sm">
                        Premium
                      </div>
                    </div>

                    {/* Product details with more compact styling */}
                    <div className="p-4">
                      {/* Product title with elegant typography */}
                      <h3 className="font-semibold text-gray-800 text-base mb-0.5 truncate">{item.name}</h3>

                      <div className="flex flex-col gap-x-7 mt-2">
                        <p className="text-xs text-gray-500 mb-3">Premium Quality • 500g</p>
                        <p className="text-[14px] text-gray-500 font-medium mb-3">
                          Quantity: <b className="bg-[#ffcfe7] px-3 py-1 rounded-lg text-black">{item.quantity}</b>
                        </p>
                      </div>

                      {/* Price comparison section with luxury card design */}
                      <div className="space-y-3 relative">
                        {/* Grocero Price - Premium card style */}
                        <div
                          className="flex justify-between items-center p-2.5 rounded-lg border transition-all duration-300 hover:shadow-sm"
                          style={{
                            background: "linear-gradient(135deg, #fff8fa 0%, #fff5f8 100%)",
                            borderColor: "rgba(249, 66, 158, 0.15)"
                          }}
                        >
                          <div className="flex flex-col">
                            <span className="text-xs font-medium text-[#F9429E]/70 uppercase tracking-wider">Price</span>
                            <span className="font-bold text-green-500 text-base">{item.groRates}</span>
                          </div>
                          <div
                            className="text-white text-xs font-bold px-2 py-1 rounded-lg shadow-sm"
                            style={{
                              background: "linear-gradient(135deg, #F9429E 0%, #ff6eb3 100%)"
                            }}
                          >
                            <img src={groLogo} alt="Logo" className="h-6 w-12 rounded-lg object-contain" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Billing Section - Takes 1/3 of the space on large screens */}
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-white rounded-xl p-6 sticky top-6" style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 8px 20px",
                border: "1px solid rgba(249, 66, 158, 0.07)"
              }}>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

                {/* Items summary */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-4 border-gray-100">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-lg overflow-hidden mr-3">
                          <img src={item.img_path} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-800">{item.groRates}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price breakdown */}
                <div className="space-y-3 mb-6 pt-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium">{formatCurrency(calculateSubtotal())}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium">{formatCurrency(calculateShipping(calculateSubtotal()))}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span className="font-medium">{formatCurrency(calculateTax(calculateSubtotal()))}</span>
                  </div>
                  <div className="flex justify-between text-gray-800 font-bold text-lg pt-3 border-t border-gray-100">
                    <span>Total</span>
                    <span className="text-[#F9429E]">{formatCurrency(finalTotal(calculateSubtotal()))}</span>
                  </div>
                </div>

                {/* Promo code section */}
                <div className="mb-6">
                  <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-2">Promo Code</label>
                  <div className="flex">
                    <input
                      type="text"
                      id="promo"
                      className="flex-1 rounded-l-lg border-gray-200 focus:ring-[#F9429E] focus:border-[#F9429E] text-sm"
                      placeholder="Enter code"
                    />
                    <button
                      className="px-4 py-2 bg-[#F9429E] text-white font-medium rounded-r-lg hover:bg-[#d9358a] transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Checkout button */}
                <button
                  className="w-full py-3 px-4 bg-[#F9429E] text-white font-semibold rounded-xl hover:bg-[#d9358a] transition-colors shadow-md hover:shadow-lg"
                  style={{
                    boxShadow: "0 4px 12px rgba(249, 66, 158, 0.25)"
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>







  )


}

export default Cart