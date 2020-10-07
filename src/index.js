import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux_store";
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom";  //BrowserRouter стояло поставил HashRouter для github
import {Provider} from "react-redux";


    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </HashRouter>,
        document.getElementById('root'));

//   В HashRouter или BrowserRouter вставить       basename={process.env.PUBLIC_URL}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
