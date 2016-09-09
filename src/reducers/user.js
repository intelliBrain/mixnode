const initialState = {
    loggedIn: false
};

export default function user (state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN':
            return Object.assign({}, state, {loggedIn: true});
        default:
            return state;
    }
}
