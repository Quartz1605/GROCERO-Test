import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import groLogo from './assets/groceroLogo.png'
import pfp from './assets/pfp.jpg'
import cart from './assets/cart.png'
import searchIcon from './assets/searchIcon.png'
import banner from './assets/banner.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <head>
        <link href="/styles.css" rel="stylesheet"></link>
      </head>

      <body className='bg-white relative flex flex-col gap-0 p-0 m-0 justify-start items-start'>
        <div className='flex flex-row justify-between absolute top-0 left-0 right-0 h-20 items-center'>
          {/* Navigation Bar */}
          <img src={groLogo} className='h-15 ml-5'></img>

          <div className='flex flex-row flex-grow max-w-6xl ml-5 mr-5 h-10 relative items-center'>
            <img className='absolute left-0 h-12' src={searchIcon}></img>
            <input className='bg-white text-black h-10 pl-12 flex-grow' placeholder='Looking For?'></input>
          </div>

          <div className='flex flex-row justify-between'>
            {/* Pic and Cart */}
              <img className='h-10 rounded-full ml-5' src={pfp} ></img>
              <img className='h-10 ml-5 mr-5' src={cart}></img>
          </div>

        </div>

        <div className='flex justify-center items-center max-w-7xl h-20 ml-20 mr-20 mt-50 mb-0'>
          <img className='object-contain' src={banner}></img>
        </div>

        {/* Grocery and Kitchen */}
        <div className='flex flex-col justify-start mt-25'>
          <p className='text-black text-2xl font-bold'>Grocery and Kitchen</p>

          <div className='flex flex-row gap-6'>
            
            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Fruits and Vegetables</p>
            </div>

            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Dairy, Bread, and Eggs</p>
            </div>

            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Atta, Rice, Oil and Dals</p>
            </div>

            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Meat, Fish and Eggs</p>
            </div>

            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Masala and Dry Fruits</p>
            </div>

            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Breakfast and Sauces</p>
            </div>

            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Packaged Food</p>
            </div>

          </div>

        </div>

        {/*Snacks and Drinks*/}
        <div className='flex flex-col justify-start mt-15'>
          <p className='text-black text-2xl font-bold'>Snacks and Drinks</p>

          <div className='flex flex-row gap-6'>
            
            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Zepto Cafe</p>
            </div>

            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Tea, Coffee and More</p>
            </div>

            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Ice Creams and More</p>
            </div>

            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Frozen Foods</p>
            </div>

            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Sweet Cravings</p>
            </div>

            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Cold Drinks and Juices</p>
            </div>

            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Munchies</p>
            </div>

            <div className='flex flex-col gap-3 mt-4 items-center'>
              <img className='h-32 object-contain' src={pfp}></img>
              <p className='text-black text-2xl font-bold max-w-40 text-center break-words whitespace-normal'>Biscuits and Cookies</p>
            </div>

          </div>

        </div>

        

      </body>

    </>
  )
}

export default App
