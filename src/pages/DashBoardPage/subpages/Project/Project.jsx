import React, { useState } from "react";
import { Button, CheckBox, Input, List } from "../../../../components";
import style from "./index.module.css";

function Project() {
  const [featured, setFeatured] = useState(false);
  const [roles, setRoles] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  return (
    <section className={style.project}>
      <div className={style.grid}>
        <section>
          <div className={style.input_group}>
            <p>Project Title</p>
            <Input type="text" />
          </div>
          <div className={`${style.input_group} ${style.image_container}`}>
            <p>Image</p>
            <label htmlFor="image">Upload Image</label>
            <input type="file" name="image" id="image" />
          </div>
          <div className={style.input_group}>
            <p>Roles:</p>
            <List list={roles} setList={setRoles} />
          </div>
          <div className={style.input_group}>
            <p>Technologies:</p>
            <List list={technologies} setList={setTechnologies} />
          </div>
        </section>
        <section>
          <div className={style.input_group}>
            <p>Project Description</p>
            <textarea></textarea>
          </div>
          <div className={style.input_group}>
            <p>Live URL</p>
            <Input type="text" />
          </div>
          <div className={style.input_group}>
            <p>Github URL</p>
            <Input type="text" />
          </div>
          <div className={style.checkbox_container}>
            <p>Featured:</p>
            <CheckBox
              id={"featured"}
              checked={featured}
              onChange={(e) => {
                setFeatured(e.currentTarget.checked);
              }}
            />
          </div>
        </section>
      </div>
      <Button>SAVE CHANGES</Button>
    </section>
  );
}

export default Project;
