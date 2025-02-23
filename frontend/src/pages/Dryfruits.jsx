import React, { useState } from 'react';
import { Search, MapPin, ShoppingCart, User, Heart } from 'lucide-react';//for icons
import groLogo from "../assets/groceroLogo.png";
import { IoSearch } from "../assets/react-icons/io5";
import { GiShoppingCart } from "../assets/react-icons/gi"
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import UserLocation from './Home/UserLocation';
// Categories on sidebar with their icons
const categories = [
  { name: 'All', icon: '🏠', image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=50&h=50' },
  { name: 'Premium Dry Fruits', icon: '🥜', image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=50&h=50' },
  { name: 'Exotic Nuts', icon: '🌰', image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=50&h=50' },
  { name: 'Organic', icon: '🌱', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=50&h=50&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.com/photo-1611493812750-577624068dfe?auto=format&fit=crop&w=50&h=50', badge: 'ORGANIC' },
  { name: 'Gifting Combos', icon: '🎁', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=50&h=50&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', badge: 'NEW' },
  { name: 'Healthy Seeds', icon: '🌾', image: 'https://images.unsplash.com/photo-1549530708-be1b34900690?q=80&w=50&h=50&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Superfoods', icon: '🍯', image: 'https://images.unsplash.com/photo-1631880383152-f29099b0fd16?q=80&w=50&h=50&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Dried Berries', icon: '🫐', image: 'https://images.unsplash.com/photo-1684262785264-fc11673602b6?q=80&w=50&h=50&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

// Products array - easy to update and delete and images have been added from online sources
const products = [
  {
    id: 1,
    name: 'Premium California Almonds',
    weight: '500g',
    price: 599,
    originalPrice: 799,
    discount: 25,
    image: 'https://thenaturespalm.in/cdn/shop/files/california-almonds.jpg?v=1716897617&w=400&h=400',
    tag: 'BESTSELLER'
  },
  {
    id: 2,
    name: 'Kashmiri Walnuts',
    weight: '250g',
    price: 449,
    originalPrice: 599,
    discount: 20,
    image: 'https://www.kashmirvilla.com/cdn/shop/products/premium-kashmiri-walnuts-akhrot-shell-wholesale-price-5-kg-pack-dry-fruits-846.jpg?v=1691416633&width=400&height=400'
  },
  {
    id: 3,
    name: 'Premium Cashews',
    weight: '500g',
    price: 699,
    originalPrice: 899,
    discount: 22,
    image: 'https://rukminim2.flixcart.com/image/832/832/krme93k0/nut-dry-fruit/2/w/j/100-bs-cashews-100gm-pouch-balso-original-imag5dagwbzfwyfc.jpeg?q=70&crop=false&w=400&h=400'
  },
  {
    id: 4,
    name: 'Dried Cranberries',
    weight: '200g',
    price: 299,
    originalPrice: 399,
    discount: 25,
    image: 'https://www.fruits365.shop/cdn/shop/products/cranberry_600x.jpg?v=1636776848&w=400&h=400'
  },
  {
    id: 6,
    name: 'Organic Pistachios',
    weight: '200g',
    price: 799,
    originalPrice: 999,
    discount: 20,
    image: 'https://thenutmarket.com.au/cdn/shop/products/PistachiosRaw_900x.png?v=1598233979&h=400&w=400',
    tag: 'ORGANIC'
  },
  {
    id: 7,
    name: 'Dried Blueberries',
    weight: '150g',
    price: 399,
    originalPrice: 499,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1597474561103-0773c378a1fb?auto=format&fit=crop&w=400&h=400'
  },
  {
    id: 8,
    name: 'Brazilian Pine Nuts',
    weight: '100g',
    price: 899,
    originalPrice: 1199,
    discount: 25,
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgS-JPgePjR8O1mRHrSK-7Ra1v1UTSYOdufy_8-Uxb87ixfwHqOHSWxl9uTxMTEyFE7yHBrmXJqwATOCZDHy2QoAQag8ZOFbhW-soV5g5oH3W11UKc8Hjd-T5uNRnyuaRCLGCeD0JIaXQk/s1600/pinhao+closeup.jpg&w=400&h=400'
  },
  {
    id: 9,
    name: 'Premium Dried Figs',
    weight: '250g',
    price: 349,
    originalPrice: 449,
    discount: 22,
    image: 'https://www.jiomart.com/images/product/original/rv08xdy7lb/lila-dry-fruits-premium-dried-afghani-anjeer-500g-pack-dried-figs-rich-source-of-fibre-calcium-iron-low-in-calories-and-fat-free-non-gmo-dried-figs-product-images-orv08xdy7lb-p593843655-3-202209190944.jpg?im=Resize=(400,400)'
  },
  {
    id: 10,
    name: 'Dried Apricots',
    weight: '200g',
    price: 299,
    originalPrice: 399,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1595412017587-b7f3117dff54?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 11,
    name: 'Mixed Dry Fruits Pack',
    weight: '500g',
    price: 799,
    originalPrice: 999,
    discount: 20,
    image: 'https://img.freepik.com/free-photo/close-up-dried-fruit-nuts_1122-756.jpg?t=st=1740102335~exp=1740105935~hmac=3e214ea0f01d510d2712b9dd928635b03ecbea412d120e38cc630340f6d27765&w=400&h=400',
    tag: 'COMBO'
  },
  {
    id: 12,
    name: 'Premium Macadamia',
    weight: '200g',
    price: 999,
    originalPrice: 1299,
    discount: 23,
    image: 'https://alphonsomango.in/cdn/shop/files/alphonsomango-in-nuts-200-grams-buy-jumbo-macadamia-nuts-online-43508492894465_1.jpg?v=1734949863&width=400&h=400'
  },
  {
    id: 15,
    name: 'Premium Pecans',
    weight: '200g',
    price: 749,
    originalPrice: 949,
    discount: 21,
    image: 'https://nuttyyogi.com/cdn/shop/products/GheeInfographicLayout_c86fd261-74b7-4743-880d-4175641a2794.png?v=1701687582&h=400&w=400'
  }
];

function Dryfruits() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);

  const { user } = useContext(UserContext); // No need for logout here
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
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

      <div className="pt-20 px-4">
        <div className="container mx-auto">
          <div className="flex gap-6">
            {/*Sidebar */}
            <aside className="w-72 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl h-[calc(100vh-6rem)] overflow-y-auto sticky top-20">
              <nav className="p-3">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all relative group ${selectedCategory === category.name
                      ? 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600'
                      : 'hover:bg-gray-50'
                      }`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 transform transition-transform group-hover:scale-110 shadow-md">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="font-medium">{category.name}</span>
                    </div>
                    {category.badge && (
                      <span className={`absolute right-3 top-3 text-xs px-2 py-1 rounded-full ${category.badge === 'NEW'
                        ? 'bg-gradient-to-r from-green-400 to-emerald-400 text-white'
                        : 'bg-gradient-to-r from-[#F9429E] to-[#FFA07A] text-white'
                        }`}>
                        {category.badge}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              {/* Hero Banners */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 h-48 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="absolute inset-0 flex items-center justify-between p-8">
                    <div className="text-white">
                      <h2 className="text-2xl font-bold mb-2">Premium Dry Fruits</h2>
                      <p className="mb-4 opacity-90">Handpicked Quality, Delivered Fresh</p>
                      <button className="bg-white text-amber-600 px-6 py-2 rounded-xl font-medium hover:bg-opacity-90 transform hover:scale-105 transition-all shadow-md">
                        Shop Now
                      </button>
                    </div>
                    <div className="floating-nuts scale-150">🥜</div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#F9429E] to-[#FFA07A] h-48 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="absolute inset-0 flex items-center justify-between p-8">
                    <div className="text-white">
                      <h2 className="text-2xl font-bold mb-2">Luxury Gift Boxes</h2>
                      <p className="mb-4 opacity-90">UP TO 40% OFF</p>
                      <button className="bg-white text-[#F9429E] px-6 py-2 rounded-xl font-medium hover:bg-opacity-90 transform hover:scale-105 transition-all shadow-md">
                        Explore
                      </button>
                    </div>
                    <div className="floating-nuts scale-150">🎁</div>
                  </div>
                </div>
              </div>

              {/* Product grid enitre page - more polished */}
              <div className="grid grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative group">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-[#F9429E] to-[#FFA07A]  text-white text-sm px-3 py-1 rounded-full shadow-md">
                        {product.discount}% OFF
                      </div>
                      {product.tag && (
                        <div className="absolute top-2 left-2 bg-gradient-to-r from-amber-400 to-amber-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                          {product.tag}
                        </div>
                      )}
                      <button
                        className="absolute bottom-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transform transition-all hover:scale-110"
                        aria-label="Add to wishlist"
                      >
                        <Heart size={18} className="text-gray-600 hover:cursor-pointer" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 mb-1 truncate">{product.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{product.weight}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold bg-clip-text text-transparent bg-[#F9429E]">
                            ₹{product.price}
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            ₹{product.originalPrice}
                          </span>
                        </div>
                        <button
                          onClick={() => setCartItems([...cartItems, product.id])}
                          className="bg-[#F9429E] text-white px-6 py-1.5 rounded-xl text-sm hover:shadow-lg transform hover:scale-105 transition-all hover:cursor-pointer"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Floating Deals Button at bottom right */}
      <button className="fixed bottom-6 right-6 bg-gradient-to-r from-[#F9429E] to-[#FFA07A] text-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all animate-pulse">
        🔥 Deals of the Day
      </button>
    </div>
  );
}

export default Dryfruits;
