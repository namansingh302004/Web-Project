import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: Component is being constructed");
  }

  componentDidMount() {
    console.log("componentDidMount: Component has been mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component updated");
    console.log("Previous state:", prevState.count, "Current state:", this.state.count);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component is about to be unmounted");
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div className="p-4 border rounded-xl shadow">
        <h2 className="text-xl font-bold mb-2">Lifecycle Demo Component</h2>
        <p className="mb-2">Count: {this.state.count}</p>
        <button
          onClick={this.incrementCount}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Increment Count
        </button>
      </div>
    );
  }
}
export default LifecycleDemo;

