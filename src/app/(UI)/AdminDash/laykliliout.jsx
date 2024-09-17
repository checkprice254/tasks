import NavJar from "../(Components)/NavJar";
import SideBar from "../(Components)/SideBar";

export default function DashboardLayout({ children }) {
  // will be a page or nested layout
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <NavJar />
        <SideBar />
      </nav>
      <div className="">{children}</div>
    </>
  );
}
