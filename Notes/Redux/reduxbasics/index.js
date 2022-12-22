const redux = require('redux');

// console.log(redux);

//State
const initState = {
    num: 0
}

//Reducer
const rootReducer = (state = initState, action) => {
    if (action.type == 'ADD_NUM') {
        return {
            ...state,
            num: state.num + action.value,
        }
    }
    if (action.type === 'INC_NUM') {
        return {
            ...state,
            num: state.num + 1
        }
    }
    return state;
}

//Store
const store = redux.createStore(rootReducer);

const actionAddNum = {
    type: 'ADD_NUM',
    value: 10,
}

const incrementNum = {
    type: 'INC_NUM',
}

store.dispatch(actionAddNum);
store.dispatch(incrementNum);

console.log(store.getState());

//Dispatching Action
