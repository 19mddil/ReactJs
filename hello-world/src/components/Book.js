import React from 'react';

const Book = props => {
    return (
        <div>
            <h3 onClick={props.change}>Book: {props.bookName}</h3>
            <h4>Writer: {props.writer}</h4>
        </div>
    );
}

export default Book;
