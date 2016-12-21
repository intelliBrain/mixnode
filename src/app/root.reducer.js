import { combineReducers } from 'redux';

import explore from './explore/explore.reducer';
import player from './player/player.reducer';

const rootReducer = combineReducers({
    explore,
    player
});

export default rootReducer;
