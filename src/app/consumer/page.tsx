// import ProductCard from "./components/ProductCard";
// import { products } from "../(public)/products/components/Products";

// export default function HomePage() {
//   return (
//     <div className="p-4 space-y-6">

//       <h2 className="text-lg font-semibold">
//         Fresh Vegetables
//       </h2>

//       <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//         {products.map((item, index) => (
//           <ProductCard key={index} product={item} />
//         ))}
//       </div>

//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { products } from "../(public)/products/components/Products";
import ProductCard from "./components/ProductCard";
import FilterScroll from "./components/FilterScroll";

export default function ConsumerPage() {
  const [activeFilters, setActiveFilters] = useState({
    category: "",
    location: "",
    maxPrice: "",
    inStock: false,
  });

  const filteredProducts = products.filter((p) => {
    if (activeFilters.category && p.category !== activeFilters.category)
      return false;

    if (activeFilters.location && p.location !== activeFilters.location)
      return false;

    if (activeFilters.maxPrice && Number(p.price) > Number(activeFilters.maxPrice))
      return false;

    if (activeFilters.inStock && p.stock <= 0)
      return false;

    return true;
  });

  return (
    <div className="pt-14 pb-20">
      <FilterScroll
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />

      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}