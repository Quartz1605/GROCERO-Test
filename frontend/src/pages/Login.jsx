import key from '../assets/key.png'
import { IoPerson } from "../assets/react-icons/io5";
import { useState } from 'react'

import { Link } from 'react-router-dom'

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  function handleSubmit(event){
    event.preventDefault();
  }
  
  
  return (
    <>
      <form className='bg-black text-amber-50 max-w-2xl w-2xl h-165 rounded-4xl flex justify-center flex-col items-center' onSubmit={handleSubmit}>
        <div className='pb-0'>
          <img src="https://cdn-icons-png.flaticon.com/128/18438/18438779.png"></img>
        </div>

        <div className='text-6xl mb-14 pt-0 font-extrabold text-violet-600'>
          GRÓCERÓ
        </div>

        <div className='text-4xl font-bold'>
          Sign in to your account
        </div>
        <div className='text-xl text-amber-400'>
          or start a subscription
        </div>
        
        <div className="flex items-center p-2 relative">
          <IoPerson class="text-amber-400 w-7 h-7 mr-2 object-contain absolute left-5 top-1/2 transform -translate-y-1/2 mt-3"></IoPerson>
          <input className='pl-12 bg-gray-100 mt-6 w-150 rounded-lg h-12 text-gray-800 px-4 outline-none border border-amber-300 focus:ring-1 focus:ring-amber-400' type='email' onChange={(e) => {setEmail(e.target.value)}} placeholder='Email'></input>
        </div>

        <div className="flex items-center p-2 relative">
          <img src={key} class="text-amber-400 w-7 h-7 mr-2 object-contain absolute left-5 top-1/2 transform -translate-y-1/2 mt-3"></img>
          <input type='password' className='pl-12 bg-gray-100 mt-6 w-150 rounded-lg h-12 text-gray-800 px-4 outline-none border border-amber-300 focus:ring-1 focus:ring-amber-400' onChange={(e) => {setPassword(e.target.value)}} placeholder='Password'></input>
        </div>


        <div className='flex gap-74 pt-1'>
            <div>
              New user? <Link to="/signup">Sign Up.</Link>
            </div>
            
            <div className='hover:cursor-pointer hover:underline'>forgot your password?</div>
            
        </div>

        
        <button className='mt-7 w-80 bg-amber-400 hover:bg-amber-400 focus:ring-1 focus:ring-amber-500'>Sign in</button>





      </form>
    </>
  )
}

export default Login
