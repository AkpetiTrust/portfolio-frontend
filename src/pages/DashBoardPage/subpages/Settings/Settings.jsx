import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, CheckBox, Input, Loading } from "../../../../components";
import { api } from "../../../../constants";
import { setAvailability, setCurrently } from "../../../../redux/actions";
import style from "./index.module.css";

function Settings() {
  const [available, currently] = useSelector((state) => [
    state.available,
    state.currently,
  ]);
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onChange = (available) => {
    dispatch(setAvailability(available));
  };

  const onTextAreaChange = (e) => {
    dispatch(setCurrently(e.currentTarget.value));
  };

  const onClick = async () => {
    setLoading(true);
    setError(false);
    await api.post("settings", {
      authIsRequired: true,
      body: { currently, is_available: available },
    });

    if (password) {
      if (password !== passwordConfirm) {
        setError(true);
      } else {
        await api.post("update-password", {
          authIsRequired: true,
          body: { password },
        });
      }
    }

    setLoading(false);
  };

  return (
    <section className={style.settings}>
      <div className={style.flex}>
        <section className={style.textarea_container}>
          <h3>Currently</h3>
          <textarea value={currently} onChange={onTextAreaChange}></textarea>
        </section>
        <section>
          <h3>Password</h3>
          <form>
            <div className={style.input_group}>
              <label htmlFor="password">New password: </label>
              <Input
                backgroundColor={"#2d2d34"}
                type="password"
                value={password}
                setValue={setPassword}
                id="password"
              />
            </div>
            <div className={style.input_group}>
              <label htmlFor="confirm_password">Confirm:</label>
              <Input
                backgroundColor={"#2d2d34"}
                type="password"
                value={passwordConfirm}
                setValue={setPasswordConfirm}
                id="confirm_password"
              />
            </div>
            {error && <p className={style.error}>Passwords don't match</p>}
          </form>
        </section>
      </div>
      <section>
        <h3>Availability</h3>
        <div className={style.availability_container}>
          <p>
            {available
              ? "I'm available for freelance"
              : "I'm not currently available for freelance"}
          </p>
          <CheckBox
            id="available"
            checked={available}
            onChange={(e) => onChange(e.currentTarget.checked)}
          />
        </div>
      </section>

      <Button disabled={loading} onClick={onClick}>
        {loading ? <Loading height={"24px"} /> : "SAVE ALL CHANGES"}
      </Button>
    </section>
  );
}

export default Settings;
