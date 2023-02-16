import React from "react";
import "./Title.css";
import { Component } from "react";

class Title extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h1 className="title">
        {" "}
        📚Online <span className="book"> Book</span> List
      </h1>
    );
  }
}

export default Title;
