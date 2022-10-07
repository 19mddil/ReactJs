import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';


// //JSX

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <Person />
//     </div>
//   );
//   // return React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hello World'), <Person />);
// }

class App extends Component {
  state = {
    books: [
      { id: 1, bookName: "1984", writer: "George Orwell" },
      { id: 2, bookName: "The Da Vinchi Code", writer: "Dan Brown" },
      { id: 3, bookName: "The Alchemist", writer: "Paulo Coelho" },
      { id: 4, bookName: "Maine Kalmf", writer: "Hitler" },
    ],
    showBooks: true,
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

  render() {
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
      books = this.state.books.map((book, index) => {
        return (
          <Book
            key={book.id}
            bookName={book.bookName}
            writer={book.writer}
            delete={this.deleteBook.bind(this, index)}
            changeWithInputState={event => this.changeWithInputState(event, index)}
          />
        );
      })
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

export default App;