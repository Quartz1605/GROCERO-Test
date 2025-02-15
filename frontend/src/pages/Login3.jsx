import { IoPerson, IoLockClosed } from "../assets/react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login3() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Add your login logic here
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
          Sign in to continue to GRÓCERÓ
        </div>

        {/* Email Input */}
        <div className="flex items-center p-2 relative w-full">
          <IoPerson className="text-[#F9429E] w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            className="pl-10 bg-gray-50 w-full rounded-lg h-12 text-gray-800 px-4 outline-none border border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#ffb6c1] transition duration-300"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
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