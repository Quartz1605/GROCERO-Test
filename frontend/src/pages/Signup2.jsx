import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { IoPerson, IoLockClosed, IoMail, IoCall } from "../assets/react-icons/io5";

function Signup2() {
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff5f7]">
      <form
        onSubmit={handleSignup}
        className="bg-white max-w-md w-full rounded-2xl p-8 shadow-lg flex flex-col items-center"
      >
        {/* Logo */}
        <div className="pb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9112/9112448.png"
            alt="Logo"
            className="w-16 h-16"
          />
        </div>

        {/* Title */}
        <div className="text-4xl font-bold text-[#F9429E] mb-4">Sign Up</div>
        <div className="text-lg text-gray-600 mb-8">I'm about to make your heart race!</div>

        {/* Full Name */}
        <div className="flex items-center p-2 relative w-full">
          <IoPerson className="text-[#F9429E] w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            className="pl-10 bg-gray-50 w-full rounded-lg h-12 text-gray-800 px-4 outline-none border border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#F9429E] transition duration-300"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        {/* Username */}
        <div className="flex items-center p-2 relative w-full mt-6">
          <IoPerson className="text-[#F9429E] w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            className="pl-10 bg-gray-50 w-full rounded-lg h-12 text-gray-800 px-4 outline-none border border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#F9429E] transition duration-300"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="flex items-center p-2 relative w-full mt-6">
          <IoCall className="text-[#F9429E] w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            className="pl-10 bg-gray-50 w-full rounded-lg h-12 text-gray-800 px-4 outline-none border border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#F9429E] transition duration-300"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="flex items-center p-2 relative w-full mt-6">
          <IoMail className="text-[#F9429E] w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            className="pl-10 bg-gray-50 w-full rounded-lg h-12 text-gray-800 px-4 outline-none border border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#F9429E] transition duration-300"
            placeholder="Email Address"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="flex items-center p-2 relative w-full mt-6">
          <IoLockClosed className="text-[#F9429E] w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            className="pl-10 bg-gray-50 w-full rounded-lg h-12 text-gray-800 px-4 outline-none border border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#F9429E] transition duration-300"
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="flex items-center p-2 relative w-full mt-6">
          <IoLockClosed className="text-[#F9429E] w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            className="pl-10 bg-gray-50 w-full rounded-lg h-12 text-gray-800 px-4 outline-none border border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#F9429E] transition duration-300"
            placeholder="Confirm Password"
            value={cpassword}
            type="password"
            onChange={(e) => setcPassword(e.target.value)}
            required
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="w-full mt-4 text-sm text-red-500 text-center">
            {error}
          </div>
        )}

        {/* Links */}
        <div className="flex justify-between w-full mt-4 text-sm text-gray-600">
          <div>
            Already have an account?{" "}
            <Link to="/login" className="text-[#F9429E] hover:underline">
              Login
            </Link>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 w-full bg-[#F9429E] text-white py-3 rounded-lg font-semibold hover:bg-[#D6336C] focus:ring-1 focus:ring-[#F9429E] transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup2;