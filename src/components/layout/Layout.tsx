import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-black">
      <div className="h-px w-full bg-green/50" />
      <div className="flex min-h-[calc(100vh-1px)]">
        <Sidebar />
        <main className="flex">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
