import React, { Component } from "react";
import "./index.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      mobile: this.props.mobile,
      email: this.props.email,
    };
  }

  render() {
    return (
      <div className="card">
        <h1>{this.state.name}</h1>
        <h3>{this.state.mobile}</h3>
        <h3>{this.state.email}</h3>
      </div>
    );
  }
}

export default Person;
