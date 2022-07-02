import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Archive, Home, Error } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: true,
  disable: () => window.innerWidth > 700,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/archive" exact element={<Archive />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
