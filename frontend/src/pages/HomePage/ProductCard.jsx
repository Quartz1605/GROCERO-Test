export default function ProductCard() {
  return (
      <div className="w-60  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
              <img className="p-8 rounded-t-lg h-50 w-60" src="https://images.pexels.com/photos/2611810/pexels-photo-2611810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product_image1" />
          </a>
          <div className="px-5 pb-5">
              <a href="/">
                  <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                      Fruits and Vegetables
                  </h5>
              </a>
              
                  
                  
              </div>
              
          
      </div>
  );
}