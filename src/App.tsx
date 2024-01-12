import { useRoutes } from "react-router-dom";
import useRouten from "./hook/useRouten";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const { routes } = useRouten();
  return useRoutes(routes);
}

export default App;
