import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import SplashScreen from "@/components/SplashScreen";
import { Home, HomePage } from "@/pages/Home";
import { Rooms } from "@/pages/Rooms";
import LogIn from "@/pages/LogIn";
import { RequireAuth } from "./RequireAuth";

const routes: RouteObject[] = [
  {
    path: "/",
    element : <HomePage></HomePage>,
    children : [
      {
        index: true,
        element : <Home></Home>
      },
      {
        path: "/login",
        element : <LogIn></LogIn>,
      },
      {
        path: "/rooms",
        element : <RequireAuth><Rooms /></RequireAuth>,
      }
    ]
  },
];

const AppRoutes = () => {
  const element = useRoutes(routes);
  return <React.Suspense fallback={<SplashScreen />}>{element}</React.Suspense>;
};

export default AppRoutes;
