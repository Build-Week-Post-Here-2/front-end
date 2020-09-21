import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {logger} from 'redux-logger'
import tuhnk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Router>
    <Provider store={store}>
    <App />
    </Provider>
</Router>, document.getElementById("root"));