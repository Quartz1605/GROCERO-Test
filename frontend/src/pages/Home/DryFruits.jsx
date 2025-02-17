export default function DryFruits(


) {
  const bgImage = `url(https://images.pexels.com/photos/459277/pexels-photo-459277.jpeg?auto=compress&cs=tinysrgb&w=800)`;
  return (
    <div
      className="w-63 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg shadow-2xl shadow-gray-500/20 dark:bg-gray-800/20 dark:border-gray-700/30 dark:shadow-gray-900/30 hover:shadow-3xl hover:shadow-gray-500/30 transition-all duration-300"
      style={{ backgroundImage: bgImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <a href="/">
        <img
          className="w-full h-42 object-cover rounded-t-lg" // Fixed height and object-cover
          src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-3">
        <a href="/">
          <h5 className="text-3xl font-semibold tracking-tight text-white dark:text-white text-center mb-3">
            Dry Fruits and Milk Products
          </h5>
        </a>
      </div>
    </div>
  );
}