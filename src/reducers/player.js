const initialState = {
    playingSong: 'spartacus/party-time'
};

export default function player (state = initialState, action) {
    switch (action.type) {
    case 'LOAD_SONG':
        return Object.assign({}, state, {playingSong: action.song});
    default:
        return state;
    }
}
