import React, { Component } from "react";
import Book from '../representational/Book';

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (this.props.books.map((book, index) => {
            return (
                <Book
                    key={book.id}
                    bookName={book.bookName}
                    writer={book.writer}
                    delete={this.props.deleteBook.bind(this, index)}
                    changeWithInputState={event => this.props.changeWithInputState(event, index)}
                />
            )
        }))
    }


}
export default BookList;