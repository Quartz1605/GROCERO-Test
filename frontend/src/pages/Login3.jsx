
import { IoPerson, IoLockClosed } from "../assets/react-icons/io5";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

function Login3() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Store user data in context

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null); // Clear previous errors

    const payload = {
      username,
      password,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Login Response:", data);

      if (response.ok) {
        // Store tokens in local storage
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);

        // Store user data in context
        setUser({ username });

        // Navigate to home page
        navigate("/home");
      } else {
        setError(data.detail || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("An unexpected error occurred.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff5f7]">
      <form
        className="bg-white max-w-md w-full rounded-2xl p-8 shadow-lg flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        {/* Logo */}
        <div className="pb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/128/18438/18438779.png"
            alt="Logo"
            className="w-16 h-16"
          />
        </div>

        {/* Title */}
        <div className="text-4xl font-bold text-[#F9429E] mb-4">
          Welcome Back!
        </div>

        {/* Subtitle */}
        <div className="text-lg text-gray-600 mb-8">
          Sign in to continue to GROCERÓ
        </div>

        {/* Email Input */}
        <div className="flex items-center p-2 relative w-full">
          <IoPerson className="text-[#F9429E] w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            className="pl-10 bg-gray-50 w-full rounded-lg h-12 text-gray-800 px-4 outline-none border border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#ffb6c1] transition duration-300"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center p-2 relative w-full mt-6">
          <IoLockClosed className="text-[#F9429E] w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="password"
            className="pl-10 bg-gray-50 w-full rounded-lg h-12 text-gray-800 px-4 outline-none border border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#ffb6c1] transition duration-300"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        {/* Error Message */}
        {error && <div className="text-red-500 mt-2">{error}</div>}

        {/* Links */}
        <div className="flex justify-between w-full mt-4 text-sm text-gray-600">
          <div>
            New user?{" "}
            <Link to="/signup" className="text-[#F9429E] hover:underline">
              Sign Up
            </Link>
          </div>
          <div className="hover:cursor-pointer hover:underline">
            Forgot your password?
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 w-full bg-[#F9429E] text-white py-3 rounded-lg font-semibold hover:bg-[#FF0696] focus:ring-1 focus:ring-[#ffb6c1] transition duration-300 hover:cursor-pointer"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login3;
