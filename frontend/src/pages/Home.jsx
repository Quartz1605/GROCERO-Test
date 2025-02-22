import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import groLogo from "../assets/groceroLogo.png";
import { useContext, useState } from "react";
import banner from "../assets/banner.jpg";
import { IoSearch } from "../assets/react-icons/io5";
import { GiShoppingCart } from "../assets/react-icons/gi";
import ProductSlider from "./Home/ProductSlider";
import ProductSlider2 from "./Home/ProductSlider2";
import ProductSlider3 from "./Home/ProductSlider3";
import UserLocation from "./Home/UserLocation";

function Home() {
  const { user } = useContext(UserContext); // No need for logout here
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white relative flex flex-col gap-0 p-0 m-0 justify-start items-center h-screen">
      {/* Navigation Bar */}
      <div className="flex flex-row justify-between top-0 left-0 right-0 h-20 items-center fixed z-50 ">
        {/* Logo */}
        <img src={groLogo} className="h-15 ml-5" alt="Grocero Logo" />

        {/* Search Bar */}
        <div className="flex items-center p-2 relative w-full">
          <IoSearch className="text-[#F9429E] w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 pl-1.5" />
          <input
            className="pl-10 bg-gray-50 rounded-lg h-12 text-gray-800 px-4 outline-none border border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#ffb6c1] transition duration-300 flex-grow"
            type="text"
            placeholder="Looking for?"
            required
          />

          {/* Conditional Rendering Based on Login State */}
          {user.username !== "Guest" ? (
            <>
              {/* Address Button */}
              <button
                className="bg-[#F9429E] ml-3 rounded-xl p-3 text-white font-bold hover:cursor-pointer hover:bg-[#F400A1]"
                onClick={() => setIsModalOpen(true)}
              >
                {user.homeAddress ? `Delivering to "Home🤍"` : "Set Address"}
              </button>
              
              <UserLocation
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />

              {/* Profile Picture */}
              <img
                className="h-10 rounded-full w-10 ml-5 hover:cursor-pointer"
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
              {/* Login Button */}
              <Link to="/login">
                <button className="bg-[#F9429E] ml-3 rounded-xl px-5 py-3 text-white font-bold hover:cursor-pointer hover:bg-[#F400A1]">
                  Login
                </button>
              </Link>
            </>
          )}

          {/* Cart Icon */}
          <div className="flex flex-col items-center justify-center gap-0">
            <GiShoppingCart className="text-[#F9429E] h-10 w-12 hover:cursor-pointer ml-5 pb-0" />
            <div className="ml-5 pt-0 text-[16px] text-[#000000] hover:underline hover:cursor-pointer">
              Cart
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="flex-column justify-center items-center max-w-7xl h-20 ml-20 mr-20 mt-25 mb-0 inline-block">
        <p className="text-center mb-10 text-2xl">
          Welcome <b className="text-[#F9429E]">{user.username}</b>!
        </p>
        <img className="object-contain" src={banner} alt="Banner" />
      </div>

      {/* Grocery and Kitchen */}
      <div className="flex flex-col justify-center mt-68 items-center">
        <p className="text-[#F9429E] text-2xl font-bold text-center pb-8">
          Grocery and Kitchen
        </p>
        <ProductSlider />
      </div>

      {/* Snacks and Drinks */}
      <div className="flex flex-col justify-start mt-15 items-center">
        <p className="text-[#F9429E] text-2xl font-bold pb-8">
          Snacks and Drinks
        </p>
        <ProductSlider2 />
      </div>

      {/* Home Needs */}
      <div className="flex flex-col justify-center mt-15 items-center">
        <p className="text-[#F9429E] text-2xl font-bold text-center pb-8">
          Get Your Home Needs
        </p>
        <ProductSlider3 />
      </div>

      <h4 className="mt-5 mb-15">Things are to be added.....</h4>
    </div>
  );
}

export default Home;
