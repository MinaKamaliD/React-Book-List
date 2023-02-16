import React from "react";
import "./BookTable.css";
import { Component } from "react";

class BookTable extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tr className="addedBook">
        <td>{this.props.title}</td>
        <td>{this.props.writer}</td>
        <td>{this.props.year}</td>
      </tr>
    );
  }
}
export default BookTable;
