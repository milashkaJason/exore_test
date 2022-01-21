import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import productReducer from "./productReducer";

let reducers = combineReducers({
    product_store: productReducer
})

let store = createStore(
    reducers, composeWithDevTools(applyMiddleware(thunk))
);
window.store = store;
export default store;