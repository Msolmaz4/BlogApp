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
    name: "My Blog",
    url: "/myblog",
  },
  {
    name: "about",
    url: "/about",
  },
 
  {
    name:"logout",
    
  }
];

const Navbar = ({ darkTheme, theme }: In) => {
  const [open, setOpen] = useState<boolean>(false);
  const authToken = localStorage.getItem("authToken");
  console.log(authToken, "navbaraaaaaa");
  const [logout] =useLogoutMutation()
const hand3 = (name)=>{
 console.log(name)
 if(name == "logout"){
  localStorage.clear()
  logout(authToken)
 }
}


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
          { authToken && open ? (
            <div>
              {pers?.map((item) => (
                <NavLink  onClick={()=>hand3(item.name)}
                  key={item.name}
                  to={item.url}
                  className="block px-4 py-2 text-sm text-white"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          ) : ""}
          { !authToken && open ? (
            <div>
<NavLink to='/login'>login</NavLink>

            </div>
          ) : ""}

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
