import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Alert,
  Button,
  CheckBox,
  Input,
  List,
  Loading,
} from "../../../../components";
import { api } from "../../../../constants";
import { addProject } from "../../../../redux/actions";
import { uploadFile } from "../../../../utils/functions";
import style from "./index.module.css";

function Project() {
  const [featured, setFeatured] = useState(false);
  const [roles, setRoles] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [liveURL, setLiveURL] = useState("");
  const [githubURL, setGithubURL] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [savingProject, setSavingProject] = useState(false);

  const [alertActive, setAlertActive] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const { id } = useParams();

  const getNextOrder = () => {
    let sortedProjects = [...projects].sort((a, b) => a.order - b.order);
    return (sortedProjects[sortedProjects.length - 1]?.order || 0) + 1;
  };

  const handleImageUpload = (e) => {
    const image = e.currentTarget.files[0];
    setImageLoading(true);
    uploadFile(image).then((url) => {
      setImageLoading(false);
      setImageLink(url);
    });
  };

  const handleSubmit = () => {
    if (id) {
    } else {
      uploadNewProject();
    }
  };

  const reset = () => {
    setFeatured(false);
    setRoles([]);
    setTechnologies([]);
    setLiveURL("");
    setTitle("");
    setDescription("");
    setGithubURL("");
    setImageLink("");
  };

  const uploadNewProject = async () => {
    if (!title || !description || !imageLink || !liveURL) return;

    let body = {
      is_featured: featured,
      title,
      description,
      image_link: imageLink,
      live_url: liveURL,
      github_url: githubURL,
      roles_json: JSON.stringify(roles),
      technologies_json: JSON.stringify(technologies),
      order: getNextOrder(),
    };

    setSavingProject(true);
    let result = await api.post("projects", { authIsRequired: true, body });
    setSavingProject(false);
    dispatch(addProject({ ...body, id: result.response.id }));
    reset();
    setAlertMessage("Project uploaded successfully");
    setAlertActive(true);
  };

  return (
    <section className={style.project}>
      <div className={style.grid}>
        <section>
          <div className={style.input_group}>
            <p>Project Title</p>
            <Input value={title} setValue={setTitle} type="text" />
          </div>
          <div className={`${style.input_group} ${style.image_container}`}>
            <p>Image:</p>
            {imageLoading && <Loading height={"70px"} />}
            {imageLink && !imageLoading && <img src={imageLink} alt={title} />}
            <label htmlFor="image">Upload Image</label>
            <input
              onChange={handleImageUpload}
              type="file"
              name="image"
              id="image"
            />
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
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.currentTarget.value);
              }}
            ></textarea>
          </div>
          <div className={style.input_group}>
            <p>Live URL</p>
            <Input value={liveURL} setValue={setLiveURL} type="text" />
          </div>
          <div className={style.input_group}>
            <p>Github URL</p>
            <Input value={githubURL} setValue={setGithubURL} type="text" />
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
      <Button onClick={handleSubmit} disabled={savingProject}>
        {savingProject ? <Loading height={"24px"} /> : "SAVE CHANGES"}
      </Button>
      <Alert
        active={alertActive}
        setActive={setAlertActive}
        message={alertMessage}
      />
    </section>
  );
}

export default Project;
