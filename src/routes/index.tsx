import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import SplashScreen from "../components/SplashScreen";
import { Home } from "../pages/Home";
import { Rooms } from "../pages/Rooms";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
];

export const AppRoutes = () => {
  const element = useRoutes(routes);
  return <React.Suspense fallback={<SplashScreen />}>{element}</React.Suspense>;
};

export default routes;
