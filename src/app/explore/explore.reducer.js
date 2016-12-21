const initialState = {
    feeds: [],
    page: 1
};

export default function explore (state = initialState, action) {
    switch (action.type) {
        case 'GET_FEEDS':
            return Object.assign({}, state, {feeds: action.data});
        default:
            return state;
    }
}
