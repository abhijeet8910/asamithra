"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sideBarItems = [
  { name: "Dashboard", href: "/farmer/dashboard" },
  { name: "My Products", href: "/farmer/products" },
  { name: "Add Product", href: "/farmer/add-product" },
  { name: "Orders", href: "/farmer/orders" },
  { name: "Earnings", href: "/farmer/earnings" },
  { name: "Settings", href: "/farmer/settings" },
];

export default function Sidebar({
  closeSidebar,
}: {
  closeSidebar: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">Farmer Panel</h2>

      <nav className="space-y-2">
        {sideBarItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeSidebar}
              className={`
                block px-4 py-2 rounded-md transition
                ${isActive 
                  ? "bg-green-600 font-semibold" 
                  : "hover:bg-green-600"
                }
              `}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}