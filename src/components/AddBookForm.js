import React from "react";
import "./AddBookForm.css";
import BookTable from "./BookTable";
import { Component } from "react";

class AddBookForm extends Component {
  constructor() {
    super();

    this.state = { title: "", writer: "", year: "", books: [] };

    this.submitHandler = this.submitHandler.bind(this);
    this.titleHandler = this.titleHandler.bind(this);
    this.writerHandler = this.writerHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);
  }

  titleHandler(event) {
    this.setState({ title: event.target.value });
  }

  writerHandler(event) {
    this.setState({ writer: event.target.value });
  }

  yearHandler(event) {
    this.setState({ year: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    if (this.state.title && this.state.writer && this.state.year) {
      let addedBook = {
        id: this.state.books.length + 1,
        title: this.state.title,
        writer: this.state.writer,
        year: this.state.year,
      };
      this.setState({ books: [...this.state.books, addedBook] });
      this.setState({ title: "", writer: "", year: "" });
    }
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="">Title</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.titleHandler}
            />
          </div>
          <div>
            <label htmlFor="">Writer</label>
            <input
              type="text"
              value={this.state.writer}
              onChange={this.writerHandler}
            />
          </div>
          <div>
            <label htmlFor="">Year</label>
            <input
              type="number"
              value={this.state.year}
              onChange={this.yearHandler}
            />
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
              {this.state.books.map((book) => (
                <BookTable className="addedBook" {...book} key={book.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AddBookForm;
