"use client";

import { Search, MapPin } from "lucide-react";

export default function Header() {
  return (
    <div className="sticky top-0 z-40 bg-white shadow-sm px-4 py-3">

      {/* Location */}
      <div className="flex items-center gap-2 text-sm font-medium">
        <MapPin size={16} className="text-green-600" />
        Delivering to Home
      </div>

      {/* Search Bar */}
      <div className="mt-2 relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search vegetables, fruits..."
          className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

    </div>
  );
}