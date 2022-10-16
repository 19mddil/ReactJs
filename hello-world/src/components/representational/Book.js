import React, { Component } from 'react';
import '../../stylesheets/book.css';
class Book extends Component {
    constructor(props) {
        super(props);
        console.log("Book Constructor");
    }
    UNSAFE_componentWillMount() {
        console.log("Book WillMount");
    }
    componentDidMount() {
        console.log("Book componentDidMount");
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
