"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

export default function ProductSlider() {
  const products = [
    {
      title: "Dry Fruits and Milk Products",
      image:
        "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Harvest Gold - White Bread",
      image:
        "https://images.pexels.com/photos/459277/pexels-photo-459277.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Amul Taaza Homogenised Toned Milk (1 Litre Pack)",
      image:
        "https://images.pexels.com/photos/1174399/pexels-photo-1174399.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Mother Dairy Classic Pouch Curd",
      image:
        "https://images.pexels.com/photos/167051/pexels-photo-167051.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Harvest Gold 100% Atta Whole Wheat Bread",
      image:
        "https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Amul Cow Fresh Milk (500 ml)",
      image:
        "https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="w-64 h-80 bg-black backdrop-blur-lg border border-white/30 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
              <a href="/">
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={product.image}
                  alt={product.title}
                />
              </a>
              <div className="px-4 py-2 flex-grow flex items-center">
                <h5 className="text-sm font-semibold text-white text-center line-clamp-2 leading-tight">
                  {product.title}
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


