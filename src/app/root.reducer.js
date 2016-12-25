import { combineReducers } from 'redux';

import explore from './explore/explore.reducer';
import player from './player/player.reducer';
import user from './user/user.reducer';

const rootReducer = combineReducers({
    explore,
    player,
    user
});

export default rootReducer;
