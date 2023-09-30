import React, { useEffect, useState } from "react";
import "./style.css";
import One from "./one";

const Three = () => {
  let [count, setCount] = useState(1);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  let inc = () => {
    setCount(count + 1);
  };
  let decr = () => {
    setCount(count - 1);
  };
  const [data, setData] = useState({});

  const getData = async (num) => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + num
      );
      let json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => decr()}>-</button>
      <button onClick={() => inc()}>+</button>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        data && <One name={data.name} email={data.email} />
      )}
    </div>
  );
};

export default Three;
