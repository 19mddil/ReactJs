import React, { Component } from 'react';
import '../../stylesheets/book.css';
class Book extends Component {
    constructor(props) {
        super(props);
        console.log("Book Constructor");
    }

    componentDidMount() {
        console.log("Book componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("U Book shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("BookList getDerivedStateFromProps", nextProps, prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log("U BookList getSnapshotBeforeUpdate");
        return null;
    }

    render() {
        console.log("Book render");
        return (
            <div className='Book'>
                <h3 onClick={this.props.delete}>Book: {this.props.bookName}</h3>
                <h4>Writer: {this.props.writer}</h4>
                <input type="text" onChange={this.props.changeWithInputState} value={this.props.bookName} />
            </div>
        );
    };

}

export default Book;
