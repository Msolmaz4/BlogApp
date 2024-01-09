import { useRoutes } from "react-router-dom";
import useRouten from "./hook/useRouten";

function App() {
  const { routes } = useRouten();
  return useRoutes(routes);
}

export default App;
