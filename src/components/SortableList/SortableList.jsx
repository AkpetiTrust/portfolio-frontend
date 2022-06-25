import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useSelector } from "react-redux";
import FeaturedProject from "../FeaturedProject/FeaturedProject";

function SortableList({ className }) {
  const projects = useSelector((state) => state.projects);
  return (
    <DndProvider backend={HTML5Backend}>
      <ul className={className}>
        {projects
          .filter((project) => project.featured)
          .sort((a, b) => a.order - b.order)
          .map((project) => (
            <FeaturedProject project={project} key={project.order} />
          ))}
      </ul>
    </DndProvider>
  );
}

export default SortableList;
