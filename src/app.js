import {Provider} from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import createStore from './store';
import AppContainer from './app.container';
import BrowserContainer from './browser/browser.container';
import './styles/main.less';

const store = createStore();

ReactDom.render(
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={BrowserContainer}></IndexRoute>
        </Route>
    </Router>
    </Provider>,
    document.getElementById('app')
);
