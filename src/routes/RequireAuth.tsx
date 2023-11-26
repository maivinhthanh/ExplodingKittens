import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useBoundStore from "@/store";
// import { getProfile } from "@/api/auth";

interface RequireAuthProps {
  children: React.ReactNode;
}

export function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation();
  // const navigate = useNavigate();

  const auth = useBoundStore((state) => state.auth);
  // const setUser = useBoundStore((state) => state.setUser);
  const isUserAuthenticated = auth();

  // React.useEffect(() => {

  //   getProfile().then((res)=>{
  //     setUser(res)
  //   }).catch(()=>{
  //     navigate("/login");
  //   });
  // }, [])

  if (isUserAuthenticated === true) {
    return <>{children}</>;
  } else {
    return (
      <Navigate
        to="/login"
        replace
        state={{ path: location.pathname }}
      />
    );
  }
}
