import React, { useState, useEffect } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import whotImage from "../../assets/whot.png";
import cryptoImage from "../../assets/crypto.png";
import Project from "../Project/Project";
import Button from "../Button/Button";
import Currently from "../Currently/Currently";
import ProjectSkeleton from "../ProjectSkeleton/ProjectSkeleton";
import { api } from "../../constants";

function Projects() {
  const [projects, setProjects] = useState([
    {
      img: whotImage,
      title: "WHOT",
      live: "https://whot.trust-akpeti.com",
      github: "https://github.com/AkpetiTrust/whot",
      description:
        "A game of WHOT built with ReactJS. It's a game where you play against an AI. A multiplayer version is in development😗.",
      technologies: ["React", "Redux"],
      roles: ["UI Design", "Front-end"],
    },
    {
      img: cryptoImage,
      title: "EXCHANGE APP",
      live: "https://exchange-app.trust-akpeti.com",
      github: "https://github.com/AkpetiTrust/exchange_app",
      description:
        "A web app that shows the latest prices for various cryptocurrency coins. You can also convert the value of one coin to another, it was built using ReactJS.",
      technologies: ["React"],
      roles: ["UI Design", "Front-end"],
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("projects/featured").then((result) => {
      setProjects(result.response);
      // setLoading(false);
    });
  }, []);

  return (
    <section className="projects" id="projects">
      <SectionHeading>PRΘJECTS</SectionHeading>
      <p className="talk">
        I must've already said this, but I really enjoy working on projects, so
        here's a curated list of some personal and professional projects I've
        played a role in.
      </p>
      <section className="projects-container">
        {loading ? (
          <>
            <ProjectSkeleton />
            <ProjectSkeleton />
          </>
        ) : (
          projects.map((project, index) => (
            <Project project={project} key={project.title} index={index} />
          ))
        )}
      </section>
      <Button className="btn" to={"/archive"} isLink>
        SEE MORE
      </Button>
      <Currently className="currently" />
    </section>
  );
}

export default Projects;
