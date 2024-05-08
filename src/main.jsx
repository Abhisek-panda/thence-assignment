import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import { ThenceContext, ThenceProvider } from "./context/ThenceContext.jsx";

export const useThence = () => useContext(ThenceContext);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThenceProvider>
      <Router>
        <App />
      </Router>
    </ThenceProvider>
  </React.StrictMode>
);
