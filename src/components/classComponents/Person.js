import React, { Component, useEffect } from "react";

export default class Person extends Component {
  render() {
    console.log("props", this);
    return (
      <div>
        <h1>Hello {this?.props?.name}</h1>
      </div>
    );
  }
}
