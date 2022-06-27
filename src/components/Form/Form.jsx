import React, { useState } from "react";
import { api } from "../../constants";
import Button from "../Button/Button";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Loading from "../Loading/Loading";

function Form({ setAlertMessage, setAlertActive }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api
      .post("messages", {
        body: {
          name,
          email,
          message,
        },
      })
      .then(() => {
        setAlertMessage("Message sent successfully👍");
        setAlertActive(true);
        setLoading(false);
        resetForm();
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <Input
          label={"Name:"}
          type="text"
          name="name"
          value={name}
          setValue={setName}
          key="name"
        />
        <Input
          label={"Email:"}
          type="email"
          name="email"
          value={email}
          setValue={setEmail}
          key="email"
        />
        <TextArea
          label={"Message:"}
          name="message"
          setValue={setMessage}
          key="message"
          value={message}
          required
        />
      </div>
      <Button disabled={loading} borderColor="#7C99DF" color="#fff">
        {loading ? <Loading height="20.8px" /> : "SHOOT"}
      </Button>
    </form>
  );
}

export default Form;
