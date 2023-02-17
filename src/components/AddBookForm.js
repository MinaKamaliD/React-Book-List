import React from "react";
import "./AddBookForm.css";
import BookTable from "./BookTable";
import { Component } from "react";
import { useState } from "react";

const writerHandler = () => {};
const yearHandler = () => {};

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [year, setYear] = useState("");
  const [books, setBooks] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (title && writer && year) {
      let addedBook = {
        id: books.length + 1,
        title: title,
        writer: writer,
        year: year,
      };
      setBooks([...books, addedBook]);
      setTitle("");
      setWriter("");
      setYear("");
    }
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const writerHandler = (event) => {
    setWriter(event.target.value);
  };
  const yearHandler = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div>
          <label htmlFor="">Writer</label>
          <input type="text" value={writer} onChange={writerHandler} />
        </div>
        <div>
          <label htmlFor="">Year</label>
          <input type="number" value={year} onChange={yearHandler} />
        </div>
        <button className="btn">Add Book</button>
      </form>
      <div>
        <table>
          <thead className="thead">
            <tr>
              <th>Title</th>
              <th>Writer</th>
              <th>Year</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => (
              <BookTable {...book} key={book.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddBookForm;

/////// Class Componentt /////////////////////////////

// class AddBookForm extends Component {
//   constructor() {
//     super();

//     this.state = { title: "", writer: "", year: "", books: [] };

//     this.submitHandler = this.submitHandler.bind(this);
//     this.titleHandler = this.titleHandler.bind(this);
//     this.writerHandler = this.writerHandler.bind(this);
//     this.yearHandler = this.yearHandler.bind(this);
//   }

//   titleHandler(event) {
//     this.setState({ title: event.target.value });
//   }

//   writerHandler(event) {
//     this.setState({ writer: event.target.value });
//   }

//   yearHandler(event) {
//     this.setState({ year: event.target.value });
//   }

//   submitHandler(event) {
//     event.preventDefault();
//     if (this.state.title && this.state.writer && this.state.year) {
//       let addedBook = {
//         id: this.state.books.length + 1,
//         title: this.state.title,
//         writer: this.state.writer,
//         year: this.state.year,
//       };
//       this.setState({ books: [...this.state.books, addedBook] });
//       this.setState({ title: "", writer: "", year: "" });
//     }
//   }
//   render() {
//     return (
//       <div className="container">
//         <form onSubmit={this.submitHandler}>
//           <div>
//             <label htmlFor="">Title</label>
//             <input
//               type="text"
//               value={this.state.title}
//               onChange={this.titleHandler}
//             />
//           </div>
//           <div>
//             <label htmlFor="">Writer</label>
//             <input
//               type="text"
//               value={this.state.writer}
//               onChange={this.writerHandler}
//             />
//           </div>
//           <div>
//             <label htmlFor="">Year</label>
//             <input
//               type="number"
//               value={this.state.year}
//               onChange={this.yearHandler}
//             />
//           </div>
//           <button className="btn">Add Book</button>
//         </form>
//         <div>
//           <table>
//             <thead className="thead">
//               <tr>
//                 <th>Title</th>
//                 <th>Writer</th>
//                 <th>Year</th>
//               </tr>
//             </thead>

//             <tbody>
//               {this.state.books.map((book) => (
//                 <BookTable className="addedBook" {...book} key={book.id} />
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }

// export default AddBookForm;
