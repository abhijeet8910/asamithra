"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function FarmerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // ✅ Auto close sidebar on route change (professional UX)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-green-700 text-white
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300
          md:relative md:translate-x-0 md:flex
        `}
      >
        <Sidebar closeSidebar={() => setIsOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Right Section */}
      <div className="flex flex-col flex-1">

        {/* Topbar */}
        <Topbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>

      </div>
    </div>
  );
}