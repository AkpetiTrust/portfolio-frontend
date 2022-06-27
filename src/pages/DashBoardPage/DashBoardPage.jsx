import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Loading, SideNav } from "../../components";
import { Home, Inbox, Project, Projects, Settings } from "./subpages";

function DashBoardPage() {
  const { component } = useParams();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const nameToComponent = {
    home: <Home />,
    inbox: <Inbox />,
    settings: <Settings />,
    projects: <Projects />,
    project: <Project />,
  };

  let subPage = nameToComponent[component] || <section></section>;

  if (!component) subPage = <Home />;

  if (loading) {
    subPage = <Loading height={"100vh"} />;
  }

  return (
    <section className="dashboard">
      <SideNav></SideNav>
      {subPage}
    </section>
  );
}

export default DashBoardPage;
