import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');  // ✅ Added username state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
  
    const payload = {
      username,
      name: fullName,
      email,
      phone,
      password,
    };
  
    console.log("Submitting data:", payload);  // ✅ Log data before sending
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
      console.log("Response:", data); // ✅ Log response from Django
  
      if (response.ok) {
        alert('Registration successful!');
        navigate('/', { state: { email: data.email, name: data.name, phone: data.phone, username: data.username } });
      } else {
        setError(data.detail || data.message || JSON.stringify(data));
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <>
      <form onSubmit={handleSignup} className='bg-black text-amber-50 max-w-2xl w-2xl h-230 rounded-4xl flex justify-center flex-col items-center'>
        
        <a href='https://en.wikipedia.org/wiki/Polar_bear'>
          <img src='https://cdn-icons-png.flaticon.com/128/9112/9112448.png' className='h-15 hover:cursor-pointer' />
        </a>

        <div className='text-5xl text-orange-300 font-serif font-extrabold'>Sign Up</div>
        <div className='mt-2 text-2xl text-violet-600 font-serif font-bold'>I'm about to make your heart race!</div>

        {/* ✅ Username Input */}
        <div className='pr-90 mt-8'>Username:</div>
        <input 
          className='bg-amber-200 text-black w-115 rounded-lg h-8 pl-2 outline-none mt-2' 
          placeholder='Username'
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Full Name Input */}
        <div className='pr-90 mt-8'>Full Name:</div>
        <input 
          className='bg-amber-200 text-black w-115 rounded-lg h-8 pl-2 outline-none mt-2' 
          placeholder='Full Name'
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)}
        />

        {/* Phone Input */}
        <div className='pr-85 mt-8'>Phone Number:</div>
        <input 
          className='bg-amber-200 text-black w-115 rounded-lg h-8 pl-2 outline-none mt-2' 
          placeholder='Phone Number'
          value={phone} 
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Email Input */}
        <div className='pr-87 mt-8'>Email Address:</div>
        <input 
          className='bg-amber-200 text-black w-115 rounded-lg h-8 pl-2 outline-none mt-2' 
          type='email' 
          placeholder='Email Address'
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input */}
        <div className='pr-88 mt-8'>Set Password:</div>
        <input 
          className='bg-amber-200 text-black w-115 rounded-lg h-8 pl-2 outline-none mt-2' 
          type='password' 
          placeholder='Password'
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Confirm Password Input */}
        <div className='pr-80 mt-8'>Confirm Password:</div>
        <input 
          className='bg-amber-200 text-black w-115 rounded-lg h-8 pl-2 outline-none mt-2' 
          type='password' 
          placeholder='Confirm Password'
        />

        <div className='pl-85 pt-2 hover:cursor-pointer'><b><Link to="/">Login.</Link></b> perhaps?</div>

        <button type="submit" className='mt-10 w-50 font-serif'>
          Submit
        </button>
      </form>
    </>
  )
}

export default Signup;
