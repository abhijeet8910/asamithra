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
              <Button
                size="lg"
                className="hover:bg-green-500 hover:scale-95 active:scale-105 hover:text-black px-8"
              >
                Shop Products
              </Button>
            </Link>

            <Link href="/farmer">
              <Button
                size="lg"
                className="text-white bg-green-700 hover:bg-white hover:text-black px-8"
              >
                Sell Products
              </Button>
            </Link>
          </div>

          {/* Trust Line */}
          <p className="mt-12 text-green-300 font-semibold tracking-wide uppercase text-sm">
            Trusted by 5,000+ customers across India
          </p>

          {/* Trust Cards */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition">
              <p className="text-2xl">🌱</p>
              <p className="mt-2 text-sm font-medium">100% Farm Fresh</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition">
              <p className="text-2xl">🚜</p>
              <p className="mt-2 text-sm font-medium">Direct From Farmers</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition">
              <p className="text-2xl">💰</p>
              <p className="mt-2 text-sm font-medium">Fair Prices</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition">
              <p className="text-2xl">🚚</p>
              <p className="mt-2 text-sm font-medium">Fast Delivery</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}