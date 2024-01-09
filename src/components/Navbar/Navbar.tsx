interface In {
  darkTheme():string,
  theme:string,
}

const Navbar = ({darkTheme,theme}:In) => {

  return (
    <div  className="navbar">
      <div className="navbar_logo">
         Navbar
      </div>
       
        <div className="navbar_right"> 
            <div>isim</div>
            <div>logut</div>
            <div>login</div>
            <div>
              
              <button onClick={darkTheme}>
                {theme ? "light" :"dark"}
              </button>

            </div>
        </div>
        
        </div>
  )
}

export default Navbar