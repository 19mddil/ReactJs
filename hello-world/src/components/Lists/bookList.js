import React, { Component } from "react";
import Book from '../representational/Book';

class BookList extends Component {
    constructor(props) {
        super(props);
        console.log("BookList Constructor");
    }
    UNSAFE_componentWillMount() {
        console.log("BookList WillMount");
    }
    componentDidMount() {
        console.log("BookList componentDidMount");
    }

    render() {
        console.log("BookList render");
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