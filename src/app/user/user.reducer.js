const initialState = {
    loggedIn: false,
    token: null,
    user: null
};

export default function user (state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                loggedIn: true,
                token: action.payload.token
            };
        case 'ADD_USER':
            return {
                ...state,
                user: action.data
            };
        default:
            return state;
    }
}
