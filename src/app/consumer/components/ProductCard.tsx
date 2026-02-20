"use client";

type Product = {
  id: string;
  name: string;
  farmer: string;
  location: string;
  category: string;
  price: number;
  marketPrice: number;
  stock: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(
    ((product.marketPrice - product.price) / product.marketPrice) * 100
  );

  return (
    <div className="bg-white/50 rounded-xl shadow-sm hover:shadow-md transition p-3">

      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-28 w-full object-cover rounded-lg"
        />

        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-2 space-y-1">

        <h3 className="text-sm font-semibold line-clamp-1">
          {product.name}
        </h3>

        <p className="text-xs text-gray-500">
          {product.farmer} • {product.location}
        </p>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">
            ₹{product.price}
          </span>
          <span className="text-xs text-gray-400 line-through">
            ₹{product.marketPrice}
          </span>
        </div>

        {/* Stock */}
        <p
          className={`text-xs ${
            product.stock < 50 ? "text-red-500" : "text-gray-500"
          }`}
        >
          {product.stock} in stock
        </p>

        {/* Add Button */}
        <button className="w-full mt-2 bg-green-600 text-white text-xs py-1.5 rounded-full hover:bg-green-700 transition">
          Add
        </button>

      </div>
    </div>
  );
}