

const ProductCard = ({ product }: { product: { id: string; name: string; price: number; image: string } }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition transform hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 mt-2">${product.price}</p>
        <button className="w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;