import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';


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
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Person name="Rahim" age="34">This is a dummy person bruh.</Person>
        <Person name="Karim" age="31" />
        <Person name="Md.Dilshad" age="29" />
        <Person name="Jala" age="35" />
      </div>
    );
  }
}

export default App;