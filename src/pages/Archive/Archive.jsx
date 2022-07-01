import React from "react";
import { Nav } from "../../components";
import style from "./index.module.css";

function Archive() {
  return (
    <section className={style.archive}>
      <Nav />
      <section className={style.inner}>
        <div className={style.talk}>
          <h1>
            Projects <span>Archive</span>
          </h1>
          <p>All projects that I've uploaded on here.</p>
        </div>
      </section>
    </section>
  );
}

export default Archive;
