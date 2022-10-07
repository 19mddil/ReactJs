import React from "react";
import Book from '../representational/Book';

const BookList = (props) => {

    return (props.books.map((book, index) => {
        return (
            <Book
                key={book.id}
                bookName={book.bookName}
                writer={book.writer}
                delete={props.deleteBook.bind(this, index)}
                changeWithInputState={event => props.changeWithInputState(event, index)}
            />
        )
    }))

}
export default BookList;