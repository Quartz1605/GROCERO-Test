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
import { Search, MapPin, ShoppingCart, User, Heart } from 'lucide-react';//for icons
import ProductSlider4 from "./Home/ProductSlider4";

function Home() {
  const { user } = useContext(UserContext); // No need for logout here
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white relative flex flex-col gap-0 p-0 m-0 justify-start items-center h-screen">
      {/* Navigation Bar */}
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

          {/* Cart Icon */}
          <div className="flex flex-col items-center justify-center relative">
            <Link to="/home/cart">
              <button className="relative">
                <GiShoppingCart className="text-[#F9429E] h-10 w-12 hover:cursor-pointer ml-3 pb-0" />
              </button>
            </Link>
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

      {/* New in Store Section. */}
      <div className="mt-10">
        <p className="text-[#F9429E] text-2xl font-bold text-center pb-8 ">
          New in Store
        </p>

        <div className="flex flex-row gap-5 flex-wrap items-center justify-center text-black">
          <div className="h-[208px] w-[216px] rounded-lg border-y-2 border-x-1 hover:cursor-pointer border-[#cfcfcf]" Link>
            <Link to="category/Mobile Accessories">
              <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/302816080/JR/SQ/TN/101759040/8-85046-mobile-phone-accessories-png-png-download-mobile-accessories-500x500.png" className="w-60 h-36 rounded-lg" />
              <p className="text-lg font-bold pt-2 text-center">Mobile Accessories</p>
            </Link>


          </div>

          <div className="h-[208px] w-[216px] rounded-lg border-y-2 border-x-1 hover:cursor-pointer border-[#cfcfcf]">
            <Link to="category/Home Appliances">
              <img src="https://m.media-amazon.com/images/I/51CJZVwNaTL.jpg" className="w-60 h-36 rounded-lg" />
              <p className="text-lg font-bold pt-2 text-center">Home Appliances</p>

            </Link>
          </div>

          <div className="h-[208px] w-[216px] rounded-lg border-y-2 border-x-1 hover:cursor-pointer border-[#cfcfcf]">
            <Link to="category/Eyewear & More">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGkgokQWkeIrVRPnZyhMWocf70GRzDiU9Xw&s" className="w-60 h-36 rounded-lg" />
              <p className="text-lg font-bold pt-2 text-center">Eyewear & More</p>
            </Link>

          </div>

          <div className="h-[208px] w-[216px] rounded-lg border-y-2 border-x-1 hover:cursor-pointer border-[#cfcfcf]">
            <Link to="category/Blocks & Puzzles">
              <img src="https://www.jiomart.com/images/product/original/rv9rzgsqoh/vastate-bricks-toys-sets-with-wheel-lego-blocks-educational-toys-for-kids-60-pcs-multicolor-product-images-orv9rzgsqoh-p607942879-0-202402121904.jpg?im=Resize=(420,420)" className="w-60 h-36 rounded-lg" />
              <p className="text-lg font-bold pt-2 text-center">Blocks & Puzzles</p>
            </Link>

          </div>

          <div className="h-[208px] w-[216px] rounded-lg border-y-2 border-x-1 hover:cursor-pointer border-[#cfcfcf]">
            <Link to="category/Bags & Accessories">
              <img src="https://4.imimg.com/data4/DC/JE/MY-799611/canvas-backpack-1-500x500.jpg" className="w-60 h-36 rounded-lg" />
              <p className="text-lg font-bold pt-2 text-center">Bags & Accessories</p>
            </Link>

          </div>

          <div className="h-[208px] w-[216px] rounded-lg border-y-2 border-x-1 hover:cursor-pointer border-[#cfcfcf]">
            <Link to="category/Pet Treats & Toys" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QMdQKgVvPC124Sgsy5ZIMUSCcvQCEMxDfA&s" className="w-60 h-36 mt-1" />
              <p className="text-lg font-bold pt-2 text-center">Pet Treats & Toys</p>
            </Link>

          </div>

          <div className="h-[208px] w-[216px] rounded-lg border-y-2 border-x-1 hover:cursor-pointer border-[#cfcfcf]">
            <Link to="category/Speakers & More" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Ka9DpwgDGeXKRvp0f8NFUgQ8tDJ12jVnpA&s" className="w-60 h-36 rounded-lg" />
              <p className="text-lg font-bold pt-2 text-center">Speakers & More</p>
            </Link>

          </div>

          <div className="h-[208px] w-[216px] rounded-lg border-y-2 border-x-1 hover:cursor-pointer border-[#cfcfcf]">
            <Link to="category/Batter Extensions" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBozp-tQpf6msXc0Vtr5YzHubtzf9hSjgeIg&s" className="w-60 h-36 rounded-lg" />
              <p className="text-lg font-bold pt-2 text-center">Battery Extensions</p>
            </Link>

          </div>

          <div className="h-[208px] w-[216px] rounded-lg border-y-2 border-x-1 hover:cursor-pointer border-[#cfcfcf]">
            <Link to="category/Crafts & Hobby" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4VdFLcV1dtnTu3ojguggDesuNLcnYSmaag&s" className="w-60 h-36 rounded-lg" />
              <p className="text-lg font-bold pt-2 text-center">Crafts & Hobby</p>

            </Link>

          </div>

          <div className="h-[208px] w-[216px] rounded-lg border-y-2 border-x-1 hover:cursor-pointer border-[#cfcfcf]">
            <Link to="category/Kitchen Appliances">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROb5iLwNNVGuooREk-ep1I-HGvJb-m_rwe0w&s" className="w-60 h-36 rounded-lg" />
              <p className="text-lg font-bold pt-2 text-center">Kitchen Appliances</p>
            </Link>

          </div>

          <div className="h-[208px] w-[216px] rounded-lg border-y-2 border-x-1 hover:cursor-pointer border-[#cfcfcf]">
            <Link to="category/Cards & Board Games">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7vpRSB_bwWsKlqX_QTQLOCAM-QyMZYoFSQ&s" className="w-60 h-36 rounded-lg" />
              <p className="text-lg font-bold pt-2 text-center">Cards & Board Games</p>
            </Link>

          </div>
        </div>

      </div>

      {/* Product slider 4*/}
      <div className="flex flex-col justify-center mt-18 items-center">
        <p className="text-[#F9429E] text-2xl font-bold text-center pb-6">
          Buy Fresh Vegetables & Fruits
        </p>

        <ProductSlider4 />



      </div>



      <h4 className="mt-5 mb-15">Things are to be added.....</h4>
    </div>
  );
}

export default Home;
