import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { publicUrl } from "./lib/constants.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={publicUrl}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
