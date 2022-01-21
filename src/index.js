import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from './reducers/store';
import {setAllCreatedProductsAction} from "./reducers/productReducer";

/**
 * Сетаем из локалсторэджа массив с созданными продуктами в стэйт
 */
if (store.getState().product_store.created_products.length === 0) {
    const product_data = JSON.parse(localStorage.getItem("product_data"));
    product_data &&
    store.dispatch(setAllCreatedProductsAction(product_data))

}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
