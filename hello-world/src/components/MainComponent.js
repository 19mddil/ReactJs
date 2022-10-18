import React, { Component } from 'react';
import '../App.css';
import bookList from '../assets/books';
import BookList from './Lists/bookList';
import NewBook from './representational/NewBook';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './representational/home';

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
                <Routes>
                    <Route path='/' element={books} />
                    <Route path='/new' element={<NewBook />} />
                </Routes>

            </div>
        );
    }
}
export default MainComponent;