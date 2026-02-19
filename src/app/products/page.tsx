'use client'
import React from 'react'
import SearchBar from './components/SearchBar'
import { DialogDemo } from './components/Filters'
import ProductCard from './components/ProductCard'
import { products } from './components/Products'


const Page = () => {
  const [search, setSearch] = React.useState('')

  const [filters, setFilters] = React.useState({
    category: '',
    location: '',
    maxPrice: '',
  });

  const filteredProducts = products.filter((product: any) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      !filters.category || product.category === filters.category;

    const matchLocation =
      !filters.location ||
      product.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());

    const matchPrice =
      !filters.maxPrice ||
      product.price <= Number(filters.maxPrice);

    return (
      matchSearch &&
      matchCategory &&
      matchLocation &&
      matchPrice
    );
  });

  return (
    <section className="relative min-h-screen">
      
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1620200423727-8127f75d7f53?w=1600')",
        }}
      />
  
      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/60 -z-10" />
  
      {/* Scrollable Content */}
      <main className="relative max-w-7xl mx-auto px-6 py-10">
        
        {/* Header */}
        <div className="bg-white/30 backdrop-blur-md sticky top-20 z-20 mb-20 p-4 rounded-xl shadow-lg">
  
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="flex-1">
              <SearchBar search={search} setSearch={setSearch} />
            </div>
  
            <DialogDemo filters={filters} setFilters={setFilters} />
          </div>
        </div>
  
        {/* Product Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white">
            Fresh Products
          </h2>
  
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
  
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-white text-3xl">
              No products found.
            </div>
          )}
        </div>
  
      </main>
    </section>
  );
};

export default Page;