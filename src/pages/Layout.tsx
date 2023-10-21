import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="py-8 px-16 2xl:px-24 bg-gradient-to-r from-red-500 to-pink-500 h-screen">
      <Outlet></Outlet>
    </div>
  );
};

export default Layout