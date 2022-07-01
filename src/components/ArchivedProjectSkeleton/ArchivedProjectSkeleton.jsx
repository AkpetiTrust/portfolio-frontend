import React from "react";
import ParagraphSkeleton from "../ParagraphSkeleton/ParagraphSkeleton";
import style from "./index.module.css";

function ArchivedProjectSkeleton() {
  let paragraphColor = {
    h: 240,
    s: "14%",
    l: "35%",
  };

  return (
    <div className={style.skeleton}>
      <ParagraphSkeleton color={paragraphColor} />
      <div>
        <ParagraphSkeleton color={paragraphColor} />
        <ParagraphSkeleton color={paragraphColor} />
        <ParagraphSkeleton color={paragraphColor} />
        <ParagraphSkeleton color={paragraphColor} />
      </div>
      <ParagraphSkeleton color={paragraphColor} />
    </div>
  );
}

export default ArchivedProjectSkeleton;
