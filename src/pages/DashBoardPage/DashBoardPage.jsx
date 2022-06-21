import React from "react";
import { useParams } from "react-router-dom";
import { SideNav } from "../../components";
import { Home, Inbox, Project, Projects, Settings } from "./subpages";

function DashBoardPage() {
  const { component } = useParams();

  const nameToComponent = {
    home: <Home />,
    inbox: <Inbox />,
    settings: <Settings />,
    projects: <Projects />,
    project: <Project />,
  };

  let subPage = nameToComponent[component] || <section></section>;

  if (!component) subPage = <Home />;

  return (
    <section className="dashboard">
      <SideNav></SideNav>
      {subPage}
    </section>
  );
}

export default DashBoardPage;
