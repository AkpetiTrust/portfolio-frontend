import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DashBoardPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/dashboard" exact element={<DashBoardPage />} />
        <Route path="/dashboard/:component" exact element={<DashBoardPage />} />
        <Route
          path="/dashboard/:component/:id"
          exact
          element={<DashBoardPage />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
