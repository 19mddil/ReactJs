# Component Creation needs the call for 5 functions

- constructor(props) -> componentWillMount() -> render() -> nested childs inside the render -> componentDidMount()
- only change state in render() or componentDidMount()
![component life cycle pic](src/img/componentLifeCycle.png)

