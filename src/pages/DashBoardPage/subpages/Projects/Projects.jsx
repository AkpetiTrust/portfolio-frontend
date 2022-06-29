import React, { useState } from "react";
import {
  Button,
  CheckBox,
  Loading,
  Option,
  Saving,
  SortableList,
  Table,
} from "../../../../components";
import style from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleFeatured } from "../../../../redux/actions";
import { Link } from "react-router-dom";
import { api } from "../../../../constants";

function Projects() {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const [changesAreSaving, setChangesAreSaving] = useState(false);
  const [idsBeingToggled, setIdsBeingToggled] = useState([]);

  const handleClick = () => {
    setChangesAreSaving(true);
    let ids_to_order = {};
    projects.forEach(({ id, order }) => {
      ids_to_order[id] = order;
    });
    api
      .post("reorder-projects", {
        authIsRequired: true,
        body: { ids_to_order },
      })
      .then(() => {
        setChangesAreSaving(false);
      });
  };

  const updateFeatured = (id, featured) => {
    dispatch(toggleFeatured(id, featured));
    setIdsBeingToggled((prevValue) => [...prevValue, id]);
    api
      .post(`update-featured/${id}`, {
        authIsRequired: true,
        body: { is_featured: featured },
      })
      .then(() => {
        setIdsBeingToggled((prevValue) =>
          prevValue.filter((value) => value !== id)
        );
      });
  };

  return (
    <section className={style.projects}>
      <section>
        <h3>Featured Projects</h3>
        <SortableList
          updateFeatured={updateFeatured}
          className={style.featured}
        />
      </section>
      <section>
        <h3>All Projects {!!idsBeingToggled.length && <Saving />}</h3>
        <Table responsive={false}>
          <thead>
            <tr>
              <th>Title:</th>
              <th>Featured:</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>
                  <Link to={`/dashboard/project/${project.id}`}>
                    {project.title}
                  </Link>
                </td>
                <td>
                  <div className={style.flex}>
                    <CheckBox
                      id={project.id}
                      checked={project.is_featured}
                      onChange={(e) => {
                        let featured = e.currentTarget.checked;
                        updateFeatured(project.id, featured);
                      }}
                    />
                    <Option
                      options={[
                        {
                          text: "Delete",
                          action: () => {
                            console.log("Hey");
                          },
                        },
                      ]}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button to={"/dashboard/project"}>NEW PROJECT</Button>
        <Button disabled={changesAreSaving} onClick={handleClick}>
          {" "}
          {changesAreSaving ? <Loading height={"16px"} /> : "SAVE CHANGES"}
        </Button>
      </section>
    </section>
  );
}

export default Projects;
