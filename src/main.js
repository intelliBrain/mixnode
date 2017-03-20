import { Provider } from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createHashHistory as createHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './app/root.reducer';
const history = createHistory();
const routingMiddleware = routerMiddleware(history);

const store = createStore(
    rootReducer,
    applyMiddleware(routingMiddleware, thunk)
);

import App from './app/app.container';
import './styles/main.scss';


ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={ history }>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
