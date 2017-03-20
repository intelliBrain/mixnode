import { combineReducers } from 'redux';

import explore from './explore/explore.reducer';
import search from './search/search.reducer';
import player from './player/player.reducer';
import user from './user/user.reducer';
import { routerReducer as router } from 'react-router-redux';

const rootReducer = combineReducers({
    explore,
    search,
    player,
    user,
    router
});

export default rootReducer;
