"use client";
import { useState,useEffect,useRef} from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"



const ProductSlider4 = () => {

  const [products,setProducts] = useState([])
  const [showPrev, setShowPrev] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {

    const fetchProducts = async () => {
      try{
        const response = await fetch("http://localhost:5000/api/products?category=Fruits%20%26%20Vegetables")

        const data = await response.json()
        setProducts(data)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchProducts(); 
  },[])

  
  

  return(
    <div className="relative w-full max-w-7xl mx-auto">
      

      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={7}
        loop
        navigation
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
        }}
      >
        {products.map(([name, price, status, image_path,groRates, id], index) => (
          <SwiperSlide key={index} className="p-2">
          <div className="bg-white shadow-lg rounded-lg p-3 text-center border border-gray-200 hover:shadow-xl transition w-[150px]">
            <img
              src={image_path}
              alt={name}
              className="w-full h-24 object-cover rounded-md"
            />
            <h3 className="text-sm font-semibold text-gray-800 mt-2">{name}</h3>
            <div className="flex items-center justify-center mt-1 space-x-2">
              <span className="text-md font-bold text-green-600">{groRates}</span>
              <span className="text-xs text-gray-500 line-through">{price}</span>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  )

  

  

  








}

export default ProductSlider4