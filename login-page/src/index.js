import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';

import { reducer } from './store/reducers/userReducer'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Router>
    <Provider store={store}>
    <App />
    </Provider>
</Router>, document.getElementById("root"));