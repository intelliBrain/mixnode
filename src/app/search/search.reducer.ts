import { Action } from 'redux';
const initialState: any = {
    streams: [],
    users: [],
    tags: []
};

export default function(state = initialState, action: any) {
    switch (action.type) {
        case 'SEARCH_RESULTS': {
            const { streams, users } = action.data;
            return {
                ...state,
                streams,
                users
            };
        }
        default:
            return state;
    }
}
