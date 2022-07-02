import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Archive, Home } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      </Routes>
    </Router>
  </React.StrictMode>
);
