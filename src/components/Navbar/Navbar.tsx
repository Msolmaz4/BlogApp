import { NavLink } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { useState } from "react";
import { useLogoutMutation } from "../../redux/auth";

interface In {
  darkTheme(): string;
  theme: string;
}

const pers = [
  {
    name: "logout",
    url: "",
  },
  {
    name: "My Blog",
    url: "/myblog",
  },
  {
    name: "contact",
    url: "/contact",
  },
];

const Navbar = ({ darkTheme, theme }: In) => {
  const [open, setOpen] = useState<boolean>(false);
  const authToken = localStorage.getItem("authToken");

  const [logout] = useLogoutMutation();
  const hand3 = (name: string) => {
    if (name == "logout") {
      localStorage.clear();
      logout(authToken);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar_logo">Navbar</div>

      <div className="navbar_right">
        <div></div>
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "white",
              fontSize: isActive ? 20 : 12,
            };
          }}
        >
          <div className="mt-4">Home</div>
        </NavLink>
        <div className="shrink-0 z-10">
          <button onClick={() => setOpen(!open)}>
            <img
              className="h-16 w-16 object-cover rounded-full"
              src={authToken ? "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgUH/8QALBABAAICAAQFAwMFAAAAAAAAAAECAxEEEiExMkFRYXETIlIzgZEUI0JTof/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJtHrDnnr7g7Ff1I9D6kAsHMXrPnr5TExPYEgAAAAAAAAAAAAAAABPRVa8z0jpAOrXiO3dXNpnzQASAAAAmJ12QA7rknzWRMT2UJrMxOwXjmtot8ugAAAAAAAAAAAV5La6QDm9tz7OQAAAA7RuewA4+rj/ADjaYvW3htEg6AAAAiZjr5rq23ClNZ5ZBeI2kAAAAAAAAETOo2pmdztZlnpr1VAAAAiZ1EzPaOoOM2WMce89oY73ted2kyWm95n1cgG5BUX4c8xMRedx6tfw81r4S+4msz2RV4AAALMU+SxRSdWjS8AAAAAAAkAVZe7h1k8TkAABXnn+zb4WK8/6F/gGEBQAEF3CfrR7xKlbw36sfuDaAigAC6vhhSup4YB0AAAAAABIKb+Jy7y93AAACLRzVmvrGkgPOtHLaY9ENmfFz/dXxefuxzExOp6AAKg08HXrNlWLFOSeu4r5y21iKxqOyKkAAABbj8KpfXwwCQAAAAAAAV5Y6bVr5jcaUT6AAACJmIiZntDPk4qe2ONe8g0ub0rfxVYrZb273lzzW/KQa54bHPX7k1wUrO9b+WPmt+UnNb8pB6OvSB53Nb8rfyspnvWes83tINorxZYydo1PosAABMR92l6vFHTawAAAAAAAABXkr5wsAZx1evLPsqz2muK2u+gZuIy89uWvhj/qkFAAQAAAAiZiYms6mG7Dk+pXfn5sK7hrcuTXlKK2ERs+FtK8oOojUaSAAAAAAAAAAAImNxqWTjKTGOOWJnq2I0DxhvzcHW3XH9s+jHkx3xzq9Zj3VHAAAAAJjr0iJn4BDvDEzlrERM9VuLhMl+tvthuxYqYq6rH7gmtdTt2CKAAAAAAAAAAAAAAImImNTG4SAovwuG3+OvjoqtwNd/beY+YbAGH+hn/ZH8H9D65P4huAZa8Fjifum1v3X0x0p4KxDsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k="}
            />
          </button>
          {authToken && open ? (
            <div>
              {pers?.map((item) => (
                <NavLink
                  onClick={() => hand3(item.name)}
                  key={item.name}
                  to={item.url}
                  className="block px-4 py-2 text-sm text-black dark:text-white"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          ) : (
            ""
          )}
          {!authToken && open ? (
            <div>
              <NavLink to="/login">login</NavLink>
            </div>
          ) : (
            ""
          )}
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
