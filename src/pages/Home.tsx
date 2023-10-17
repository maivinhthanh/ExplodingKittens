import { Outlet } from "react-router-dom";

export { default as Home } from "../modules/home";

export const HomePage = () => {
  return (
    <Outlet></Outlet>
  )
}