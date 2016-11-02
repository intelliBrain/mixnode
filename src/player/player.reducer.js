const initialState = {
    playerWidget: null,
    playingSong: null
};

export default function player (state = initialState, action) {
    switch (action.type) {
        case 'INIT_PLAYER':
            return Object.assign({}, state, {playerWidget: action.playerWidget});
        case 'LOAD_SONG':
            state.playerWidget.load(action.song, true);
            return Object.assign({}, state, {playingSong: action.song});
        default:
            return state;
    }
}
