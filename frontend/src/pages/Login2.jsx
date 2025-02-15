import key from '../assets/key.png';
import { IoPerson } from "../assets/react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Add your login logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff5f7]">
      <form
        className="bg-white max-w-2xl w-full rounded-4xl p-8 shadow-lg flex flex-col items-center"
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
        <div className="text-6xl mb-8 font-extrabold text-[#ffb6c1]">
          GRÓCERÓ
        </div>

        {/* Subtitle */}
        <div className="text-4xl font-bold text-[#ffb6c1] mb-2">
          Sign in to your account
        </div>
        <div className="text-xl text-gray-600 mb-8">
          or start a subscription
        </div>

        {/* Email Input */}
        <div className="flex items-center p-2 relative w-full max-w-md">
          <IoPerson className="text-[#ffb6c1] w-7 h-7 mr-2 absolute left-5 top-1/2 transform -translate-y-1/2" />
          <input
            className="pl-12 bg-gray-100 w-full rounded-lg h-12 text-gray-800 px-4 outline-none border border-[#ffb6c1] focus:ring-1 focus:ring-[#ffb6c1]"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center p-2 relative w-full max-w-md mt-6">
          <img
            src={key}
            alt="Key Icon"
            className="text-[#ffb6c1] w-7 h-7 mr-2 absolute left-5 top-1/2 transform -translate-y-1/2"
          />
          <input
            type="password"
            className="pl-12 bg-gray-100 w-full rounded-lg h-12 text-gray-800 px-4 outline-none border border-[#ffb6c1] focus:ring-1 focus:ring-[#ffb6c1]"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        {/* Links */}
        <div className="flex justify-between w-full max-w-md mt-4 text-sm text-gray-600">
          <div>
            New user?{" "}
            <Link to="/signup" className="text-[#ffb6c1] hover:underline">
              Sign Up.
            </Link>
          </div>
          <div className="hover:cursor-pointer hover:underline">
            Forgot your password?
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 w-full max-w-md bg-[#F9429E] text-white py-3 rounded-lg font-semibold hover:bg-[#F9429E] focus:ring-1 focus:ring-[#F9429E] transition duration-300"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;