import React from 'react';
import './App.css';


//JSX

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Person />
    </div>
  );
  // return React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hello World'), <Person />);
}

function Person() {
  return (
    <div>
      <h1>I am a person component</h1>
    </div>
  )
  // return React.createElement('div', null, React.createElement('h1', null, "I am person component"));
}

export default App;