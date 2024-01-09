import Home from "../components/pages/Home"
import Login from "../components/pages/Login"
import Register from "../components/pages/Register"


const useRouten = () => {
  


const routes = [
    {
   path:"/",
      element:<Home/>
    },
    {
        path:'login',
        element:<Login/>
    },
    {
        path:"register",
        element:<Register/>
    }
]

return {routes}
}





export default useRouten