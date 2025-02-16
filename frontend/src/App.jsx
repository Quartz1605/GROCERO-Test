import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from './pages/Home';
import LandingPage from './pages/LandingPage/LandingPage';
import Login2 from './pages/Login2';
import Login3 from './pages/Login3';
import Signup2 from './pages/Signup2';
import Signup3 from './pages/Signup3';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />

        
        <Route path="/login" element={<Login3 />} />
        <Route path="/signup" element={<Signup3 />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
