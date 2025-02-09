
import { useState } from 'react-dom'
import { Link } from 'react-router-dom';

function Signup() {
  


  
  
  return (
    <>
      <form className='bg-black text-amber-50 max-w-2xl w-2xl h-230 rounded-4xl flex justify-center flex-col items-center'>
        
        <a href='https://en.wikipedia.org/wiki/Polar_bear'><img src='https://cdn-icons-png.flaticon.com/128/9112/9112448.png' className='h-15 hover:cursor-pointer'></img></a>
        
        
        
        <div className='text-5xl text-orange-300 font-serif font-extrabold'>
          Sign Up
        </div>

        <div className='mt-2 text-2xl text-violet-600 font-serif font-bold'>I'm about to make your heart race !</div>

        <div className='pr-90 mt-15'>Enter Name:</div>
        <input className='bg-amber-200 text-black w-115 rounded-lg h-8 pl-2 outline-none mt-2' placeholder='Full Name'>
        </input>
        
        
        <div className='pr-85 mt-8'>Phone Number :</div>
        <input className='bg-amber-200 text-black w-115 rounded-lg h-8 pl-2 outline-none mt-2' placeholder='Phone Number'>
        </input>

        <div className='pr-87 mt-8'>Email address :</div>
        <input className='bg-amber-200 text-black w-115 rounded-lg h-8 pl-2 outline-none mt-2' type='email' placeholder='Email address'>
        </input>

        <div className='pr-88 mt-8'>Set Password :</div>
        <input className='bg-amber-200 text-black w-115 rounded-lg h-8 pl-2 outline-none mt-2' type='text' placeholder='Password' >
        </input>

        <div className='pr-80 mt-8'>Confirm Password :</div>
        <input className='bg-amber-200 text-black w-115 rounded-lg h-8 pl-2 outline-none mt-2' type='password' placeholder='Confirm Password'>
        </input>

        <div className='pl-85 pt-2 hover:cursor-pointer'><b><Link to="/">Login.</Link></b> perhaps?</div>

        <button className='mt-10 w-50 font-serif'>
          Submit
        </button>





      

        
        



        

      </form>
    </>
  )
}

export default Signup
