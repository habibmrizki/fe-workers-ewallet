import { Link, NavLink } from "react-router";
import { FaRegUser, FaIdCard } from "react-icons/fa";
import {
  LuBanknote,
  LuChevronDown,
  LuHistory,
  LuLifeBuoy,
  LuLogOut,
  LuMenu,
  LuSend,
  LuUser,
  LuX,
} from "react-icons/lu";
import { BsWallet2 } from "react-icons/bs";
import { useState } from "react";

const MENU_ITEMS = [
  { to: "/dashboard", label: "Dashboard", Icon: LuLifeBuoy },
  { to: "/transfer", label: "Transfer", Icon: LuSend },
  { to: "/history", label: "History", Icon: LuHistory },
  { to: "/top-up", label: "Top Up", Icon: LuBanknote },
  { to: "/profile", label: "Profile", Icon: LuUser },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = true;
  const userPhoto = "";

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const baseClass =
    "flex items-center p-2 gap-5 cursor-pointer rounded-lg text-brand-primary transition-colors duration-300 ease-in-out hover:bg-brand-primary hover:text-white";
  const activeClass = "bg-brand-primary text-white";

  const logoutClass =
    "flex w-full items-center p-2 gap-5 cursor-pointer rounded-lg text-brand-red transition-colors duration-300 ease-in-out hover:bg-brand-red hover:text-white";

  return (
    <header className="relative bg-brand-primary text-white">
      <nav className="flex items-center justify-between px-5 py-5 lg:px-12">
        <div className="flex flex-row items-center gap-3">
          <BsWallet2 className="text-white" />
          <Link to="/" className="font-jakarta text-2xl font-semibold">
            E-Wallet
          </Link>
        </div>

        {!isLoggedIn && (
          <div className="hidden gap-5 justify-between lg:flex">
            <Link
              className="p-3 border font-semibold rounded-lg cursor-pointer border-white transition-all duration-300 ease-in-out hover:bg-white hover:text-brand-primary"
              to="/login"
            >
              Sign In
            </Link>
            <Link
              className="p-3 border font-semibold rounded-lg cursor-pointer border-white bg-white text-brand-primary transition-all duration-300 ease-in-out hover:bg-brand-primary hover:text-white"
              to="/register"
            >
              Sign Up
            </Link>
          </div>
        )}

        {isLoggedIn && (
          <button
            type="button"
            onClick={toggleMenu}
            className="relative z-50 hidden cursor-pointer items-center gap-4 lg:flex"
            aria-label="Menu akun"
            aria-expanded={isMenuOpen}
          >
            <span className="text-sm">Hola !</span>
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-brand-white">
              {userPhoto ? (
                <img
                  src={userPhoto}
                  alt="Foto profil"
                  className="h-full w-full object-cover"
                />
              ) : (
                <LuUser size={24} />
              )}
            </span>
            <LuChevronDown
              size={24}
              className={`transition-transform duration-300 ${
                isMenuOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        )}

        {/* Tombol hamburger*/}
        <button
          type="button"
          onClick={toggleMenu}
          className="relative z-50 h-7 w-7 cursor-pointer lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <LuMenu
            size={28}
            className={`absolute inset-0 transition-all duration-300 ${
              isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          />
          <LuX
            size={28}
            className={`absolute inset-0 transition-all duration-300 ${
              isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          />
        </button>
      </nav>

      {isMenuOpen && <div className="fixed inset-0 z-40" onClick={closeMenu} />}

      {isLoggedIn && (
        <div
          className={`absolute z-50 right-12 top-20 hidden w-48 rounded-xl border border-gray-300 bg-white p-3 shadow-2xl origin-top-right transition-all duration-300 ease-in-out lg:block ${
            isMenuOpen
              ? "visible opacity-100 translate-y-0 scale-100"
              : "invisible opacity-0 -translate-y-2 scale-95"
          }`}
        >
          <div className="flex flex-col gap-2">
            <NavLink
              to="/profile"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? `${baseClass} ${activeClass}` : baseClass
              }
            >
              <LuUser size={24} />
              <h3 className="font-light">Profile</h3>
            </NavLink>

            <div className="my-1 border-t border-gray-200" />

            <button type="button" onClick={closeMenu} className={logoutClass}>
              <LuLogOut size={24} className="rotate-180" />
              <h3>Keluar</h3>
            </button>
          </div>
        </div>
      )}
      <div
        className={`absolute z-50 right-5 top-20 w-60 max-h-[80vh] overflow-y-auto rounded-xl border border-gray-300 bg-white p-4 shadow-2xl origin-top-right transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "visible opacity-100 translate-y-0 scale-100"
            : "invisible opacity-0 -translate-y-2 scale-95"
        }`}
      >
        {isLoggedIn ? (
          <div className="flex flex-col gap-2">
            {MENU_ITEMS.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? `${baseClass} ${activeClass}` : baseClass
                }
              >
                <Icon size={24} />
                <h3 className="font-light">{label}</h3>
              </NavLink>
            ))}

            <div className="my-1 border-t border-gray-200" />

            <button type="button" onClick={closeMenu} className={logoutClass}>
              <LuLogOut size={24} className="rotate-180" />
              <h3>Keluar</h3>
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-between gap-3">
            <Link
              onClick={closeMenu}
              className="flex items-center p-2 text-brand-primary gap-5 cursor-pointer rounded-lg transition-colors duration-300 ease-in-out hover:bg-brand-primary hover:text-white"
              to="/login"
            >
              <FaRegUser />
              <h3>Sign In</h3>
            </Link>
            <Link
              onClick={closeMenu}
              className="flex items-center p-2 text-brand-red gap-5 cursor-pointer rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white"
              to="/register"
            >
              <FaIdCard />
              <h3>Sign Up</h3>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
