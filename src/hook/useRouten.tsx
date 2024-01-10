import About from "../components/pages/About";
import Details from "../components/pages/Details";
import Home from "../components/pages/Home"
import Login from "../components/pages/Login"
import MyBlog from "../components/pages/MyBlog";
import Register from "../components/pages/Register"


const useRouten = () => {
    const authToken = localStorage.getItem("authToken");


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
    },
    {
      path:"details/:id",
      element: <Details/>
      
    },
    {
      path:"myblog",
      element: authToken ? <MyBlog/> : <Home/>
      
    },
    {
      path:"about",
      element: authToken ? <About/> : <Home/>
      
    },

]

return {routes}
}





export default useRouten