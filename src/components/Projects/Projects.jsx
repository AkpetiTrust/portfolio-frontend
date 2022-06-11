import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import whotImage from "../../assets/whot.png";
import Project from "../Project/Project";

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
  ]);

  return (
    <section className="projects" id="projects">
      <SectionHeading>PRΘJECTS</SectionHeading>
      <p className="talk">
        I must've already said this, but I really enjoy working on projects, so
        here's a curated list of some personal and professional projects I've
        played a role in.
      </p>
      <section className="projects-container">
        {projects.map((project, index) => (
          <Project project={project} key={project.title} index={index} />
        ))}
      </section>
    </section>
  );
}

export default Projects;
