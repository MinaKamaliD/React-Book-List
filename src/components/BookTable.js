import React from "react";
import { Component } from "react";
import "./BookTable";

class BookTable extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.author}</td>
        <td>{this.props.year}</td>
      </tr>
    );
  }
}

export default BookTable;
