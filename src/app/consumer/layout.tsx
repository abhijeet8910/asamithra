"use client";

import Header from "./components/Header";
import BottomNav from "./components/BottomNav";

export default function ConsumerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-gray-100">

      {/* Sticky Header */}
      <Header />

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNav />
      </div>

    </div>
  );
}