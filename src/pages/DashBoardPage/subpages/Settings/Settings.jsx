import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, CheckBox, Input } from "../../../../components";
import { setAvailability } from "../../../../redux/actions";
import style from "./index.module.css";

function Settings() {
  const available = useSelector((state) => state.available);
  const dispatch = useDispatch();

  const onChange = (available) => {
    dispatch(setAvailability(available));
  };

  return (
    <section className={style.settings}>
      <div className={style.flex}>
        <section className={style.textarea_container}>
          <h3>Currently</h3>
          <textarea></textarea>
        </section>
        <section>
          <h3>Password</h3>
          <form>
            <div className={style.input_group}>
              <label htmlFor="password">New password: </label>
              <Input
                backgroundColor={"#2d2d34"}
                type="password"
                id="password"
              />
            </div>
            <div className={style.input_group}>
              <label htmlFor="confirm_password">Confirm:</label>
              <Input
                backgroundColor={"#2d2d34"}
                type="password"
                id="confirm_password"
              />
            </div>
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

      <Button>SAVE ALL CHANGES</Button>
    </section>
  );
}

export default Settings;
