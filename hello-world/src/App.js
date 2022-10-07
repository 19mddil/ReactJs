import React from 'react';
import MainComponent from './components/MainComponent';


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

const App = () => {
  return <MainComponent />;
}

export default App;