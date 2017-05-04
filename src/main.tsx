import { Provider } from 'react-redux';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createHashHistory as createHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './app/root.reducer';
const history = createHistory();
const routingMiddleware = routerMiddleware(history);

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, routingMiddleware)
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
