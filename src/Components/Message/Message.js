import React from "react";

import styles from "./Message.css";

const message = props => {
  const createdAt = new Date(props.message.createdAt);

  return (
    <section>
      <div className="d-inline-block mb-2 ml-3">
        <small
          className={
            "bg-light text-muted px-3 d-inline-block box-shadow badge-pill " +
            styles.MessageOwner
          }
        >
          {props.message.from}
        </small>
        <div
          className={
            "bg-primary text-white py-2 px-3 box-shadow " + styles.MessageText
          }
        >
          <small>{props.message.text}</small>
        </div>
        <div className="text-right text-secondary">
          <small>{`${createdAt.toLocaleTimeString()}`}</small>
        </div>
      </div>
    </section>
  );
};

export default message;
