const { configureStore } = require ('@reduxjs/toolkit');
const initialState = { number : 0 };

const reducer = ( state = initialState, action) => {
    if(action.type === 'ADD') { return ({ ...state, number: state.number + 1});}
    else if(action.type === 'ADD_VALUE') {
        return ({...state, number: state.number + action.value});
    }
    return state;
}

// create redux store
const store =  configureStore({ reducer : reducer });
console.log(store.getState());  // { number : 0 }
store.dispatch({ type: 'ADD'});     
console.log(store.getState());  // { number : 1 }
store.dispatch({ type : 'ADD_VALUE', value: 5});
console.log(store.getState());  // { number : 6 }
