import { HiMiniMoon } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navbarItems = [
    { name: "Home", link: "/home" },
    { name: "Features", link: "/features" },
    { name: "Reviews", link: "/reviews" },
  ];

  return (
    <nav className="w-full flex justify-center items-center relative">
      <div className="w-[85%] rounded-[26px] bg-(--bgFixed) absolute top-7 flex justify-between items-center px-8 py-4">
        <img src="/Logo.png" alt="Logo" className="h-9" />

        <ul className="flex justify-center items-center gap-x-1">
          {navbarItems.map((item) => (
            <li key={item.name} className="text-xl font-light ">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `transition-all duration-300 px-4 py-2  rounded-lg ${
                    isActive
                      ? "bg-(--white-10a) "
                      : "hover:bg-(--white-10a) "
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <span className="w-9 h-9 cursor-pointer bg-(--white-10a) flex items-center justify-center rounded-lg text-xl">
          <HiMiniMoon />
        </span>
      </div>
    </nav>
  );
}
