import { NavLink } from "react-router";
import { User } from "lucide-react";
import logo from "../../assets/logo.svg";

const NavItem = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Infected Agents",
    path: "/infected-agents",
  },
  {
    name: "System Logs",
    path: "/system-logs",
  },
  {
    name: "Notes",
    path: "/notes",
  },
  {
    name: "Payload Generator",
    path: "/payload-generator",
  },
  {
    name: "Settings",
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-80 border-r border-green/55 px-6 py-7 flex flex-col h-[calc(100vh-1px)] sticky top-0">
      <div className="flex items-center border-b border-green/55 pb-5 shrink-0">
        <img src={logo} alt="Logo" className="mr-3 h-10 w-10" />
        <h1 className="text-2xl font-bold text-green">DCC</h1>
      </div>
      <nav className="pt-6 text-green flex-1 overflow-y-auto custom-scrollbar">
        <ul className="space-y-2.5">
          {NavItem.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  [
                    "relative block rounded-lg px-6 py-3.5 text-sm font-medium leading-none transition-colors duration-150",
                    isActive
                      ? "border border-green/80 bg-[#00230d] text-green before:absolute before:inset-y-0 before:left-0 before:w-2 before:rounded-l-lg before:bg-green before:content-['']"
                      : "text-green font-normal hover:bg-[#00190a]",
                  ].join(" ")
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* PROFILE SECTION */}
      <div className="mt-auto border-t border-green/55 pt-6 shrink-0">
        <div className="flex items-center gap-4 rounded-[4.9px] border border-green/60 p-3 hover:bg-green/5 cursor-pointer transition-colors">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green/60 bg-green/10 text-green">
            <User size={20} strokeWidth={2} />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[13px] font-semibold text-green leading-none">Admin User</span>
            <span className="text-[11px] font-medium text-green/70 leading-none">Administrator</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
