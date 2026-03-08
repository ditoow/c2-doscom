import { NavLink } from "react-router";
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
    <aside className="w-80 border-r border-green/55 px-6 py-7">
      <div className="flex items-center border-b border-green/55 pb-5">
        <img src={logo} alt="Logo" className="mr-3 h-10 w-10" />
        <h1 className="text-2xl font-bold text-green">DCC</h1>
      </div>
      <nav className="pt-6 text-green">
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
    </aside>
  );
}
