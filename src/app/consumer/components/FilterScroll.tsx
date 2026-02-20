"use client";

interface Props {
  activeFilters: any;
  setActiveFilters: (filters: any) => void;
}

export default function FilterScroll({
  activeFilters,
  setActiveFilters,
}: Props) {
  const toggleFilter = (key: string, value: any) => {
    setActiveFilters((prev: any) => ({
      ...prev,
      [key]: prev[key] === value ? "" : value,
    }));
  };

  return (
    <div className="sticky top-14 bg-white/40 z-40 border-b">
      <div className="flex overflow-x-auto gap-3 px-4 py-3 no-scrollbar">

        {/* Category */}
        <button
          onClick={() => toggleFilter("category", "Vegetables")}
          className={`chip ${activeFilters.category === "Vegetables" && "chip-active"}`}
        >
          Vegetables
        </button>

        <button
          onClick={() => toggleFilter("category", "Fruits")}
          className={`chip ${activeFilters.category === "Fruits" && "chip-active"}`}
        >
          Fruits
        </button>

        <button
          onClick={() => toggleFilter("category", "Grains")}
          className={`chip ${activeFilters.category === "Grains" && "chip-active"}`}
        >
          Grains
        </button>

        {/* Price */}
        <button
          onClick={() => toggleFilter("maxPrice", 50)}
          className={`chip ${activeFilters.maxPrice === 50 && "chip-active"}`}
        >
          Under ₹50
        </button>

        {/* Location */}
        <button
          onClick={() => toggleFilter("location", "Hyderabad")}
          className={`chip ${activeFilters.location === "Hyderabad" && "chip-active"}`}
        >
          Hyderabad
        </button>

        {/* In Stock */}
        <button
          onClick={() => toggleFilter("inStock", true)}
          className={`chip ${activeFilters.inStock && "chip-active"}`}
        >
          In Stock
        </button>

        {/* Reset */}
        <button
          onClick={() =>
            setActiveFilters({
              category: "",
              location: "",
              maxPrice: "",
              inStock: false,
            })
          }
          className="chip bg-red-100 text-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}