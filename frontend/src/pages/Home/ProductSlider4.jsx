import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductSlider4 = () => {
  const [products, setProducts] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products?category=Fruits%20%26%20Vegetables"
        );
        const data = await response.json();
        setProducts(data);
        setSwiperReady(true); 
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto">
     
      <div
        ref={prevRef}
        className="swiper-button-prev text-black z-10 absolute left-0 top-1/2 transform -translate-y-1/2"
      />
      <div
        ref={nextRef}
        className="swiper-button-next text-black z-10 absolute right-0 top-1/2 transform -translate-y-1/2"
      />

      {swiperReady && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={7}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 7 },
          }}
        >
          {products.map(([name, price, status, image_path, groRates, id], index) => (
            <SwiperSlide key={index} className="p-2">
            <div className="bg-white shadow-lg rounded-lg p-3 text-center border border-gray-200 hover:shadow-xl transition w-[175px] h-[260px] hover:cursor-pointer flex flex-col justify-between">
              
              
              <div>
                <img
                  src={image_path}
                  alt={name}
                  className="w-full h-24 object-cover rounded-md"
                />
                <h3 className="text-[13.5px] font-semibold text-gray-800 mt-2">
                  {name}
                </h3>
                <div className="flex items-center justify-center mt-1 space-x-2 h-[60px]">
                  <span className="text-md font-bold text-green-600">{groRates}</span>
                  <span className="text-xs text-gray-500 line-through">{price}</span>
                </div>
              </div>
          
             
              <button className="text-sm bg-white text-[#F9429E] px-3 py-1 rounded hover:bg-[#F9429E] hover:text-white hover:cursor-pointer transition border-2 border-[#F9429E]">
                Add to cart
              </button>
              
            </div>
          </SwiperSlide>
          
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProductSlider4;
