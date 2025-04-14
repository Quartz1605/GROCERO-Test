import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate, Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiHeart,
  FiMapPin,
  FiPackage,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
{
  /* react icons ka sahi istemaal */
}

function Profile() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  // Dummy data for wishlist and recent orders
  // real me backend se lao data
  const wishlistItems = [];
  const recentOrders = [];

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ye header hai */}
      <div className="bg-gradient-to-r from-[#F9429E] to-[#F400A1] text-white p-8 rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#F9429E] text-3xl font-bold border-4 border-white shadow-md">
              {user.username ? user.username.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold">Welcome, {user.username}!</h1>
              <p className="opacity-90">
                Member since {new Date().getFullYear()}
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center bg-white text-[#F9429E] px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition duration-300"
          >
            <FiLogOut className="mr-2" /> Log Out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar hai */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-xl shadow-md p-4">
              <nav>
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center p-3 mb-2 rounded-lg transition ${
                    activeTab === "profile"
                      ? "bg-[#F9429E] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FiUser className="mr-3" /> My Profile
                </button>
                <button
                  onClick={() => setActiveTab("cart")}
                  className={`w-full flex items-center p-3 mb-2 rounded-lg transition ${
                    activeTab === "cart"
                      ? "bg-[#F9429E] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FiShoppingCart className="mr-3" /> My Cart
                </button>
                <button
                  onClick={() => setActiveTab("wishlist")}
                  className={`w-full flex items-center p-3 mb-2 rounded-lg transition ${
                    activeTab === "wishlist"
                      ? "bg-[#F9429E] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FiHeart className="mr-3" /> My Wishlist
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full flex items-center p-3 mb-2 rounded-lg transition ${
                    activeTab === "orders"
                      ? "bg-[#F9429E] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FiPackage className="mr-3" /> My Orders
                </button>
                <button
                  onClick={() => setActiveTab("address")}
                  className={`w-full flex items-center p-3 mb-2 rounded-lg transition ${
                    activeTab === "address"
                      ? "bg-[#F9429E] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FiMapPin className="mr-3" /> My Address
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center p-3 mb-2 rounded-lg transition ${
                    activeTab === "settings"
                      ? "bg-[#F9429E] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FiSettings className="mr-3" /> Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Main content area */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-xl shadow-md p-6">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-500 text-sm">Username</p>
                      <p className="font-medium">{user.username}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-500 text-sm">Email</p>
                      <p className="font-medium">
                        {user.email || "Not provided"}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-500 text-sm">Phone</p>
                      <p className="font-medium">
                        {user.phone || "Not provided"}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-500 text-sm">Address</p>
                      <p className="font-medium">
                        {user.homeAddress || "No address saved"}
                      </p>
                    </div>
                  </div>
                  <button className="mt-6 bg-[#F9429E] hover:bg-[#F400A1] text-white py-2 px-4 rounded-lg transition">
                    Edit Profile
                  </button>
                </div>
              )}

              {/* Cart tab- isme kaise add krna hai backend wale dekhlo */}
              {activeTab === "cart" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">My Cart</h2>
                    <Link to="/cart" className="text-[#F9429E] hover:underline">
                      View Full Cart
                    </Link>
                  </div>

                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">Your cart is empty</p>
                    <Link
                      to="/shop"
                      className="bg-[#F9429E] text-white py-2 px-4 rounded-lg hover:bg-[#F400A1] transition"
                    >
                      Start Shopping
                    </Link>
                  </div>
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === "wishlist" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>

                  {wishlistItems.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">
                        Your wishlist is empty
                      </p>
                      <Link
                        to="/shop"
                        className="bg-[#F9429E] text-white py-2 px-4 rounded-lg hover:bg-[#F400A1] transition"
                      >
                        Discover Products
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Wishlist items idhar dikhenge */}
                    </div>
                  )}
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === "orders" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Order History</h2>

                  {recentOrders.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">
                        You haven't placed any orders yet
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Order history idhar ayega */}
                    </div>
                  )}
                </div>
              )}

              {/* Address Tab */}
              {activeTab === "address" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">My Address</h2>

                  {!user.homeAddress ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">
                        You haven't added an address yet
                      </p>
                      <button className="bg-[#F9429E] text-white py-2 px-4 rounded-lg hover:bg-[#F400A1] transition">
                        Add New Address
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="bg-gray-50 p-6 rounded-lg border-2 border-[#F9429E] mb-4">
                        <div className="flex justify-between">
                          <h3 className="font-bold">Home Address</h3>
                          <span className="bg-[#F9429E] text-white text-xs px-2 py-1 rounded">
                            Default
                          </span>
                        </div>
                        <p className="mt-2">{user.homeAddress}</p>
                        <div className="mt-4 flex space-x-2">
                          <button className="text-[#F9429E] text-sm hover:underline">
                            Edit
                          </button>
                          <button className="text-gray-500 text-sm hover:underline">
                            Delete
                          </button>
                        </div>
                      </div>

                      <button className="bg-white border border-[#F9429E] text-[#F9429E] py-2 px-4 rounded-lg hover:bg-gray-50 transition">
                        Add New Address
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Account Settings</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Change Password</h3>
                      <form className="space-y-3">
                        <input
                          type="password"
                          placeholder="Current Password"
                          className="w-full p-2 border rounded"
                        />
                        <input
                          type="password"
                          placeholder="New Password"
                          className="w-full p-2 border rounded"
                        />
                        <input
                          type="password"
                          placeholder="Confirm New Password"
                          className="w-full p-2 border rounded"
                        />
                        <button
                          type="submit"
                          className="bg-[#F9429E] text-white py-2 px-4 rounded-lg hover:bg-[#F400A1] transition"
                        >
                          Update Password
                        </button>
                      </form>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-2">
                        Notification Preferences
                      </h3>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            defaultChecked
                          />
                          Email notifications for orders
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            defaultChecked
                          />
                          Special offers and promotions
                        </label>
                      </div>
                      <button className="mt-3 bg-[#F9429E] text-white py-2 px-4 rounded-lg hover:bg-[#F400A1] transition">
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

{
  /*Hogya boss Ab isko backend se connect karna hai */
}
