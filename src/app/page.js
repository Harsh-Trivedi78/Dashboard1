import Sidebar from "./components/Sidebar";
import DashboardMain from "./components/dashboard/DashboardMain";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex bg-[#003049]"> {/* <- make the background match the sidebar */}
      <Sidebar />
      <main className="flex-1 bg-gray-100 min-h-screen">
        <DashboardMain />
      </main>
    </div>
  );
}

