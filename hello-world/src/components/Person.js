import React from "react";
function Person() {
    return (
        <div>
            <h1>I am a person component</h1>
        </div>
    )
    // return React.createElement('div', null, React.createElement('h1', null, "I am person component"));
}
export default Person;