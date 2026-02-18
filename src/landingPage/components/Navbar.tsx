

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navItems = [
    {name: 'Home', href: '/'},
    {name: 'Marketplace', href: '/products'},
    {name: 'Sell Products', href: '/farmer'},
    {name: 'About', href: '/about'},
    {name: 'Contact', href: '/contact'},
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="border-b bg-green-100 sticky top-0 z-50  h-20">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center w-full">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-700">
          ASWAMITHRA
        </Link>

        {/* Laptop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-lg font-medium hover:text-green-600">
              {item.name}
            </Link>
          ))}

          
        </div>

   
    

   

        {/* login button 
         */}
         <Button className="bg-green-600 active:scale-105 hover:scale-95">Login</Button>
                 {/* mobile dropdown */}
<div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'}</button>
    </div>
          {/* mobile menu */}
          {isOpen && (
            <div className="absolute top-20 flex flex-col space-y-5 left-0 w-full bg-white p-6">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-lg font-medium hover:text-green-600" onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </div>
          )}
          
      </nav>
    </header>
  );
}