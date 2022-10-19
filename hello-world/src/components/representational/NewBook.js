import React from "react";
import '../../stylesheets/newbook.css'

const NewBook = props => {
    console.log("here", props);
    return (
        <div className="NewBook" >
            <h1>New Book Entry</h1>;
        </div >
    );
}

export default NewBook;