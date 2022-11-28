# getDerivedStateFromProps
This functions in called before shouldComponentUpdate functions and both in creation or updating the component.

They have said that this function can replace
```js
    UNSAFE_componentWillMount() {
        console.log("BookList component willmount");
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("BookList componentWillReceiveProp: ", nextProps);
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("BookList componentWillUpdate, \nNextProps: ", nextProps, "\nNextState: ", nextState);
    }
``` 
with
```js
    static getDerivedStateFromProps(nextProps,prevState){
        //this function can replace state with props!
        return prevState;
    }
```

# getSnapshotBeforeUpdate

This function will take a snapshot of just before state of a component update.
```js
getSnapShotBeforeUpdate(){
    //it is called before componentDidUpdate()
}
```