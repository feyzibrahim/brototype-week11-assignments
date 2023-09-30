import React from "react";
import "./style.css";

const One = (props) => {
  return (
    <>
      <div className="profile_card">
        <h1>{props.name}</h1>
        <p>Email: {props.email}</p>
      </div>
    </>
  );
};

export default One;
