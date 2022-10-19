import React, { Component } from "react";
import Book from '../representational/Book';
import { Link } from "react-router-dom";

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (this.props.books.map((book, index) => {
            return (
                <Link to={"/" + book.id} key={book.id} style={{ textDecoration: "none", color: "black" }}>
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        selectedBookHandler={this.props.selectedBookHandler.bind(this, book.id)}
                    />
                </Link>
            )
        }))
    }


}
export default BookList;