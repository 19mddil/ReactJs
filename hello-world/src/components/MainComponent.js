import React, { Component } from 'react';
import '../App.css';
import bookList from '../assets/books';
import BookList from './Lists/bookList';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: bookList,
            showBooks: true,
        }
        console.log("MainComponent Constructor");
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

    toggleBooks = () => {
        this.setState(
            {
                showBooks: !this.state.showBooks
            }
        )
    }

    UNSAFE_componentWillMount() {
        console.log("MainComponent WillMount");
    }
    componentDidMount() {
        console.log("MainComponent componentDidMount");
    }

    render() {
        console.log("MainComponet render");
        const style = {
            border: "1px solid red",
            borderRadius: "5px",
            backgroundColor: "Black",
            color: "grey",
            //margin: "10px auto",
            padding: "10px",
            marginLeft: "30%",
            marginRight: "30%",
        };


        let books = null;
        if (this.state.showBooks) {
            books = <BookList books={this.state.books} deleteBook={this.deleteBook} changeWithInputState={this.changeWithInputState} />
        }

        return (
            <div className="App">
                <h1 style={style}>BookList</h1>
                <br />
                <button onClick={this.toggleBooks} >Toogle Books</button>
                <br />
                {books}

            </div>
        );
    }
}
export default MainComponent;