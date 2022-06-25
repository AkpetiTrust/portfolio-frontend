import React, { useRef } from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";
import { useDrag, useDrop } from "react-dnd";
import { updateOrder } from "../../redux/actions";
import { useDispatch } from "react-redux";

function FeaturedProject({ project: { title, description, id, order } }) {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const [_, drag] = useDrag(
    () => ({
      type: "project",
      item: { order },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [order]
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
    <li ref={ref} className={style.project} style={{ opacity: isOver ? 0 : 1 }}>
      <p className={style.title}>{title}</p>
      <p className={style.description}>{description}</p>
      <div className={style.controls}>
        <Link to={`/dashboard/project/${id}`}>Details</Link>
        <button>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.28423 10.188C6.28423 10.6852 6.08674 11.162 5.73519 11.5135C5.38365 11.8651 4.90685 12.0626 4.4097 12.0626C3.91254 12.0626 3.43574 11.8651 3.0842 11.5135C2.73265 11.162 2.53516 10.6852 2.53516 10.188C2.53516 9.69086 2.73265 9.21406 3.0842 8.86252C3.43574 8.51097 3.91254 8.31348 4.4097 8.31348C4.90685 8.31348 5.38365 8.51097 5.73519 8.86252C6.08674 9.21406 6.28423 9.69086 6.28423 10.188ZM11.9079 10.188C11.9079 10.6852 11.7104 11.162 11.3588 11.5135C11.0073 11.8651 10.5305 12.0626 10.0333 12.0626C9.53615 12.0626 9.05936 11.8651 8.70781 11.5135C8.35627 11.162 8.15877 10.6852 8.15877 10.188C8.15877 9.69086 8.35627 9.21406 8.70781 8.86252C9.05936 8.51097 9.53615 8.31348 10.0333 8.31348C10.5305 8.31348 11.0073 8.51097 11.3588 8.86252C11.7104 9.21406 11.9079 9.69086 11.9079 10.188ZM15.6569 12.0626C16.1541 12.0626 16.6309 11.8651 16.9824 11.5135C17.334 11.162 17.5315 10.6852 17.5315 10.188C17.5315 9.69086 17.334 9.21406 16.9824 8.86252C16.6309 8.51097 16.1541 8.31348 15.6569 8.31348C15.1598 8.31348 14.683 8.51097 14.3314 8.86252C13.9799 9.21406 13.7824 9.69086 13.7824 10.188C13.7824 10.6852 13.9799 11.162 14.3314 11.5135C14.683 11.8651 15.1598 12.0626 15.6569 12.0626Z"
              fill="#F0F0F4"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default FeaturedProject;
