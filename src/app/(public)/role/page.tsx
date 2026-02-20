import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:mt-10 mt-20">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1620200423727-8127f75d7f53?w=1600')",
        }}
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/70 -z-10" />

      <main className="max-w-5xl w-full">
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Choose Your Buying Type
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Whether you’re shopping for your home or buying in bulk for your business,
            we connect you directly with trusted farmers.
          </p>
        </div>

        {/* 🔹 items-stretch ensures equal height */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* Customer Card */}
          <Link href="/products" className="h-full">
            <div className="h-full flex flex-col group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white hover:bg-white hover:text-black transition duration-300 cursor-pointer shadow-xl">
              <div className="text-4xl mb-4">🛒</div>
              <h2 className="text-2xl font-semibold">Individual Customer</h2>
              <p className="mt-4 text-sm leading-relaxed grow">
                Buy fresh fruits, vegetables, and grains for your home.
                Enjoy farm-fresh quality, better prices, and direct sourcing
                from local farmers.
              </p>
              <div className="mt-6 font-medium">
                Shop for Home →
              </div>
            </div>
          </Link>

          {/* Business Buyer Card */}
          <Link href="/products" className="h-full">
            <div className="h-full flex flex-col group bg-green-700/80 backdrop-blur-md border border-green-400/30 rounded-2xl p-8 text-white hover:bg-white hover:text-black transition duration-300 cursor-pointer shadow-xl">
              <div className="text-4xl mb-4">🏪</div>
              <h2 className="text-2xl font-semibold">Business Buyer</h2>
              <p className="mt-4 text-sm leading-relaxed grow">
                Purchase farm products in bulk for restaurants, grocery stores,
                or food businesses. Get consistent supply, competitive bulk pricing,
                and direct farmer partnerships.
              </p>
              <div className="mt-6 font-medium">
                Buy in Bulk →
              </div>
            </div>
          </Link>

        </div>
      </main>
    </section>
  );
};

export default page;