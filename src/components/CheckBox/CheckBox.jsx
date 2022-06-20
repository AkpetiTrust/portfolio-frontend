import React from "react";
import style from "./index.module.css";

function CheckBox({ id, checked, onChange }) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={style.input}
      />
      <label htmlFor={id} className={style.box}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.7069 5.293C16.8944 5.48053 16.9997 5.73484 16.9997 6C16.9997 6.26516 16.8944 6.51947 16.7069 6.707L8.70692 14.707C8.51939 14.8945 8.26508 14.9998 7.99992 14.9998C7.73475 14.9998 7.48045 14.8945 7.29292 14.707L3.29292 10.707C3.11076 10.5184 3.00997 10.2658 3.01224 10.0036C3.01452 9.7414 3.11969 9.49059 3.3051 9.30518C3.49051 9.11977 3.74132 9.0146 4.00352 9.01233C4.26571 9.01005 4.51832 9.11084 4.70692 9.293L7.99992 12.586L15.2929 5.293C15.4804 5.10553 15.7348 5.00021 15.9999 5.00021C16.2651 5.00021 16.5194 5.10553 16.7069 5.293Z"
            fill="#D0D0D7"
          />
        </svg>
      </label>
    </>
  );
}

export default CheckBox;
