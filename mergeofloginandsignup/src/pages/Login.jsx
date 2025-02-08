

import { Link } from 'react-router-dom'

function Login() {
  

  return (
    <>
      <form className='bg-black text-amber-50 max-w-2xl w-2xl h-165 rounded-4xl flex justify-center flex-col items-center'>
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
        <input className='bg-amber-100 mt-8 w-115 rounded-lg h-8 text-black p-4 outline-none' placeholder='Email address' type='email'></input>
        <input className='bg-amber-200 mt-1 w-115 rounded-lg h-8 p-4 text-black outline-none' placeholder='Password' type='password'></input>

        <div className='flex gap-39 pt-1'>
            <div>
              New user? <Link to="/signup">Sign Up.</Link>
            </div>
            
            <div className=''>forgot your password?</div>
            
        </div>

        
        <button className='text-white mt-7 w-80 bg-amber-400 hover:bg-amber-500'>Sign in</button>





      </form>
    </>
  )
}

export default Login
