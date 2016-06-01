import Axios from 'axios';

const initialState = {
    feeds: [],
    page: 1
}

export default function browser(state = initialState, action) {
    switch(action.type){
        case 'GET_POPULAR':
            return Object.assign({}, state, {feeds: action.data});
        default:
            return state;
    }
}
