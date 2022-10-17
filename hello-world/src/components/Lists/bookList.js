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

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("U BookList componentWillReceiveProps", nextProps);
    }
    flag = false;
    shouldComponentUpdate(nextProps, nextState) {
        console.log("U BookList shouldComponentUpdate", nextProps, nextState);
        if (!this.flag) {
            this.flag = true;
            return true;
        }
        return false;
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("U bookList componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("U BookList componentDidupdate");
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