import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type Product = {
  id: string;
  name: string;
  farmer: string;
  location: string;
  price: number;
  marketPrice: number;
  stock: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const savings = product.marketPrice - product.price;

  return (
    <Card className="overflow-hidden hover:shadow-xl transition bg-green-50 p-0">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />

        {/* Savings Badge */}
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
          Save ₹{savings}
        </span>
      </div>

      {/* Info */}
      <CardContent className="p-4  space-y-2">
        <h3 className="font-semibold text-lg">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500">
          Farmer: {product.farmer}
        </p>

        <p className="text-sm text-gray-500">
          📍 {product.location}
        </p>

        <div>
          <span className="text-green-700 font-bold">
            ₹{product.price}/kg
          </span>
          <span className="line-through text-gray-400 ml-2">
            ₹{product.marketPrice}
          </span>
        </div>

        <p className="text-sm text-gray-600">
          Stock: {product.stock} kg available
        </p>
      </CardContent>

      {/* Actions */}
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="w-full">View</Button>
        <Button variant="outline" className="w-full">
          Add Cart
        </Button>
      </CardFooter>
    </Card>
  );
}