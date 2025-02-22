import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/main/product/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching product details:", err));
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!product || product.error) return <div className="text-center mt-10">Product Not Found</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img src={product.imgPath} alt={product.productName} className="w-full h-64 object-contain" />
      <h1 className="text-2xl font-bold mt-4">{product.productName}</h1>
      <p className="text-lg text-gray-700 mt-2">Price: ₹{product.price}</p>
      <button className="mt-4 bg-[#F9429E] text-white py-2 px-4 rounded hover:bg-[#F400A1]">
        Buy Now
      </button>
    </div>
  );
}
