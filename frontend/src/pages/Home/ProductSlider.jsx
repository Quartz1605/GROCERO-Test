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
      title: "Dairy, Bread, and Eggs",
      image:
        "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Atta, Rice, Oil and Dals",
      image:
        "https://images.pexels.com/photos/7421198/pexels-photo-7421198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Meat, Fish and Eggs",
      image:
        "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Breakfast and Sauces",
      image:
        "https://images.pexels.com/photos/1124038/pexels-photo-1124038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Packaged Foods and More",
      image:
        "https://images.pexels.com/photos/1582482/pexels-photo-1582482.jpeg?auto=compress&cs=tinysrgb&w=800",
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
            <div className="w-64 h-80 bg-[#eeeeee] backdrop-blur-lg border border-white/30 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
              <a href="/">
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={product.image}
                  alt={product.title}
                />
              </a>
              <div className="px-4 py-2 flex-grow flex items-center">
                <h5 className="font-semibold text-black text-center line-clamp-2 leading-tight text-2xl">
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


