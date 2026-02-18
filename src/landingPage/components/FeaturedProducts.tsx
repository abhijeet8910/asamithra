import { products } from '@/data/Products'
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-green-200">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}