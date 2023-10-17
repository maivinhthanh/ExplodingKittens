import * as React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useBoundStore from "@/store";
import { getProfile } from "@/api/auth";

interface RequireAuthProps {
  children: React.ReactNode;
}

export function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const auth = useBoundStore((state) => state.auth);
  const isUserAuthenticated = auth();

  React.useEffect(() => {
    getProfile().catch(()=>{
      navigate("/login");
    });
  }, [])

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
