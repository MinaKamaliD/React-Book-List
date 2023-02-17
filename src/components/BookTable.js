import React from "react";
import "./BookTable.css";
import { Component } from "react";
////////// Functional Component ////////////////////////////////////

const BookTable = (props) => {
  return (
    <tr className="addedBook">
      <td>{props.title}</td>
      <td>{props.writer}</td>
      <td>{props.year}</td>
    </tr>
  );
};
export default BookTable;

/////////// Class Componenet ///////////////////////////////////////

// class BookTable extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <tr className="addedBook">
//         <td>{this.props.title}</td>
//         <td>{this.props.writer}</td>
//         <td>{this.props.year}</td>
//       </tr>
//     );
//   }
// }
// export default BookTable;
