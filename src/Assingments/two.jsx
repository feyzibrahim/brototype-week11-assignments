import React from "react";
import "./style.css";
class Two extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decr = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.decr()}>-</button>
        <button onClick={() => this.inc()}>+</button>
      </div>
    );
  }
}

export default Two;
