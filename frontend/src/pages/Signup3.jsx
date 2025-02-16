import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { IoPerson, IoLockClosed, IoMail, IoCall } from "../assets/react-icons/io5";

function Signup3() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      setError("Input Password and Confirm Password don't match!");
      return;
    }
    if (phone.length !== 10) {
      setError("Enter a valid Phone Number!");
      return;
    }

    const payload = {
      username,
      name: fullName,
      email,
      phone,
      password,
    };

    console.log("Submitting data:", payload);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        setUser({ username, fullName });
        navigate('/home', {
          state: { email: data.email, name: data.name, phone: data.phone, username: data.username },
        });
      } else {
        setError(data.detail || data.message || JSON.stringify(data));
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setError("An unexpected error occurred.");
    }
  };

  const bgImg = 'url(https://images.pexels.com/photos/8845657/pexels-photo-8845657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'

  return (
    <div className="min-h-screen flex items-center justify-center " style={{backgroundImage:bgImg,backgroundSize: 'cover',backgroundPosition: 'center',
      minHeight: '100vh',
      width: '100%'}}>
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 p-8 text-white">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9112/9112448.png"
          alt="Logo"
          className="w-32 h-32 mb-8"
        />
        <h1 className="text-5xl font-bold mb-10 text-white">Join Us!</h1>
        <p className="text-3xl text-center mt-7 text-white">
          <b>Sign up to unlock exclusive features and start your journey with us.</b>
        </p>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
        <form
          onSubmit={handleSignup}
          className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-[#F9429E] mb-6 text-center">Sign Up</h2>

          {/* Full Name */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <IoPerson className="text-[#F9429E] w-6 h-6 mr-2" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full outline-none"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Username */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Username</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <IoPerson className="text-[#F9429E] w-6 h-6 mr-2" />
              <input
                type="text"
                placeholder="Choose a username"
                className="w-full outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <IoCall className="text-[#F9429E] w-6 h-6 mr-2" />
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Email Address</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <IoMail className="text-[#F9429E] w-6 h-6 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <IoLockClosed className="text-[#F9429E] w-6 h-6 mr-2" />
              <input
                type="password"
                placeholder="Create a password"
                className="w-full outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <IoLockClosed className="text-[#F9429E] w-6 h-6 mr-2" />
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full outline-none"
                value={cpassword}
                onChange={(e) => setcPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm mb-4 text-center">{error}</div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#F9429E] text-white py-3 rounded-lg font-semibold hover:bg-[#D6336C] transition duration-300"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <div className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#F9429E] hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup3;