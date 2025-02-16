export default function ProductCard2() {
  const bgImage = 'url(https://images.pexels.com/photos/459277/pexels-photo-459277.jpeg?auto=compress&cs=tinysrgb&w=800)'
  return (
    <div className="w-60 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg shadow-2xl shadow-gray-500/20 dark:bg-gray-800/20 dark:border-gray-700/30 dark:shadow-gray-900/30 hover:shadow-3xl hover:shadow-gray-500/30 transition-all duration-300" style={{backgroundImage:bgImage}}>
      <a href="/">
        <img
          className="rounded-t-lg h-60 w-60 rounded-b-lg"
          src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-3xl font-semibold tracking-tight text-white dark:text-white text-center mb-4">
            Fruits and Vegetables
          </h5>
        </a>
        
      </div>
    </div>
  );
}