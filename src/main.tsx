import React from "react";
import App from "./App";
import ErrorBoundary from "./constants/ErrorBoundary";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Router>
    <ErrorBoundary>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </ErrorBoundary>
  </Router>
);
