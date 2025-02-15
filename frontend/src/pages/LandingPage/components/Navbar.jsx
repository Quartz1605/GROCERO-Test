import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-[#F9429E]">GROCERÓ</div>
          <div>
            <Link to="/login"
              
              className="bg-[#F9429E] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#ff6b8b] transition duration-300 glow"
            >
              Login / Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;