import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DashBoardPage, Login, Logout } from "./pages";
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
          <Route path="/" exact element={<Login />} />
          <Route path="/logout" exact element={<Logout />} />
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
