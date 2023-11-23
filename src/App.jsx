import useRouteElement from "./useRouterElement";

export default function App() {
  const routeElements = useRouteElement();
  return <>{routeElements}</>;
}
