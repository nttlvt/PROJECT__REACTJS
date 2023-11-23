import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const useRouteElement = () => {
  const routeElements = useRoutes([
    {
      path: "",
      element: <HomePage />,
    },
  ]);
  return routeElements;
};

export default useRouteElement;
