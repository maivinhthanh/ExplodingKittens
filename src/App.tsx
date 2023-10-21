import "./index.css";
import { LoadingProvider } from "./components/Loading/LoadingProvider";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <LoadingProvider>
        <AppRoutes />
      </LoadingProvider>
    </>
  );
}

export default App;
