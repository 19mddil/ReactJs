import React, { Component } from 'react';
import '../App.css';
import bookList from '../assets/books';
import BookList from './Lists/bookList';
import NewBook from './representational/NewBook';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: bookList,
        }
    }

    changeWithInputState = (event, index) => {
        const book = {
            ...this.state.books[index]
        }
        book.bookName = event.target.value;
        const books = [...this.state.books];
        books[index] = book;
        this.setState({
            books: books
        });
    }

    deleteBook = index => {
        // const books = this.state.books.slice();
        // const books = this.state.books.map(item => item);
        const books = [...this.state.books]
        books.splice(index, 1);
        this.setState({
            books: books,
        });
    }

    render() {
        const books = <BookList
            books={this.state.books}
            deleteBook={this.deleteBook}
            changeWithInputState={this.changeWithInputState}
        />

        return (
            <div className="App">
                <div className='nav-bar'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/new">New Book Entry</a></li>
                    </ul>
                </div>
                <br />
                {books}
                <NewBook />
            </div>
        );
    }
}
export default MainComponent;