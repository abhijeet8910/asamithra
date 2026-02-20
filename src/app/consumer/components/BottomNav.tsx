"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, ShoppingCart, User } from "lucide-react";

const navItems = [
  { name: "Home", href: "/consumer", icon: Home },
  { name: "Orders", href: "/consumer/orders", icon: Package },
  { name: "Cart", href: "/consumer/cart", icon: ShoppingCart },
  { name: "Profile", href: "/consumer/profile", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="bg-white border-t shadow-lg flex justify-around py-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center text-xs ${
              isActive ? "text-green-600" : "text-gray-500"
            }`}
          >
            <Icon size={22} />
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}