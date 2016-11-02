import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import mixnode from './root.reducer';

export default function () {
    const store = createStore(mixnode, applyMiddleware(thunk));
    return store;
}
