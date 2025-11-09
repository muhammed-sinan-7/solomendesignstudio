import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SmoothScrolling from "./components/SmoothScrolling";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScrolling>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </SmoothScrolling>
  </React.StrictMode>
);
