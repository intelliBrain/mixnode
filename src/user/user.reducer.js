const initialState = {
    loggedIn: false,
    token: null
};

export default function user (state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN':
            return Object.assign({}, state, {loggedIn: true, token: action.payload.token});
        default:
            return state;
    }
}
