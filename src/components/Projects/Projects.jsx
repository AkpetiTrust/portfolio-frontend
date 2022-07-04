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
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("projects/featured").then((result) => {
      setProjects(
        result.response.map((project) => ({
          ...project,
          roles: JSON.parse(project.roles_json),
          technologies: JSON.parse(project.technologies_json),
        }))
      );
      setLoading(false);
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
