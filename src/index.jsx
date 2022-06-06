import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
