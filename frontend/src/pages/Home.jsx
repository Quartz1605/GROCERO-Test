import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import groLogo from '../assets/groceroLogo.png'
import pfp from '../assets/pfp.jpg'

import banner from '../assets/banner.jpg'
import { IoPerson, IoSearch } from "../assets/react-icons/io5"
import { GiShoppingCart } from "../assets/react-icons/gi";


import ProductSlider from './Home/ProductSlider';
import ProductSlider2 from './Home/ProductSlider2';


function Home() {

  const { user } = useContext(UserContext)


  return (
    <>

      <head>
        <link href="/styles.css" rel="stylesheet"></link>
      </head>

      <body className='bg-white relative flex flex-col gap-0 p-0 m-0 justify-start items-center'>
        <div className='flex flex-row    justify-between absolute top-0 left-0 right-0 h-20 items-center'>
          {/* Navigation Bar */}
          <img src={groLogo} className='h-15 ml-5'></img>

          <div className="flex items-center p-2 relative w-full">
            <IoSearch className="text-[#F9429E] w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 pl-1.5" />
            <input
              className="pl-10 bg-gray-50 rounded-lg h-12 text-gray-800 px-4 outline-none border border-gray-200 focus:border-[#F9429E] focus:ring-1 focus:ring-[#ffb6c1] transition duration-300 flex-grow"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Looking for?"
              required
            />

            <img className='h-10 rounded-full w-10 ml-5 hover:cursor-pointer' src="https://images.pexels.com/photos/21699301/pexels-photo-21699301/free-photo-of-silhouette-of-man-by-the-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" ></img>
            
            <div className='ml-2 hover:cursor-pointer hover:underline'>
              {user ? user.username : "Guest"} {/* Temperory to show username */}
            </div>
            
            <GiShoppingCart className='text-[#F9429E] h-10.5 w-13 hover:cursor-pointer' />
          </div>

        </div>

        

        <div className='flex-column justify-center items-center max-w-7xl h-20 ml-20 mr-20 mt-25 mb-0 inline-block'>
          <p className='text-center mb-10 text-2xl'>Welcome <b className='text-[#F9429E]'>{user ? user.username:"Guest"}</b> !</p>
          <img className='object-contain' src={banner}></img>
        </div>

        {/* Grocery and Kitchen */}
        <div className='flex flex-col justify-center mt-68 items-center'>
          <p className='text-[#F9429E] text-2xl font-bold text-center pb-8'>Grocery and Kitchen</p>

          <ProductSlider />
          

        </div>

        {/*Snacks and Drinks*/}
        <div className='flex flex-col justify-start mt-15 items-center'>
          <p className='text-[#F9429E] text-2xl font-bold pb-8'>Snacks and Drinks</p>

          

          <ProductSlider2 />

        </div>



      </body>

    </>
  )



}

export default Home