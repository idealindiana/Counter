import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  Decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  Increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    let { count } = this.state;
    return (
      <div className="box">
        <h2>Count:{count}</h2>
        <button onClick={this.Decrease}>Decrease</button>
        <button onClick={this.Reset}>Reset</button>
        <button onClick={this.Increase}>Increase</button>
      </div>
    );
  }
}

export default App;
