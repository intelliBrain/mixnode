import {Provider} from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';

import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';
import './styles/main.less';

const store = createStore();

ReactDom.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);
