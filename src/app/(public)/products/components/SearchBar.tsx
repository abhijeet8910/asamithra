"use client";

import { Input } from "@/components/ui/input";

export default function SearchBar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (v: string) => void;
}) {
  return (
    
      <Input
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-auto lg:w-full border border-white/30 bg-white/60 backdrop-blur-md shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    />

    
    
    
  );
}