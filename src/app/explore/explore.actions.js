import Axios from 'axios';

export function getPopular () {
    return (dispatch) => {
        return Axios.get('//api.mixcloud.com/popular/?limit=40').then(res => {
            dispatch(addFeeds(res.data.data));
        });
    };
}

export function searchFeeds (query) {
    if (query) {
        let queryString = query.split(' ');
        queryString = queryString.join('+');
        return (dispatch) => {
            return Axios.get('//api.mixcloud.com/search/?q=' + queryString + '&type=cloudcast&limit=40').then(res => {
                dispatch(addFeeds(res.data.data));
            });
        };
    }
}

export function addFeeds (data) {
    return {
        type: 'ADD_FEEDS',
        data
    };
}
