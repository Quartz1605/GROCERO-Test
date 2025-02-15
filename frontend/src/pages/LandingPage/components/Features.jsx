import React from "react";

const Features = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12 mx-auto mb-4 text-[#F9429E]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      ),
      title: "Wide Selection",
      description: "Choose from a variety of fresh produce and pantry staples.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 mx-auto mb-4 text-[#F9429E]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      title: "Fast Delivery",
      description: "Get your groceries delivered in as little as 30 minutes.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 mx-auto mb-4 text-[#F9429E]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      ),
      title: "Quality Guaranteed",
      description: "We ensure the freshest and highest quality products.",
    },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-md py-16 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gradient mb-4 text-[#00000]">Why Choose <b className="text-[#F9429E]">GROCERÓ?</b></h2>
          <p className="text-gray-600">We make grocery shopping simple and delightful.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#fff5f7] p-6 rounded-lg shadow-lg hover-scale">
                {feature.icon}
                <h3 className="text-xl font-semibold text-[#F9429E] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;