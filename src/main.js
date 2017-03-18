import {Provider} from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './app/root.reducer';
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const history = createBrowserHistory();

import App from './app/app.container';
import './styles/main.scss';


ReactDom.render(
    <Provider store={store}>
        <Router history={ history }>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);
