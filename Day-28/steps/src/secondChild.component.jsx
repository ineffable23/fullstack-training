import { Component } from "react";

class SecondChild extends Component {
  render() {
    return (
      <div>
        <h2>Welcome home </h2>
        <h3>Title={this.props.title}</h3>
        <h3>Power={this.props.power}</h3>
        <p>{this.props.children}</p>
        <button
          onClick={() => {
            this.props.scm("message from child");
          }}
        >
          click here
        </button>
      </div>
    );
  }
}

export default SecondChild;
