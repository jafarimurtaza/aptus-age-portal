import Sidebar from "./Sidebar";
import ChatSection from "./ChatSection";

export default function AptusMain() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] p-8">
      <div className="mx-auto flex max-w-7xl gap-6">
        <Sidebar />
        <ChatSection />
      </div>
    </main>
  );
}