import React from "react";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import style from "./index.module.css";

function DeleteProject({ onClick, deleting }) {
  return (
    <div className={style.delete}>
      <p className={style.title}>DELETE MESSAGE</p>
      <p>Are you sure you want to delete this message? You can't undo this.</p>
      <Button disabled={deleting} onClick={onClick}>
        {deleting ? <Loading height={"24px"} /> : "DELETE"}
      </Button>
    </div>
  );
}

export default DeleteProject;
