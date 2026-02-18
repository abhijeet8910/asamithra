import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-linear-to-br from-gray-300 via-green-200 to-green-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div className="">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Buy Fresh Products <br /> Direct From Farmers
          </h1>

          <p className="leading-relaxed  mt-6 text-gray-600 text-lg ">
            Save money and support farmers by purchasing directly
            from local producers near you.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/products">
              <Button size="lg">Shop Products</Button>
            </Link>

            <Link href="/farmer">
              <Button size="lg" variant="outline">
                Sell Products
              </Button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1761839256951-10c4468c3621?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MjJ8fGFncmljdWx0dXJlfGVufDB8fDB8fHww"
          alt="Farmers"
          className="rounded-xl shadow-lg w-full h-105 object-cover"
        />
      </div>
    </section>
  );
}