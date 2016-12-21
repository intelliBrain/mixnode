import { combineReducers } from 'redux';

import browser from './browser/browser.reducer';
import player from './player/player.reducer';

const rootReducer = combineReducers({
    browser,
    player
});

export default rootReducer;
