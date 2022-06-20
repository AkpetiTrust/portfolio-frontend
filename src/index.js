import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DashBoardPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/dashboard" exact element={<DashBoardPage />} />
          <Route
            path="/dashboard/:component"
            exact
            element={<DashBoardPage />}
          />
          <Route
            path="/dashboard/:component/:id"
            exact
            element={<DashBoardPage />}
          />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
