import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  
  const [theme ,setTheme] = useState("light")
 
  const darkTheme = ()=>{
    setTheme(theme === "light" ? "dark" :"light")
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }
      else{
        document.documentElement.classList.remove("dark")
      }
  }


  return (
    <div className=" h-screen bg-slate-300   dark:bg-slate-700 dark:text-black" >
      <Navbar  darkTheme= {darkTheme} theme={theme} />
      <div className=" dark:bg-slate-700 dark:text-black">
     hallo   
      </div>
    

    </div>
  );
}

export default App;
