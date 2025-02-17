"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

export default function ProductSlider2() {
  const products = [
    {
      title: "Tea, Coffee and More",
      image:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Ice Creams and More",
      image:
        "https://images.pexels.com/photos/161420/ice-cream-cone-melting-hot-ice-cream-scoop-161420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Frozen Foods",
      image:
        "https://img.freepik.com/free-photo/top-view-raw-fish-slices-with-ice-wood-board-table_179666-46565.jpg?t=st=1739810055~exp=1739813655~hmac=f2a46dc20c978bc72945783a86ddca76d776f904f59601e7247c3ab19ed18973&w=1800",
    },
    {
      title: "Sweet Cravings",
      image:
        "https://images.pexels.com/photos/1906435/pexels-photo-1906435.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Cold Drinks and Juices",
      image:
        "https://images.pexels.com/photos/1662238/pexels-photo-1662238.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Munchies",
      image:
        "https://images.pexels.com/photos/7196444/pexels-photo-7196444.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 3900 }}
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