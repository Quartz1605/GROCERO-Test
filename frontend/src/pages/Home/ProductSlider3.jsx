"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

export default function ProductSlider() {
  const products = [
    {
      name: "boAt 10000mAh Power Bank",
      discount: "60%",
      originalPrice: "1999",
      discountedPrice: "1199",
      image: "",
      alt: "Power Bank",
    },
    {
      name: "Fast Charging Adapter",
      discount: "50%",
      originalPrice: "999",
      discountedPrice: "499",
      image: "",
      alt: "Charger",
    },
    {
      name: "USB-C to USB-A Cable",
      discount: "30%",
      originalPrice: "299",
      discountedPrice: "209",
      image: "",
      alt: "USB Cable",
    },
    {
      name: "Wireless Charging Pad",
      discount: "40%",
      originalPrice: "1499",
      discountedPrice: "899",
      image: "",
      alt: "Wireless Charger",
    },
    {
      name: "Multi-Port USB Hub",
      discount: "25%",
      originalPrice: "799",
      discountedPrice: "599",
      image: "",
      alt: "USB Hub",
    },
    {
      name: "LED Desk Lamp",
      discount: "20%",
      originalPrice: "1299",
      discountedPrice: "1039",
      image: "",
      alt: "Desk Lamp",
    },
    {
      name: "Portable Bluetooth Speaker",
      discount: "35%",
      originalPrice: "2999",
      discountedPrice: "1949",
      image: "",
      alt: "Bluetooth Speaker",
    },
    {
      name: "Smart Plug with Energy Monitoring",
      discount: "15%",
      originalPrice: "1499",
      discountedPrice: "1274",
      image: "",
      alt: "Smart Plug",
    },
    {
      name: "Rechargeable Emergency Light",
      discount: "10%",
      originalPrice: "899",
      discountedPrice: "809",
      image: "",
      alt: "Emergency Light",
    },
    {
      name: "Extension Cord with Surge Protection",
      discount: "30%",
      originalPrice: "499",
      discountedPrice: "349",
      image: "",
      alt: "Extension Cord",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
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
            <div className="w-64 h-96 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative">
                {/* Discount Badge */}
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                  {product.discount} OFF
                </span>

                {/* Wishlist Button */}
                <button className="absolute top-2 right-2 text-gray-600">
                  F
                </button>

                {/* Product Image */}
                <img
                  className="w-full h-48 object-contain p-4"
                  src={product.image}
                  alt={product.name}
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-red-500">
                    ₹{product.discountedPrice}
                  </span>
                  <span className="text-gray-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
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
