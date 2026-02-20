import SummaryCards from "./components/SummaryCards";
import SalesChart from "./components/SalesChart";
import RecentOrders from "./components/RecentOrders";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <SummaryCards />
      <SalesChart />
      <RecentOrders />
    </div>
  );
}