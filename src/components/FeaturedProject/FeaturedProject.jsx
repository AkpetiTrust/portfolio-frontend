import React from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";

function FeaturedProject({ project: { title, description, id } }) {
  return (
    <div className={style.project}>
      <p className={style.title}>{title}</p>
      <p className={style.description}>{description}</p>
      <div className={style.controls}>
        <Link to={`/details/project/${id}`}>Details</Link>
      </div>
    </div>
  );
}

export default FeaturedProject;
