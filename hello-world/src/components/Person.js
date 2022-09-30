import React from "react";

let Person = (props) => {
    // console.log(props);
    return (
        <div>
            {/* <h1>Number: {Math.floor(Math.random() * 10)}</h1> */}
            <h3>Name: {props.name} and age: {props.age} years</h3>
            <h4>Extra Info: {props.children}</h4>
        </div>
    )
};
export default Person;