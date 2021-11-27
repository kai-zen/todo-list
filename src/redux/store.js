import { createStore } from "redux";
import todoReducer from './todoSlice'

export const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//subscribe
store.subscribe(() => console.log(store.getState()));