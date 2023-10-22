import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import SplashScreen from "@/components/SplashScreen";
import Layout from "@/pages/Layout";
import LogIn from "@/pages/LogIn";
import Error from "@/pages/Error";
import { RequireAuth } from "./RequireAuth";
import Home from "@/modules/home";
import Rooms from "@/modules/rooms";
import CreateRoom from "@/modules/rooms/create-room";
import QuickStart from "@/modules/rooms/quick-start";

const routes: RouteObject[] = [
  {
    path: "/",
    element : <Layout></Layout>,
    children : [
      {
        index: true,
        element : <Home></Home>
      },
      {
        path: "/rooms",
        element : <RequireAuth><Rooms /></RequireAuth>,
      },
      {
        path: "/create-room",
        element : <RequireAuth><CreateRoom /></RequireAuth>,
      },
      {
        path: "/quick-start",
        element : <RequireAuth><QuickStart /></RequireAuth>,
      },
    ],
  },
  {
    path: "/login",
    element : <LogIn></LogIn>,
  },
  {
    path: "/*",
    element : <Error></Error>,
  },
];

const AppRoutes = () => {
  const element = useRoutes(routes);
  return <React.Suspense fallback={<SplashScreen />}>{element}</React.Suspense>;
};

export default AppRoutes;
