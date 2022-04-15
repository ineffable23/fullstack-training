import { Component } from "react";
import SecondChild from "./secondChild.component";

// react.fragment for empty tag in which we can return mutiple element at a time
class MainApp extends Component {
  state = {
    title: "Hello Child Component",
    power: 0,
    childmessage: "",
    message:
      "loream ffessf se fssef fssefse sfs seffssfsf sfs ssttrdortokr ortkrotkd",
  };
  increase = () => {
    this.setState({
      power: this.state.power + 1,
    });
  };
  decrease = () => {
    this.setState({
      power: this.state.power,
    });
  };
  setChildMessage = (message) => {
    this.setState({
      childmessage: message,
    });
  };
  render() {
    return (
      <>
        {/* <SecondChild /> */}
        <h1>Welcome to My application</h1>
        <h2>{this.state.childmessage || "comming soon"}</h2>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={this.increase}>Increase</button>

        <SecondChild
          scm={this.setChildMessage}
          title={this.state.title}
          power={this.state.power}
        >
          {/* sending the children */}
          {this.state.message}
        </SecondChild>
      </>
    );
  }
}

export default MainApp;
