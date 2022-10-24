const redux = require('redux');

// console.log(redux);

//State

const initState = {
    num: 0,
}

//Reducer
const rootReducer = (state = initState, action) => {
    return state;
}
//Store

const store = redux.createStore(rootReducer);

console.log(store.getState());