import { combineReducers } from 'redux';

import browser from './browser';
import player from './player';

const rootReducer = combineReducers({
    browser,
    player
});

export default rootReducer;
