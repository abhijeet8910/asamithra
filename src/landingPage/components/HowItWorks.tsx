export default function HowItWorks() {
  return (
    <section className="py-24 bg-linear-to-br from-emerald-50 via-green-100 to-lime-100 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-emerald-800 mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Connecting farmers directly with customers in a simple,
          transparent and profitable way.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Step 1 */}
          <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-emerald-100">

            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-emerald-600 text-white rounded-full text-xl font-bold shadow-lg">
              1
            </div>

            <h3 className="text-xl font-semibold text-emerald-700 mb-3">
              Farmers List Products
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Farmers upload their fresh produce directly to the platform
              with transparent pricing and real-time stock updates.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-emerald-100">

            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-lime-600 text-white rounded-full text-xl font-bold shadow-lg">
              2
            </div>

            <h3 className="text-xl font-semibold text-lime-700 mb-3">
              Customers Order Directly
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Customers browse fresh produce and place orders without
              middlemen, ensuring better prices and quality.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-emerald-100">

            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-green-700 text-white rounded-full text-xl font-bold shadow-lg">
              3
            </div>

            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Farmers Earn More
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Farmers receive fair prices, faster payments, and build
              long-term relationships with customers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}