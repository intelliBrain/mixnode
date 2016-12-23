const initialState = {
    playerWidget: null,
    playingSong: null
};

export default function player (state = initialState, action) {
    switch (action.type) {
        case 'PLAYER_INIT':
            return {
                ...state,
                playerWidget: action.playerWidget
            };
        case 'PLAYER_LOAD':
            state.playerWidget.load(action.song, true);
            return {
                ...state,
                playingSong: action.song
            };
        case 'PLAYER_PAUSE': 
            state.playerWidget.pause();
            return state;
        case 'PLAYER_TOGGLE': 
            state.playerWidget.togglePlay();
            return state;
        case 'PLAYER_SEEK': 
            state.playerWidget.seek(action.seekTo);
            return state;
        default:
            return state;
    }
}
