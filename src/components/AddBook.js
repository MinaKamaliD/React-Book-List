import React from "react";
import { Component } from "react";
import "./AddBook.css";
import BookTable from "./BookTable";

class AddBook extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      author: "",
      year: "",

      books: [],

      allValid: false,
    };
    this.titleHandler = this.titleHandler.bind(this);
    this.authorHandler = this.authorHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  titleHandler(event) {
    this.setState({ title: event.target.value });
  }
  authorHandler(event) {
    this.setState({ author: event.target.value });
  }
  yearHandler(event) {
    this.setState({ year: event.target.value });
  }
  submitHandler(event) {
    event.preventDefault();
    {
      this.state.title &&
        this.state.author &&
        this.state.year &&
        this.setState({ allValid: true });
    }
    if (this.state.allValid) {
      let addedBook = {
        id: this.state.books.length + 1,
        title: this.state.title,
        author: this.state.author,
        year: this.state.year,
      };

      this.setState({ books: [...this.state.books, addedBook] });
      this.setState({ title: "", author: "", year: "" });
    }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="Title"
          onChange={this.titleHandler}
          value={this.state.title}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={this.authorHandler}
          value={this.state.author}
        />
        <input
          type="number"
          placeholder="Year"
          onChange={this.yearHandler}
          value={this.state.year}
        />
        <button>Add Book</button>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book) => (
              <BookTable {...book} key={book.id} />
            ))}
          </tbody>
        </table>
      </form>
    );
  }
}
export default AddBook;
