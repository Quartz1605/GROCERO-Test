import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useContext(UserContext); // Add logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call logout function
    navigate("/home"); // Redirect to home page after logout
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Welcome Message */}
      <h4 className="text-2xl font-bold text-[#000000] mb-4">
        Welcome <b className="text-3xl text-[#F9429E]">{user.username}</b> to your profile.
      </h4>

      {/* Address Section */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-lg font-semibold text-gray-800">
          Your Address:
        </p>
        <p className="text-gray-600 mt-2">
          {user.homeAddress ? user.homeAddress : "No address saved"}
        </p>
      </div>

      {/* Logout Button */}
      <button
        className="bg-[#F9429E] hover:bg-[#F400A1] p-3 text-xl font-bold text-white hover:cursor-pointer rounded-lg mt-8 transition duration-300"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
}

export default Profile;