import { combineReducers } from 'redux';

import explore from './explore/explore.reducer';
import search from './search/search.reducer';
import player from './player/player.reducer';
import user from './user/user.reducer';

const rootReducer = combineReducers({
    explore,
    search,
    player,
    user
});

export default rootReducer;
