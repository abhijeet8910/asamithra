// components/farmer/RecentOrders.tsx

export default function RecentOrders() {
    const orders = [
      { id: "ORD001", customer: "Rahul", amount: "₹2000" },
      { id: "ORD002", customer: "Amit", amount: "₹1500" },
      { id: "ORD003", customer: "Sneha", amount: "₹3000" },
    ];
  
    return (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">
          Recent Orders
        </h2>
  
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="pb-2">Order ID</th>
              <th className="pb-2">Customer</th>
              <th className="pb-2">Amount</th>
            </tr>
          </thead>
  
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }