# Multiple Components can be replaced with simple mapping with State
```js
class App extends Component {
  state = {
    books: [
      { bookName: "Alchemy of Happiness", writer: "Imam Gazzali" },
      { bookName: "The Lean StartUp", writer: "Eric Ries" },
      { bookName: "The Godfather", writer: "Mark Paulo" }
    ],
    someOtherProps: "And I love her",
  }
   render() {
    // const books = this.state.books.map(book => {
    //   return (
    //     <Book
    //       bookName={book.bookName}
    //       writer={book.writer}
    //     />
    //   )
    // })
    return (
      <div className="App">
        {/* <Book
          bookName={this.state.book[0].bookName}
          writer={this.state.book[0].writer} />
        <Book
          bookName={this.state.book[1].bookName}
          writer={this.state.book[1].writer} />
        <Book
          bookName={this.state.book[2].bookName}
          writer={this.state.book[2].writer}
          change={this.changeBookState.bind(this, "mario paulo")}
          inputHide='false'
          inputName={this.changeWithInputState} /> */}

        {/* {books} */}{/*Related to the function is line 13*/}

        {
          this.state.books.map(book => {
            return (
              <Book
                bookName={book.bookName}
                writer={book.writer}
              />
            )
          })
        }
      </div>
    );
  }
}
```

## Different Ways of Coppying
```js
    const books = this.state.books.slice();
    const books = this.state.books.map(item => item);
    const books = [...this.state.books];
```

## Deleting Requires Item Index
```js
    //inside render function of component class
    {
        this.state.books.map((book, index) => {
        return (
            <Book
            bookName={book.bookName}
            writer={book.writer}
            delete={this.deleteBook.bind(this, index)}
            />
        )
        })
    }
    //inside component class
    state = {
        books: [
        { bookName: "Alchemy of Happiness", writer: "Imam Gazzali" },
        { bookName: "The Lean StartUp", writer: "Eric Ries" },
        { bookName: "The Godfather", writer: "Mark Paulo" }
        ],
    }
    deleteBook = index => {
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books,
        });
    }
    //On children Book.js
    const Book = props => (
        <div className='Book'>
            <h2 onClick={props.delete} >{props.bookName}</h2>
            <h4 >{props.writer}</h4>
        </div>
    )

    export default Book;
```