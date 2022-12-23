const redux = require('redux');

// console.log(redux);

//State 1
const initState = {
    num: 0
}

//Reducer 4
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
            num: state.num + 1,
        }
    }
    if (action.type === 'DEC_NUM') {
        return {
            ...state,
            num: state.num - 1,
        }
    }
    return state;
}

//Store 5 (updating store) 1
const store = redux.createStore(rootReducer);
store.subscribe(() => {
    console.log("[subscrib] :", store.getState());
});

//Actions 2
const actionAddNum = {
    type: 'ADD_NUM',
    value: 10,
}

const incrementNum = {
    type: 'INC_NUM',
}

const decrementNum = {
    type: 'DEC_NUM',
}

//Dispatching Actions 3

store.dispatch(actionAddNum);
store.dispatch(incrementNum);
store.dispatch(decrementNum);

//Dispatching Action
