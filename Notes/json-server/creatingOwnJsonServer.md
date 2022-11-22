# Installation
```bash
    npm install json-server -g
```
# Converting any.json into resource for REST-API
```bash
    json-server any.json --watch -p 3001
```

# From React App

## Installation
```bash
    npm install cross-fetch axios --save
```
## Using Fetch API

### App.js
```js
import React,{Component} from 'react';
import './App.css';
import fetch from 'cross-fetch';

class App extends Component{
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => console.log(data));
    }
    
    render(){
        return (
            <div>
            </div>
        )
    }
}

```

## Using axios

### App.js
```js
import React,{Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.data)
            .then(data => console.log(data));
    }
    
    render(){
        return (
            <div>
            </div>
        )
    }
}
```
## GET & Error Handling
```js
import React,{Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
    
    componentDidMount(){
        axios.get('https://localhost:3001/dishes')
            .then(res => res.data)
            .then(data => console.log(data))
            .catch(error => console.log(error.message));
    }
    
    render(){
        return (
            <div>
            </div>
        )
    }
}
```
## POST
```js
import React,{Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
    
    componentDidMount(){
        axios.post('https://localhost:3001/dishes',{ name: "Pizaa",price: "799"})
            .then(res => console.log(res));
    }
    
    render(){
        return (
            <div>
            </div>
        )
    }
}
```
## PUT
```js
import React,{Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
    
    componentDidMount(){
        axios.put('https://localhost:3001/dishes/0',{ name: "Cheese Cake",price: "250"})
            .then(res => console.log(res));
        
    }
    
    render(){
        return (
            <div>
            </div>
        )
    }
}
```
## DELETE
```js
import React,{Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
    
    componentDidMount(){
        axios.delete('https://localhost:3001/dishes/0')
            .then(res => console.log(res));
        
    }
    
    render(){
        return (
            <div>
            </div>
        )
    }
}
```