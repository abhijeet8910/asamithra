import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-white font-semibold mb-4">
            ASWAMITHRA
          </h3>
          <p className="text-sm">
            Connecting farmers directly with customers and businesses
            through transparent trading.
          </p>
        </div>

        <div>
          <h4 className="text-white mb-4 font-semibold">Marketplace</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/products">Browse Products</Link></li>
            <li><Link href="/farmer">Sell Products</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4 font-semibold">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Terms & Privacy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4 font-semibold">Contact</h4>
          <p className="text-sm">
            Email: support@example.com
          </p>
          <p className="text-sm mt-2">
            Phone: +91 9876543210
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} ASWAMITHRA. All rights reserved.
      </div>
    </footer>
  );
}