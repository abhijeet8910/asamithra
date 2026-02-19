import { products } from "../components/Products";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params; // ✅ unwrap the promise

  const product = products.find(
    (p) => p.id === id
  );

  if (!product) {
    return (
      <div className="p-10 text-center text-red-600 text-2xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">

        <div className="relative h-96 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500">
            {product.farmer} • {product.location}
          </p>
          <p className="text-emerald-600 font-semibold uppercase">
            {product.category}
          </p>
          <div className="flex items-center gap-3 pt-4">
            <span className="text-2xl font-bold text-emerald-700">
              ₹{product.price}
            </span>
            <span className="line-through text-gray-400">
              ₹{product.marketPrice}
            </span>
          </div>
          <p className="text-sm text-gray-500">
            {product.stock}kg available
          </p>
        </div>

      </div>
    </div>
  );
}