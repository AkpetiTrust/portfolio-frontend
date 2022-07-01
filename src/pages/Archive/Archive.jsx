import React, { useState, useEffect } from "react";
import { ArchivedProjectSkeleton, Nav, Tag } from "../../components";
import ArchivedProject from "../../components/ArchivedProject/ArchivedProject";
import { api } from "../../constants";
import style from "./index.module.css";
import { Flipper } from "react-flip-toolkit";

function Archive() {
  const [filters, setFilters] = useState([
    "All",
    "UI Design",
    "Front-end",
    "Back-end",
  ]);

  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((result) => {
      setProjects(
        result.response.map((project) => ({
          ...project,
          roles: JSON.parse(project.roles_json),
          technologies: JSON.parse(project.technologies_json),
        }))
      );
      setLoading(false);
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={style.archive}>
      <Nav />
      <section className={style.inner}>
        <div className={style.talk}>
          <h1>
            Projects{" "}
            <span>
              Archive{" "}
              <svg
                width="122"
                height="21"
                viewBox="0 0 122 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00008 15.545C45.3086 -2.62574 72.3809 -3.38508 121.217 19.0645"
                  stroke="#FFFD77"
                  strokeWidth="3"
                />
              </svg>
            </span>
          </h1>
          <p>All projects that I've uploaded on here.</p>
        </div>
        <div className={style.tags}>
          {filters.map((filter) => (
            <Tag
              key={filter}
              filter={filter}
              setActiveFilter={setActiveFilter}
              active={filter === activeFilter}
            />
          ))}
        </div>

        <Flipper className={style.projects} flipKey={activeFilter}>
          {loading && (
            <>
              <ArchivedProjectSkeleton />
              <ArchivedProjectSkeleton />
              <ArchivedProjectSkeleton />
              <ArchivedProjectSkeleton />
              <ArchivedProjectSkeleton />
            </>
          )}

          {projects
            .filter(
              (project) =>
                activeFilter === "All" || project.roles.includes(activeFilter)
            )
            .map((project) => (
              <ArchivedProject project={project} key={project.title} />
            ))}
        </Flipper>
      </section>
      <div aria-hidden className={style.watermark}>
        DESIGNER/ DEVELOPER
      </div>
    </section>
  );
}

export default Archive;
