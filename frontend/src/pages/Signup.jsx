import { useState,useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    if(password !== cpassword){
      document.querySelector("#result").innerHTML = `Input Password and confirm Password don't match!`
    }
    else if(phone.length !== 10){
      document.querySelector("#result").innerHTML = `Enter a valid Phone Number !`
    }
    
    else{
      document.querySelector("#result").innerHTML = ``
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
          
          navigate('/', { state: { email: data.email, name: data.name, phone: data.phone, username: data.username } });
        } else {
        setError(data.detail || data.message || JSON.stringify(data));
        }
      } catch (error) {
        console.error("Signup Error:", error);
        setError("An unexpected error occurred.");
      }
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

        <div className='flex flex-col justify-start items-start'>
        
          <div className='pr-90 mt-8 mb-2 ml-1 text-xl'>Username:</div>
        
          <input className='bg-gray-100 w-150 rounded-lg h-12 text-gray-800 px-4 outline-none border border-amber-300 focus:ring-1 focus:ring-amber-400' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </div>


        <div className='flex flex-col justify-start items-start'>
        
          <div className='pr-90 mt-8 mb-2 ml-1 text-xl'>Full Name:</div>

          <input className='bg-gray-100 w-150 rounded-lg h-12 text-gray-800 px-4 outline-none border border-amber-300 focus:ring-1 focus:ring-amber-400' placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)}></input>
        </div>

        <div className='flex flex-col justify-start items-start'>
        
          <div className='pr-90 mt-8 mb-2 ml-1 text-xl'>Phone Number:</div>
          <input className='bg-gray-100 w-150 rounded-lg h-12 text-gray-800 px-4 outline-none border border-amber-300 focus:ring-1 focus:ring-amber-400' placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
        </div>

        <div className='flex flex-col justify-start items-start'>
        
          <div className='pr-90 mt-8 mb-2 ml-1 text-xl'>Email Adress:</div>
          <input className='bg-gray-100 w-150 rounded-lg h-12 text-gray-800 px-4 outline-none border border-amber-300 focus:ring-1 focus:ring-amber-400' placeholder='Email Adress' value={email} type='email' onChange={(e) => setEmail(e.target.value)}></input>
        </div>

        <div className='flex flex-col justify-start items-start'>
        
          <div className='pr-90 mt-8 mb-2 ml-1 text-xl'>Password:</div>
          <input className='bg-gray-100 w-150 rounded-lg h-12 text-gray-800 px-4 outline-none border border-amber-300 focus:ring-1 focus:ring-amber-400' placeholder='Password' value={password} type='password' onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <div className='flex flex-col justify-start items-start'>
        
          <div className='pr-90 mt-8 mb-2 ml-1 text-xl'>Confirm Password:</div>
          <input className='bg-gray-100 w-150 rounded-lg h-12 text-gray-800 px-4 outline-none border border-amber-300 focus:ring-1 focus:ring-amber-400' placeholder='Confirm Password' value={cpassword} type='password' onChange={(e) => setcPassword(e.target.value)}></input>
        </div>

        <div className='pl-85 pt-2 hover:cursor-pointer ml-40'><b><Link to="/">Login.</Link></b> perhaps?</div>

        <div id="result" className='text-amber-300'></div>

        <button type="submit" className='mt-10 w-50 font-serif'>
          Submit
        </button>
      </form>
    </>
  )
}

export default Signup;
