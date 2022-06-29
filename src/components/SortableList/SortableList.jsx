import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useSelector } from "react-redux";
import FeaturedProject from "../FeaturedProject/FeaturedProject";
import withScrolling from "react-dnd-scrolling";
import { Flipper } from "react-flip-toolkit";

function SortableList({ className, updateFeatured }) {
  const projects = useSelector((state) => state.projects);
  let orderString = "";
  projects
    .filter((project) => project.is_featured)
    .forEach((project) => {
      orderString += project.order;
    });

  const Ul = withScrolling("ul");

  return (
    <DndProvider backend={HTML5Backend}>
      <Flipper flipKey={orderString}>
        <Ul className={className}>
          {projects
            .filter((project) => project.is_featured)
            .sort((a, b) => a.order - b.order)
            .map((project) => (
              <FeaturedProject
                updateFeatured={updateFeatured}
                project={project}
                key={project.order}
              />
            ))}
        </Ul>
      </Flipper>
    </DndProvider>
  );
}

export default SortableList;
