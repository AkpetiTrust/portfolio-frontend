import React from "react";
import ImageSkeleton from "../ImageSkeleton/ImageSkeleton";
import ParagraphSkeleton from "../ParagraphSkeleton/ParagraphSkeleton";
import style from "./index.module.css";

function ProjectSkeleton() {
  return (
    <div className={style.skeleton} aria-hidden>
      <div className={style.top}>
        <ParagraphSkeleton />
      </div>
      <div className={style.image}>
        <ImageSkeleton />
      </div>
      <div className={style.description}>
        <div className={style.top}>
          <ParagraphSkeleton />
          <ParagraphSkeleton />
          <ParagraphSkeleton />
          <ParagraphSkeleton />
        </div>
        <div className={style.bottom}>
          <ParagraphSkeleton />
          <ParagraphSkeleton />
        </div>
      </div>
    </div>
  );
}

export default ProjectSkeleton;
