import React, { useRef } from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";
import { useDrag, useDrop } from "react-dnd";
import { setDraggedProject, updateOrder } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Flipped } from "react-flip-toolkit";
import Option from "../Option/Option";

function FeaturedProject({
  project: { title, description, id, order },
  updateFeatured,
}) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const draggedProject = useSelector((state) => state.draggedProject);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "project",
      item: { order },
      collect: (monitor) => {
        let isDragging = monitor.isDragging();
        if (isDragging && draggedProject !== id) {
          dispatch(setDraggedProject(id));
        }

        return {
          isDragging,
        };
      },
    }),
    [id]
  );

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "project",
    drop: (item, monitor) => {
      let hoverIsNested = !monitor.isOver({ shallow: true });
      if (item.order === order || hoverIsNested) {
        return;
      }
      dispatch(updateOrder(item.order, order));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver() && monitor.getItem().order !== order,
    }),
  }));

  drag(drop(ref));

  return (
    <Flipped
      flipId={id}
      transformOrigin="center center"
      shouldFlip={() => id !== draggedProject}
    >
      <li
        ref={ref}
        className={style.project}
        style={{
          backgroundColor: isOver ? "#373749" : "#272734",
          opacity: isDragging ? 0 : 1,
        }}
      >
        <p className={style.title}>{title}</p>
        <p className={style.description}>{description}</p>
        <div className={style.controls}>
          <Link to={`/dashboard/project/${id}`}>Details</Link>
          <Option
            options={[
              {
                text: "Remove",
                action: () => {
                  updateFeatured(id, false);
                },
              },
            ]}
          />
        </div>
      </li>
    </Flipped>
  );
}

export default FeaturedProject;
