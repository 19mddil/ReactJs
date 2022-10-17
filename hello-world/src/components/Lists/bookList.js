import React, { Component } from "react";
import Book from '../representational/Book';

class BookList extends Component {
    constructor(props) {
        super(props);
        console.log("BookList Constructor");
    }

    componentDidMount() {
        console.log("BookList componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("U BookList shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    componentDidUpdate() {
        console.log("U BookList componentDidupdate");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("BookList getDerivedStateFromProps", nextProps, prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log("U BookList getSnapshotBeforeUpdate");
        return null;
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