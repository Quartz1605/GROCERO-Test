import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './pages/Home';
import LandingPage from './pages/LandingPage/LandingPage';

import Login3 from './pages/Login3';

import Signup3 from './pages/Signup3';

import Profile from './pages/Profile';
import DryFruits from './pages/Dryfruits';
import ProductDetails from './pages/productDetails';

import CategoryPage from './pages/CategoryPage';
import Cart from './pages/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />

        
        <Route path="/login" element={<Login3 />} />
        <Route path="/signup" element={<Signup3 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/profile" element={<Profile />} />
        <Route path="/home/dryfruits" element={<DryFruits />} />

        <Route path="/home/product/:id" element={<ProductDetails />} />
        
        <Route path="/home/category/:categoryName" element={<CategoryPage />} />
        <Route path="/home/cart" element={<Cart />} />

      </Routes>
    </Router>
  );
}

export default App;