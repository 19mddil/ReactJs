# Component Creation needs the call for 5 functions

- componentWillMount means the component is going to be rendered
- componentDidMount means the component has been mounted
- constructor(props) -> componentWillMount() -> render() -> nested childs inside the render -> componentDidMount()
- only change state in render() or componentDidMount()
# Component Creation Creation Creation Life Cycle Flow
![component creation life cycle pic](src/img/componentCreationLifeCycle.png)
# MainComponents
![mainComponent creation life cycle demonstration](src/img/mainComponent-creation-lifecycle-functions.png)
# BookListComponents
![bookList Component creation life cycle demonstrarion](src/img/BookList-Component-creation-lifecycle-functions.png)
# Book Components
![book component creation life cycle demonstration](src/img/BookComponent-creation-lifecycle-functions.png)
# Output
![lifecycle component creation life cyle output](src/img/creationLifeCycleSteps.png)

# Important

if you setState in willmount then 

componentWillMount -> render -> componentDidMount

but if you setState in didMount then 

componentWillMout -> render -> componentDidMount -> shouldComponentUpdate -> componentWillUpdate -> render -> componetDidUpdate

## Changing state in willmount
![](src/img/willMountStateSet.png)
## Changing state in Didmount
![](src/img/componentDidMountStateChange.png)
## Looping
Changing state in DidUpdate causes a Loop

Changing state in ShouldUpdate causes a Loop

Changing state in willUpdate causes a Loop



