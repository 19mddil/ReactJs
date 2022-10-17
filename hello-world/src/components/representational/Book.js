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
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("U Book componentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("U Book shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("U Book componentWillUpdate");
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
