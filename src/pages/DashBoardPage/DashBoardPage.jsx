import React from "react";
import { useParams } from "react-router-dom";
import { SideNav } from "../../components";
import { Home } from "./subpages";

function DashBoardPage() {
  const { component } = useParams();

  const nameToComponent = {
    home: <Home />,
  };

  const subPage = nameToComponent[component] || <section></section>;

  return (
    <section className="dashboard">
      <SideNav></SideNav>
      {subPage}
    </section>
  );
}

export default DashBoardPage;
