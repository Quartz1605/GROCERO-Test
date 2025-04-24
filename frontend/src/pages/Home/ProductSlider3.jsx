"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export default function ProductSlider3() {
  const navigate = useNavigate();
  const products = [
    {
      id: "boat-Power-Bank",
      name: "boAt Power Bank",
      discount: "60%",
      originalPrice: "1999",
      discountedPrice: "1199",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqpqdZrxO6szjX2R9gAzeAyMqUbx1p6sTQ7Q&s",
      alt: "Power Bank",
    },
    {
      id: "Fast-Charging-Adapter",
      name: "Fast Charging Adapter",
      discount: "50%",
      originalPrice: "999",
      discountedPrice: "499",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNwLWokDmX5x9K4Y7hACGzITNhznrNt9YMIA&s",
      alt: "Charger",
    },
    {
      id: "USB-C-to-A",
      name: "USB-C to USB-A Cable",
      discount: "30%",
      originalPrice: "299",
      discountedPrice: "209",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbG1SB57mb12GamI0ujzuzcThjrdatOUInA&s",
      alt: "USB Cable",
    },
    {
      id: "Wirless-Charging-pad",
      name: "Wireless Charging Pad",
      discount: "40%",
      originalPrice: "1499",
      discountedPrice: "899",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5r9UoFYqCZpbt9SDGYKu5GpXhiAEiTz1CA&s",
      alt: "Wireless Charger",
    },
    {
      id: "Multi-Port-USB-hub",
      name: "Multi-Port USB Hub",
      discount: "25%",
      originalPrice: "799",
      discountedPrice: "599",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTzXaMHfF4Lq_-N93gKkBf9Jb5lkMNeHgLQ&s",
      alt: "USB Hub",
    },
    {
      id: "LED-Desk-Lamp",
      name: "LED Desk Lamp",
      discount: "20%",
      originalPrice: "1299",
      discountedPrice: "1039",
      image:
        "https://images.pexels.com/photos/6913319/pexels-photo-6913319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Desk Lamp",
    },
    {
      id: "Portable-Bluetooth-Speaker",
      name: "Portable Bluetooth Speaker",
      discount: "35%",
      originalPrice: "2999",
      discountedPrice: "1949",
      image:
        "https://images.pexels.com/photos/4132534/pexels-photo-4132534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Bluetooth Speaker",
    },
    {
      id: "Torch-Light",
      name: "Torch Light",

      discount: "10%",
      originalPrice: "899",
      discountedPrice: "809",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-LyR_HvE40mhGf_I4NqgT277vjDT5XE_Hw&s",
      alt: "Emergency Light",
    },
    {
      id: "Extension-Cord-with-Surge-Protection",
      name: "Extension Cord with Surge Protection",
      discount: "30%",
      originalPrice: "499",
      discountedPrice: "349",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRe08JBSpsZE3Ei6QF74WaMs2wMjVcPjflg&s",
      alt: "Extension Cord",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={25}
        slidesPerView={5}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="w-60 h-76 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden">
              <div className="relative h-2/5">
                {/* Discount Badge */}
                <span className="absolute top-2 left-2 bg-[#F9429E] text-white px-2 py-1 rounded-lg text-[12px] font-bold z-10 shadow-md">
                  {product.discount} OFF
                </span>

               

                {/* Product Image with Frame */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <img
                    className="max-w-full max-h-full object-contain p-2"
                    src={product.image}
                    alt={product.alt}
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4 h-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-800 text-xl mb-2 line-clamp-2 hover:text-black transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-[#F9429E]">
                      ₹{product.discountedPrice}
                    </span>
                    <span className="text-gray-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                </div>
                <button
                  className="w-full bg-white border-2 border-[#F9429E] text-[#F9429E] py-2 rounded hover:bg-[#F9429E] hover:text-white transition-colors hover:cursor-pointer"
                  onClick={() => navigate(`/home/product/${product.id}`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
