import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="py-8 px-16 2xl:px-24">
      <Outlet></Outlet>
    </div>
  );
};

export default Layout