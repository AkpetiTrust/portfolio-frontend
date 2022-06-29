import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components";
import { api } from "../../constants";
import style from "./index.module.css";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    api.post("logout", { authIsRequired: true }).then((result) => {
      localStorage.removeItem("token");
      navigate("/");
    });
  });

  return (
    <section className={style.logout}>
      <Loading height={"100vh"} />
    </section>
  );
}

export default Logout;
