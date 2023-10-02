import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Four = () => {
  let [name, setName] = useState("");
  let inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Enter your name");
    }
    console.log(name);
    alert(name);
  };

  return (
    <form>
      <label htmlFor="nameField">Enter your name</label> <br></br>
      <input
        type="text"
        name="nameField"
        id="nameField"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <br></br>
      <br></br>
      <button onClick={(e) => handleClick(e)}>Submit</button>
    </form>
  );
};

export default Four;
