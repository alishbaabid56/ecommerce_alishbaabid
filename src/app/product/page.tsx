import Link from "next/link";

const ProductHomePage = () => {
  const products = [
    { id: 1, name: "Miss Rose Lipstick", price: 499, image: "/post2.png", rating: 4, salePrice: 399 },
    { id: 2, name: "Miss Rose Mascara", price: 699, image: "/post3.png", rating: 5, salePrice: 599 },
    { id: 3, name: "Miss Rose Foundation", price: 899, image: "/post1.png", rating: 3, salePrice: 799 },
    { id: 4, name: "Miss Rose Concealer", price: 450, image: "/post4.png", rating: 4, salePrice: 299 },
    { id: 5, name: "Miss Rose Eyeliner", price: 350, image: "/post5.png", rating: 5, salePrice: 299 },
    { id: 6, name: "Miss Rose Blush", price: 499, image: "/post6.png", rating: 4, salePrice: 450 },
    { id: 7, name: "Miss Rose Lip Gloss", price: 399, image: "/post7.png", rating: 4, salePrice: 349 },
    { id: 8, name: "Miss Rose Eyeshadow", price: 799, image: "/post8.png", rating: 5, salePrice: 699 },
    { id: 9, name: "Miss Rose Highlighter", price: 499, image: "/post9.png", rating: 5, salePrice: 450 },
    { id: 10, name: "Miss Rose Setting Spray", price: 399, image: "/post10.png", rating: 4, salePrice: 350 },
    { id: 11, name: "Miss Rose Nail Polish", price: 250, image: "/post11.png", rating: 3, salePrice: 199 },
    { id: 12, name: "Miss Rose Contour Kit", price: 999, image: "/post12.png", rating: 4, salePrice: 899 },
  ];
 
  const renderStars = (rating: number) => {
    const fullStars = Array(rating).fill("★");
    const emptyStars = Array(5 - rating).fill("☆");
    return [...fullStars, ...emptyStars].join("");
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">SHOP HERE!!!!!!!!!</h2>
      <p className="text-center text-gray-700 mb-10">
        Shop 100% Authentic Miss Rose makeup products from Official Miss Rose Cosmetics Store in Pakistan.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-start">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="bg-white border rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Sale
                </span>
              </div>
             
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                <div className="text-yellow-500 text-lg mb-2">{renderStars(product.rating)}</div>
                <p className="text-gray-500 line-through">Rs. {product.price}</p>
                <p className="text-black font-semibold text-lg">Rs. {product.salePrice}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductHomePage;