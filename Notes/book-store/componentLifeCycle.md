# Component Creation needs the call for 5 functions

- componentWillMount means the component is going to be rendered
- componentDidMount means the component has been mounted
- constructor(props) -> componentWillMount() -> render() -> nested childs inside the render -> componentDidMount()
- only change state in render() or componentDidMount()
# Component Life Cycle Flow
![component life cycle pic](src/img/componentLifeCycle.png)
# MainComponents
![mainComponent demonstration](src/img/mainComponent-lifecycle-functions.png)
# BookListComponents
![bookList Component demonstrarion](src/img/BookList-Component-lifecycle-functions.png)
# Book Components
![book component demonstration](src/img/BookComponent-lifecycle-functions.png)
# Output
![lifecycle output](src/img/lifeCycleSteps.png)

