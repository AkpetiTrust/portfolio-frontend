import React from "react";
import style from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, CheckBox } from "../../../../components";
import { truncateWords } from "../../../../utils/functions";
import {
  deleteSelectedMessages,
  selectMessage,
} from "../../../../redux/actions";

function Inbox() {
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const onChange = (id, selected) => {
    dispatch(selectMessage(id, selected));
  };

  const onClick = () => {
    dispatch(deleteSelectedMessages());
  };

  return (
    <section className={style.inbox}>
      <Table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Message:</th>
            <th>Email:</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={`${message.id} selected:${Number(message.selected)}`}>
              <td>{message.name}</td>
              <td>{truncateWords(message.message, 10)}</td>
              <td>
                <div className={style.flex}>
                  {message.email}{" "}
                  <CheckBox
                    id={message.id}
                    checked={message.selected}
                    onChange={(e) => {
                      onChange(message.id, e.currentTarget.checked);
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={onClick}>DELETE SELECTED</Button>
    </section>
  );
}

export default Inbox;
