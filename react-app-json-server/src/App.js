
import './App.css';
import { Component } from 'react';
// import fetch from 'cross-fetch';
import axios from 'axios';



class App extends Component {
  state = {
    dishes: null,
    errMsg: null,
  }
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    console.log("ComponentDidMount: ", this.state);
    axios.get('http://localhost:3001/dishes')
      .then(response => response.data)
      .then(data => this.setState({
        dishes: data
      }))
      .catch(error => {
        this.setState({
          errMsg: error.message,
        })
      });
    // axios.post('http://localhost:3001/dishes', { name: "Mushroom", price: "7899" })
    //   .then(response => console.log(response));
    // axios.put('http://localhost:3001/dishes/0', { name: "cheese-burger", price: "999" })
    //   .then(response => console.log(response))
    // axios.delete('http://localhost:3001/dishes/5')
    //   .then(response => console.log(response))
  }
  componentDidUpdate() {
    console.log("Update: ", this.state);
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
