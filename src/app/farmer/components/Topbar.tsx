"use client";

import { Menu, X } from "lucide-react";

export default function Topbar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <div className="h-16 shrink-0 bg-white border-b flex items-center justify-between px-4">

      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <h1 className="text-lg font-semibold">
          Farmer Panel
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="hidden sm:block text-sm text-gray-600">
          Welcome, Abhijeet
        </span>

        <img
          src="https://i.pravatar.cc/40"
          className="w-8 h-8 rounded-full"
          alt="profile"
        />
      </div>
    </div>
  );
}