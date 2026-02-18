import { Button } from "@/components/ui/button";
import Link from "next/link";
import bgImage from "../../../public/hero-farm-DVYICUUK.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <main className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl text-white">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Fresh Products <br />
            Directly From Farmers
          </h1>

          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Discover locally grown fruits, vegetables, and grains.
            Support farmers while enjoying fresh and affordable food.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/products">
              <Button size="lg" className="hover:bg-green-500 hover:scale-95 active:scale-105 hover:text-black px-8">
                Shop Products
              </Button>
            </Link>

            <Link href="/farmer">
              <Button
                size="lg"
                
                className="text-white bg-green-700  hover:bg-white hover:text-black px-8"
              >
                Sell Products
              </Button>
            </Link>
          </div>

        </div>
      </main>
    </section>
  );
}