import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form>
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
        />
      </div>
      <Button borderColor="#7C99DF" color="#fff">
        SHOOT
      </Button>
    </form>
  );
}

export default Form;
