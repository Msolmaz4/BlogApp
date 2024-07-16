import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import HomeCarts from "./HomeCarts";

const Home = () => {
  const [theme, setTheme] = useState<string>("light");

  const darkTheme : In['darkTheme']= () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className=" h-screen bg-slate-300   dark:bg-slate-700 dark:text-black flex flex-col">
      <Navbar darkTheme={darkTheme} theme={theme} />
      <div className=" dark:bg-slate-700 dark:text-black vh-%100 flex flex-wrap justify-center">
        <HomeCarts  />
      </div> 
    </div>
  );
}; 

export default Home;
