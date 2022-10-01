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
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "The Da Vinchi Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Coelho" }
    ]
  }

  changeBookState = bookName => {
    this.setState({
      books: [
        { bookName: bookName, writer: "George Orwell" },
        { bookName: "The Da Vinchi Code", writer: "Dan Brown" },
        { bookName: "Metamorphosis", writer: "Frans Kafka" }
      ]
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>BookList</h1>
        <button onClick={() => this.changeBookState("Arrow Function")} >Change State</button>
        <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer}
        />
        <Book
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer}
        />
        <Book
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer}
          change={this.changeBookState.bind(this, "Non-Arrow Function")}
        />
      </div>
    );
  }
}

export default App;