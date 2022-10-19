import React, { Component } from 'react';
import '../App.css';
import bookList from '../assets/books';
import BookList from './Lists/bookList';
import NewBook from './representational/NewBook';
import BookDetail from './representational/bookDetail';
import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
import Home from './representational/home';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: bookList,
            selectedBook: null,
        }
    }

    selectedBookHandler = bookId => {
        const book = this.state.books.filter(book => book.id === bookId)[0];
        this.setState(
            {
                selectedBook: book
            }
        )
    }

    render() {
        const books = <BookList
            books={this.state.books}
            selectedBookHandler={this.selectedBookHandler}
        />
        let activeStyle = {
            color: "orange",
        };
        return (

            <div className="App">
                <nav className='nav-bar'>
                    <ul>
                        <li><NavLink end to="/" style={({ isActive }) => isActive ? activeStyle : { color: "black" }}>Home</NavLink></li>
                        <li><NavLink end to="/new" style={({ isActive }) => isActive ? activeStyle : { color: "black" }}>NewBook</NavLink></li>
                    </ul>
                </nav>
                <br />
                {/* switch is replaced by routes */}
                <Routes>
                    <Route path='/books' end element={books} />
                    <Route path='/new' end element={<NewBook />} />
                    <Route path='/:id' end element={<BookDetail book={this.state.selectedBook} />} />
                    <Route path="/" element={<Navigate to="/books" />} />{/*for redirecting purpose */}
                </Routes>


            </div>
        );
    }
}
export default MainComponent;