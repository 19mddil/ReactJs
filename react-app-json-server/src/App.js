
import './App.css';
import { Component } from 'react';
import fetch from 'cross-fetch';
import axios from 'axios';



class App extends Component {
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => console.log(response.data))

  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
