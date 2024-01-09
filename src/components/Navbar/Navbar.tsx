import { NavLink } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { useState } from "react";

interface In {
  darkTheme(): string;
  theme: string;
}

const pers = [
  {
    name: "login",
    url: "/login",
  },
  {
    name: "register",
    url: "/register",
  },
  {
    name: "about",
    url: "/about",
  },
];

const Navbar = ({ darkTheme, theme }: In) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="navbar">
      <div className="navbar_logo">Navbar</div>

      <div className="navbar_right">
        <div>isim</div>

        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "white",
              fontSize: isActive ? 20 : 12,
            };
          }}
        >
          <div>home</div>{" "}
        </NavLink>

        <div className="shrink-0">
          <button onClick={() => setOpen(!open)}>
            <img
              className="h-16 w-16 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              alt="Current profile photo"
            />{" "}
          </button>
          {open ? (
            <div>
              {pers?.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.url}
                  className="block px-4 py-2 text-sm text-white"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <div className="shrink-0">
            <button
              className="h-16 w-16 object-cover rounded-full"
              onClick={darkTheme}
            >
              {theme ? <MdDarkMode size={32} /> : <CiDark size={32} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
