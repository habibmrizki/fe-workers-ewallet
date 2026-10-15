import {
  LuBanknote,
  LuHistory,
  LuLifeBuoy,
  LuLogOut,
  LuSend,
  LuUser,
} from "react-icons/lu";
import { NavLink } from "react-router";

const Sidebar = () => {
  const baseClass =
    "flex gap-5 cursor-pointer transition-colors duration-300 ease-in-out items-center p-2 rounded-xl hover:bg-brand-secondary hover:text-white";

  const activeClass = "bg-brand-secondary text-white";

  return (
    <>
      <aside className="hidden lg:flex lg:w-1/5 min-h-screen border-r border-gray-300">
        <nav className="flex flex-col gap-2 p-5 w-full">
          <NavLink
            className={({ isActive }) =>
              isActive ? `${baseClass} ${activeClass}` : baseClass
            }
            to="/dashboard"
          >
            <LuLifeBuoy size={28} />
            <h1 className="font-light">Dashboard</h1>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${baseClass} ${activeClass}` : baseClass
            }
            to="/transfer"
          >
            <LuSend size={28} />
            <h1 className="font-light">Transfer</h1>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${baseClass} ${activeClass}` : baseClass
            }
            to="/history"
          >
            <LuHistory size={28} />
            <h1 className="font-light">History</h1>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${baseClass} ${activeClass}` : baseClass
            }
            to="/top-up"
          >
            <LuBanknote size={28} />
            <h1 className="font-light">Top Up</h1>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${baseClass} ${activeClass}` : baseClass
            }
            to="/profile"
          >
            <LuUser size={28} />
            <h1 className="font-light">Profile</h1>
          </NavLink>
          <button className="flex gap-5 cursor-pointer transition-colors duration-300 ease-in-out text-red-600 items-center p-3 rounded-xl hover:bg-brand-red hover:text-white">
            <LuLogOut size={24} className="rotate-180" />
            <h3>Keluar</h3>
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
