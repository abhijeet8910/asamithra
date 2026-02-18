import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FarmerSection() {
  return (
    <section className="py-20 bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Farmers Can Sell Directly to Customers
          </h2>

          <p className="mt-6 text-green-100">
            List your products, receive orders directly, and earn better
            profits without middlemen. Our platform connects you directly
            with local customers and businesses.
          </p>

          <ul className="mt-6 space-y-2 text-green-100">
            <li>✔ Sell products directly</li>
            <li>✔ Get fair market prices</li>
            <li>✔ Receive fast payments</li>
            <li>✔ Reach more customers</li>
          </ul>

          <Link href="/farmer">
            <Button size="lg" className="mt-8 bg-white text-green-700">
              Start Selling
            </Button>
          </Link>
        </div>

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1620200423727-8127f75d7f53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D"
          alt="Farmer"
          className="rounded-xl shadow-lg w-full h-100 object-cover"
        />
      </div>
    </section>
  );
}