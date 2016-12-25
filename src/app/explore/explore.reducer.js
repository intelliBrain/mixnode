const initialState = {
    feeds: [],
    page: 1
};

export default function explore (state = initialState, action) {
    switch (action.type) {
        case 'ADD_FEEDS':
            return {
                ...state,
                feeds: action.data
            };
        default:
            return state;
    }
}
