import Sidebar from "../(Components)/Sidebar";
import Navbar from "../(Components)/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <body className="flex h-screen">
      {/* Sidebar Component */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 p-0.5">{children}</main>
      </div>
    </body>
  );
}
