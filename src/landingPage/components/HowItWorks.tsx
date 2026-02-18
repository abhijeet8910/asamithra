export default function HowItWorks() {
  return (
    <section className="py-20 bg-green-300">
      <div className="max-w-7xl mx-auto px-6 text-center ">

        <h2 className="text-3xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              Farmers List Products
            </h3>
            <p className="text-gray-600">
              Farmers upload their fresh produce directly to the platform.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              Customers Order Directly
            </h3>
            <p className="text-gray-600">
              Customers buy fresh products without middlemen.
            </p>
          </div>

          <div className="p-6 border rounded-xl ">
            <h3 className="text-xl font-semibold mb-2">
              Farmers Earn More
            </h3>
            <p className="text-gray-600">
              Farmers receive fair prices and faster payments.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}