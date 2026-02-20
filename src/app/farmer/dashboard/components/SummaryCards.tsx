// components/farmer/SummaryCards.tsx

export default function SummaryCards() {
    const cards = [
      { title: "Total Sales", value: "₹50,000" },
      { title: "Total Orders", value: "120" },
      { title: "Active Products", value: "25" },
      { title: "Low Stock", value: "3" },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-gray-500">{card.title}</h3>
            <p className="text-2xl font-bold mt-2">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    );
  }