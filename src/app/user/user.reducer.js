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
        case 'LOG_OUT': 
            localStorage.removeItem('token');
            return initialState;
        default:
            return state;
    }
}
