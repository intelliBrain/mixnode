import {Provider} from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';

import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import history from 'react-router/lib/browserHistory';

import createStore from './app/store';
import App from './app/app';
import Explore from './app/explore/explore.container';
import CallbackComponent from './app/common/auth-callback.component';
import './styles/main.scss';

const store = createStore();

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Explore}></IndexRoute>
            </Route>
            <Route path="/callback" component={CallbackComponent} ></Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
