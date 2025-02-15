import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern"></div>
      <div className="text-center relative z-10">
        <h1 className="text-6xl font-bold text-gradient mb-6">
          Fresh Groceries<br />Delivered to Your Doorstep
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Order your favorite fruits, veggies, and more. Fast, fresh, and hassle-free!
        </p>
        <a
          href="#"
          className="bg-[#F9429E] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#ff6b8b] transition duration-300 glow hover-scale"
        >
          Get Started
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-8">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3081/3081980.png"
          alt="Fruits"
          className="w-24 h-24 floating"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/3081/3081980.png"
          alt="Vegetables"
          className="w-24 h-24 floating"
          style={{animationDelay: "2s" }}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/3081/3081980.png"
          alt="Basket"
          className="w-24 h-24 floating"
          style={{ animationDelay: "4s" }}
        />
      </div>
    </div>
  );
};

export default Hero;