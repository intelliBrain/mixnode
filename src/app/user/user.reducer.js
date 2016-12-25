const initialState = {
    loggedIn: false,
    token: null,
    data: null
};

export default function user (state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                data: action.data,
                token: action.token,
                loggedIn: true
            };
        default:
            return state;
    }
}
