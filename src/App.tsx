import "./index.css";
import { LoadingProvider } from "./components/Loading/LoadingProvider";
import AppRoutes from "./routes";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAccessToken, removeAccessToken } from "./lib/token";
import { JWTDecode } from "./api/auth/type";
import jwt_decode from "jwt-decode";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      navigate("/login");
      return;
    }

    const decoded: JWTDecode = jwt_decode(accessToken);
    if (decoded.exp * 1000 < Date.now()) {
      removeAccessToken();
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <LoadingProvider>
        <AppRoutes />
      </LoadingProvider>
    </>
  );
}

export default App;

