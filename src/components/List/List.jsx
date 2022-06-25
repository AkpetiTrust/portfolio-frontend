import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import style from "./index.module.css";

function List({ list, setList }) {
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (!newItem || list.includes(newItem)) return;
    setList((prevList) => [...prevList, newItem]);
    setNewItem("");
  };

  return (
    <div className={style.list}>
      <ul>
        {list.map((listItem) => (
          <ListItem key={listItem} setList={setList} listItem={listItem} />
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => {
          setNewItem(e.currentTarget.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addItem();
          }
        }}
      />
      <button onClick={addItem}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 9V12M12 12V15M12 12H15M12 12H9M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
            stroke="#D3D3DE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default List;