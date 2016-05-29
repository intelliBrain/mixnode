import { createStore } from 'redux'
import mixnode from '../reducers'

export default function () {
    const store = createStore(mixnode);
    return store;
}
