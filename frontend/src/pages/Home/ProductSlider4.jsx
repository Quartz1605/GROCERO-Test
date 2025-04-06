import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductSlider4 = () => {
  const [products, setProducts] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products?category=Fruits%20%26%20Vegetables");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Custom navigation buttons */}
      <div
        ref={prevRef}
        className="swiper-button-prev !text-black z-10"
      ></div>
      <div
        ref={nextRef}
        className="swiper-button-next !text-black z-10"
      ></div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        loop={true}
        slidesPerView={7}
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
            <div className="bg-white shadow-lg rounded-lg p-3 text-center border border-gray-200 hover:shadow-xl transition w-[150px] hover:cursor-pointer">
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
  );
};



  

  

  










export default ProductSlider4