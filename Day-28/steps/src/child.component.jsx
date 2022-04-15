import { Component } from "react";

class ChildComponent extends Component {
  // lifeCycle
  //   constructor() {
  //     super();
  //     this.clickHandler = this.clickHandler.bind(this);
  //   }

  //   compVersion = 34;
  //   //call back function all to binding
  //   clickHandler = () => {
  //     // alert("hi");
  //     this.compVersion = this.compVersion + 1;
  //     this.forceUpdate();
  //   };

  // state is reserve key word
  state = {
    compversion: 56,
  };
  clickHandler = () => {
    this.setState({
      compversion: this.state.compversion + 1,
    });
  };
  render() {
    return (
      <div>
        <h1 className="box">Hello Friend</h1>
        <h2>App Version is: {this.props.version}</h2>
        <h2>Component Version is: {this.state.compversion}</h2>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default ChildComponent;
