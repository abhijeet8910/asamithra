import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

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
  const savings = product.marketPrice - product.price;

  return (
    <Card className="group overflow-hidden rounded-2xl border border-green-300 bg-white/70 backdrop-blur-md shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-0">
      
      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

        {/* Savings Badge */}
        <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
          Save ₹{savings}
        </span>

        {/* Stock Badge */}
        <span className="absolute bottom-3 right-3 bg-white/90 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full shadow">
          {product.stock}kg left
        </span>
      </div>

      {/* Content Section */}
      <CardContent className="p-5 space-y-2">

        <h3 className="font-semibold text-lg text-gray-800 group-hover:text-emerald-700 transition">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500">
          {product.farmer} • {product.location}
        </p>

        <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide">
          {product.category}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3 pt-2">
          <span className="text-emerald-700 font-bold text-xl">
            ₹{product.price}
          </span>

          <span className="line-through text-red-700 text-sm">
            ₹{product.marketPrice}
          </span>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-5 pt-0 flex gap-3">
      <Link href={`/products/${product.id}`} className="flex-1">
  <Button
    variant="outline"
    className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition"
  >
    View
  </Button>
</Link>

        <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white transition">
          Add Cart
        </Button>
      </CardFooter>
    </Card>
  );
}