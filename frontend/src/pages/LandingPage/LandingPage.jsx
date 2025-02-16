import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";




const LandingPage = () => {
  
  const bgImage = 'url(https://images.pexels.com/photos/5677627/pexels-photo-5677627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
  

  return (
    <div className="gradient-bg" style={{backgroundImage:bgImage,backgroundSize: 'cover',backgroundPosition: 'center',
      minHeight: '100vh',
      width: '100%'}}>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;

