import React, { Component } from 'react';
import '../../stylesheets/book.css';
class Book extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Book' onClick={this.props.selectedBookHandler}>
                <h3>Book: {this.props.bookName}</h3>
                <h4>Writer: {this.props.writer}</h4>
            </div>
        );
    };

}

export default Book;
