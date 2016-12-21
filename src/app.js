import {Provider} from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';

import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import history from 'react-router/lib/browserHistory';


import createStore from './app/store';
import AppContainer from './app/app.container';
import BrowserContainer from './app/browser/browser.container';
import CallbackComponent from './app/auth-callback/auth-callback.component';
import './styles/main.less';
const store = createStore();

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={AppContainer}>
                <IndexRoute component={BrowserContainer}></IndexRoute>
            </Route>
            <Route path="/callback" component={CallbackComponent} ></Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
