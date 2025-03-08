"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function ProductSlider() {
  const products = [
    {
      title: "Dry Fruits and Milk Products",
      image:
        "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
      link : "/home/dryfruits"
    
      },
    {
      title: "Dairy, Bread, and Eggs",
      image:
        "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link:'/home/category/Dairy, Bread & Eggs'
    },
    {
      title: "Atta, Rice, Oil and Dals",
      image:
        "https://images.pexels.com/photos/7421198/pexels-photo-7421198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: '/home/category/Atta, Rice, Oil & Dals'
    },
    {
      title: "Meat, Fish and Eggs",
      image:
        "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800",
      link:'/home/category/Meats, Fish & Eggs'
    },
    {
      title: "Breakfast and Sauces",
      image:
        "https://images.pexels.com/photos/1124038/pexels-photo-1124038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/home/category/Breakfast & Sauces"
      
    },
    {
      title: "Biscuits",
      image:
        "https://plus.unsplash.com/premium_photo-1667621221004-e344ae82ad7e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link:"/home/category/Biscuits"
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
              <Link to={product.link}>
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={product.image}
                  alt={product.title}
                />
              </Link>
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



